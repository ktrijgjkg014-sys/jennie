"use client"

import { useState, useMemo } from 'react'
import { Search, Filter, X, BookOpen, Clock, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
}

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
    tags: ['basic', 'methodology', 'ethics']
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
    tags: ['sql', 'web', 'injection', 'owasp']
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
    tags: ['nmap', 'network', 'scanning', 'reconnaissance']
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
    tags: ['burp', 'web', 'testing', 'tools']
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
    tags: ['buffer', 'overflow', 'exploits', 'binary']
  }
]

const categories = ['all', 'Fundamentos', 'Web Security', 'Network Security', 'Tools', 'Exploits', 'Malware', 'Cryptography']
const difficulties = ['all', 'Principiante', 'Intermedio', 'Avanzado']

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredArticles = useMemo(() => {
    return mockArticles.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'all' || article.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedCategory, selectedDifficulty])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedDifficulty('all')
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all'

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Buscar Contenido
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra tutoriales, herramientas y recursos de ciberseguridad
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, tutoriales, herramientas..."
              className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-border">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold">Filtros:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 focus:border-cyan-400 focus:outline-none"
            >
              <option value="all">Todas las categorías</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 focus:border-cyan-400 focus:outline-none"
            >
              <option value="all">Todas las dificultades</option>
              {difficulties.slice(1).map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
              >
                <X className="h-4 w-4 mr-1" />
                Limpiar
              </Button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-muted-foreground mb-6">
            Encontrados <span className="font-semibold text-foreground">{filteredArticles.length}</span> artículo{filteredArticles.length !== 1 ? 's' : ''}
          </p>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all border-border">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-400/20">
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
                      <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-cyan-400 transition-colors">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
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
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Button asChild size="sm" className="neon-glow">
                        <Link href={`/articles/${article.slug}`}>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Leer artículo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                <p className="text-muted-foreground mb-4">
                  Prueba ajustando los criterios de búsqueda o navegando por las categorías
                </p>
                <Button onClick={clearFilters} variant="outline">
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