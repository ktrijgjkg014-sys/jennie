'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X, BookOpen, Clock, Tag, Crown, Eye, Heart, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ModernPagination } from '@/components/ui/pagination'
import { ViewCounter, CompactViewCounter } from '@/components/ui/view-counter'
import Link from 'next/link'

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'
  readTime: number
  date: string
  slug: string
  tags: string[]
  views: number
  likes: number
  premium: boolean
  vipContent: boolean
  author: {
    name: string
    avatar?: string
  }
}

// Mock data con nuevas funcionalidades
const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Introducción al Ethical Hacking',
    excerpt: 'Aprende los fundamentos del hacking ético, conceptos básicos y metodología profesional.',
    category: 'Fundamentos',
    difficulty: 'Principiante',
    readTime: 10,
    date: '2024-11-08',
    slug: 'introduccion-ethical-hacking',
    tags: ['basic', 'methodology', 'ethics'],
    views: 1240,
    likes: 89,
    premium: false,
    vipContent: false,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 2,
    title: 'SQL Injection Avanzada: Técnicas y Prevención',
    excerpt: 'Domina las técnicas avanzadas de inyección SQL y aprende a proteger tus aplicaciones web.',
    category: 'Web Security',
    difficulty: 'Avanzado',
    readTime: 25,
    date: '2024-11-07',
    slug: 'sql-injection-avanzada',
    tags: ['sql', 'web', 'injection', 'owasp'],
    views: 892,
    likes: 156,
    premium: true,
    vipContent: false,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 3,
    title: 'Reconocimiento de Redes con Nmap',
    excerpt: 'Mastering network discovery, port scanning y service enumeration con Nmap.',
    category: 'Network Security',
    difficulty: 'Intermedio',
    readTime: 20,
    date: '2024-11-06',
    slug: 'nmap-reconocimiento-redes',
    tags: ['nmap', 'network', 'scanning', 'reconnaissance'],
    views: 654,
    likes: 92,
    premium: false,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 4,
    title: 'Burp Suite Pro: Complete Guide',
    excerpt: 'Guía completa para testing de aplicaciones web usando Burp Suite Professional.',
    category: 'Tools',
    difficulty: 'Intermedio',
    readTime: 30,
    date: '2024-11-05',
    slug: 'burp-suite-pro-guide',
    tags: ['burp', 'web', 'testing', 'tools'],
    views: 1023,
    likes: 201,
    premium: true,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 5,
    title: 'Buffer Overflow Exploits',
    excerpt: 'Entendiendo y explotando vulnerabilidades de buffer overflow en sistemas legacy.',
    category: 'Exploits',
    difficulty: 'Avanzado',
    readTime: 40,
    date: '2024-11-04',
    slug: 'buffer-overflow-exploits',
    tags: ['buffer', 'overflow', 'exploits', 'binary'],
    views: 445,
    likes: 78,
    premium: true,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 6,
    title: 'Metodología OWASP Top 10',
    excerpt: 'Análisis completo de las vulnerabilidades más críticas según OWASP.',
    category: 'Web Security',
    difficulty: 'Intermedio',
    readTime: 35,
    date: '2024-11-03',
    slug: 'owasp-top-10-methodology',
    tags: ['owasp', 'top10', 'web', 'security'],
    views: 1567,
    likes: 234,
    premium: false,
    vipContent: false,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 7,
    title: 'Advanced Persistent Threats (APT)',
    excerpt: 'Identificación y análisis de amenazas persistentes avanzadas.',
    category: 'Threat Intelligence',
    difficulty: 'Avanzado',
    readTime: 45,
    date: '2024-11-02',
    slug: 'apt-analysis',
    tags: ['apt', 'threat', 'intelligence', 'advanced'],
    views: 789,
    likes: 145,
    premium: true,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 8,
    title: 'Digital Forensics Fundamentals',
    excerpt: 'Fundamentos de forense digital y análisis de evidencia.',
    category: 'Forensics',
    difficulty: 'Principiante',
    readTime: 25,
    date: '2024-11-01',
    slug: 'digital-forensics-basics',
    tags: ['forensics', 'evidence', 'analysis', 'digital'],
    views: 356,
    likes: 67,
    premium: false,
    vipContent: false,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 9,
    title: 'Wireless Network Security',
    excerpt: 'Seguridad en redes inalámbricas y técnicas de pentesting WiFi.',
    category: 'Network Security',
    difficulty: 'Intermedio',
    readTime: 30,
    date: '2024-10-31',
    slug: 'wireless-security',
    tags: ['wireless', 'wifi', 'network', 'security'],
    views: 423,
    likes: 89,
    premium: false,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  },
  {
    id: 10,
    title: 'Cryptography in Practice',
    excerpt: 'Implementación práctica de algoritmos criptográficos en aplicaciones.',
    category: 'Cryptography',
    difficulty: 'Avanzado',
    readTime: 50,
    date: '2024-10-30',
    slug: 'cryptography-practice',
    tags: ['crypto', 'algorithms', 'implementation', 'security'],
    views: 234,
    likes: 45,
    premium: true,
    vipContent: true,
    author: {
      name: 'MiniMax Agent'
    }
  }
]

const categories = ['all', 'Fundamentos', 'Web Security', 'Network Security', 'Tools', 'Exploits', 'Malware', 'Cryptography', 'Forensics', 'Threat Intelligence']
const difficulties = ['all', 'Principiante', 'Intermedio', 'Avanzado']
const ITEMS_PER_PAGE = 9

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [showVipOnly, setShowVipOnly] = useState(false)

  const filteredArticles = useMemo(() => {
    return mockArticles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'all' || article.difficulty === selectedDifficulty
      const matchesPremium = !showPremiumOnly || article.premium
      const matchesVip = !showVipOnly || article.vipContent

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPremium && matchesVip
    })
  }, [searchQuery, selectedCategory, selectedDifficulty, showPremiumOnly, showVipOnly])

  // Paginación
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedDifficulty('all')
    setShowPremiumOnly(false)
    setShowVipOnly(false)
    setCurrentPage(1)
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all' || showPremiumOnly || showVipOnly

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Buscar Contenido
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra tutoriales, herramientas y recursos de ciberseguridad
          </p>
        </div>

        {/* Search Bar */}
        <div className="glass-dark rounded-2xl p-6 mb-8 border border-border/50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, tutoriales, herramientas..."
              className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none text-lg backdrop-blur-sm transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="glass-dark rounded-2xl p-6 mb-8 border border-border/50">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span className="font-semibold">Filtros:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background/50 border border-border rounded-lg px-3 py-2 focus:border-primary focus:outline-none backdrop-blur-sm"
            >
              <option value="all">Todas las categorías</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-background/50 border border-border rounded-lg px-3 py-2 focus:border-primary focus:outline-none backdrop-blur-sm"
            >
              <option value="all">Todas las dificultades</option>
              {difficulties.slice(1).map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="premium"
                checked={showPremiumOnly}
                onChange={(e) => setShowPremiumOnly(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="premium" className="text-sm flex items-center gap-1">
                <Tag className="h-4 w-4 text-yellow-500" />
                Premium
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="vip"
                checked={showVipOnly}
                onChange={(e) => setShowVipOnly(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="vip" className="text-sm flex items-center gap-1">
                <Crown className="h-4 w-4 text-premium-gold" />
                VIP
              </label>
            </div>

            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white transition-all"
              >
                <X className="h-4 w-4 mr-1" />
                Limpiar
              </Button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Encontrados <span className="font-semibold text-foreground">{filteredArticles.length}</span> artículo{filteredArticles.length !== 1 ? 's' : ''}
            </p>
            {totalPages > 1 && (
              <p className="text-sm text-muted-foreground">
                Página {currentPage} de {totalPages}
              </p>
            )}
          </div>

          {filteredArticles.length > 0 ? (
            <>
              <div className="grid gap-6">
                {paginatedArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-xl transition-all duration-300 border-border/50 glass-dark group">
                    <CardHeader className="relative">
                      {/* Content Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {article.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={
                            article.difficulty === 'Principiante' ? 'border-green-400 text-green-400' :
                            article.difficulty === 'Intermedio' ? 'border-yellow-400 text-yellow-400' :
                            'border-red-400 text-red-400'
                          }
                        >
                          {article.difficulty}
                        </Badge>
                        {article.premium && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <Tag className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                        {article.vipContent && (
                          <Badge className="vip-badge">
                            <Crown className="w-3 h-3 mr-1" />
                            VIP
                          </Badge>
                        )}
                      </div>

                      <CardTitle className="text-2xl hover:text-primary transition-colors group-hover:scale-[1.02]">
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{article.excerpt}</CardDescription>
                      
                      {/* Content Overlay para VIP */}
                      {article.vipContent && (
                        <div className="absolute inset-0 premium-overlay rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} min</span>
                          </div>
                          <CompactViewCounter 
                            articleId={article.id.toString()} 
                            initialViews={article.views} 
                          />
                          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                            <Heart className="w-4 h-4" />
                            <span>{article.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                            <User className="w-4 h-4" />
                            <span>{article.author.name}</span>
                          </div>
                        </div>
                        <Button asChild size="sm" className="premium-glow group-hover:scale-105 transition-transform">
                          <Link href={`/articles/${article.slug}`}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            {article.vipContent ? 'Acceso VIP' : 'Leer artículo'}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <ModernPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    maxVisiblePages={7}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                <p className="text-muted-foreground mb-4">
                  Prueba ajustando los criterios de búsqueda o navegando por las categorías
                </p>
                <Button onClick={clearFilters} variant="outline" className="premium-glow">
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}