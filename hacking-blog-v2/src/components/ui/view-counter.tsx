'use client'

import { useState, useEffect } from 'react'
import { Eye, TrendingUp } from 'lucide-react'

interface ViewCounterProps {
  articleId: string
  initialViews: number
  className?: string
  showIcon?: boolean
  showTrending?: boolean
  animate?: boolean
}

export function ViewCounter({
  articleId,
  initialViews,
  className = '',
  showIcon = true,
  showTrending = false,
  animate = true,
}: ViewCounterProps) {
  const [views, setViews] = useState(initialViews)
  const [hasCounted, setHasCounted] = useState(false)

  useEffect(() => {
    // Check if we've already counted this view
    const viewedArticles = JSON.parse(
      localStorage.getItem('viewed-articles') || '[]'
    )
    
    if (!viewedArticles.includes(articleId)) {
      setHasCounted(false)
    } else {
      setHasCounted(true)
    }
  }, [articleId])

  useEffect(() => {
    // Simulate view counting (in a real app, this would be an API call)
    if (!hasCounted) {
      const timer = setTimeout(async () => {
        try {
          // In a real app, make API call to increment views
          // await fetch(`/api/articles/${articleId}/views`, { method: 'POST' })
          
          // Update localStorage
          const viewedArticles = JSON.parse(
            localStorage.getItem('viewed-articles') || '[]'
          )
          if (!viewedArticles.includes(articleId)) {
            viewedArticles.push(articleId)
            localStorage.setItem('viewed-articles', JSON.stringify(viewedArticles))
          }
          
          // Increment views
          setViews(prev => prev + 1)
          setHasCounted(true)
        } catch (error) {
          console.error('Error counting view:', error)
        }
      }, 2000) // Count view after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [articleId, hasCounted])

  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <div className={`flex items-center gap-1 text-muted-foreground ${className}`}>
      {showIcon && (
        <Eye 
          className={`h-4 w-4 ${animate ? 'animate-pulse-soft' : ''}`} 
        />
      )}
      <span className={`text-sm font-medium ${animate ? 'transition-all duration-300' : ''}`}>
        {formatViews(views)}
      </span>
      {showTrending && (
        <TrendingUp className="h-3 w-3 text-green-500" />
      )}
    </div>
  )
}

// Compact version for small spaces
export function CompactViewCounter({
  articleId,
  initialViews,
  className = '',
}: Omit<ViewCounterProps, 'showIcon' | 'showTrending'>) {
  const [views] = useState(initialViews)

  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <div className={`flex items-center gap-1 text-muted-foreground ${className}`}>
      <Eye className="h-3 w-3" />
      <span className="text-xs font-medium">
        {formatViews(views)}
      </span>
    </div>
  )
}

// Detailed version with additional info
export function DetailedViewCounter({
  articleId,
  initialViews,
  className = '',
}: Omit<ViewCounterProps, 'showIcon' | 'showTrending'>) {
  const [views, setViews] = useState(initialViews)
  const [uniqueViews, setUniqueViews] = useState(Math.floor(initialViews * 0.7))
  const [avgTime, setAvgTime] = useState(Math.floor(Math.random() * 300) + 120)

  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            {formatViews(views)} visualizaciones
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          {uniqueViews} únicos
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground">
        Tiempo promedio: {formatTime(avgTime)}
      </div>
      
      <div className="w-full bg-muted rounded-full h-1">
        <div 
          className="bg-primary h-1 rounded-full transition-all duration-500"
          style={{ width: `${Math.min((views / 10000) * 100, 100)}%` }}
        />
      </div>
    </div>
  )
}