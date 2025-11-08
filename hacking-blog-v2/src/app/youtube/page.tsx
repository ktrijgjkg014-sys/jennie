import { Metadata } from 'next'
import { Youtube, Play, Clock, Eye, Calendar, ExternalLink, Crown, Star, Heart, Users, Zap, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CompactViewCounter } from '@/components/ui/view-counter'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube VIP - Ethical Hacking',
  description: 'Videos educativos VIP sobre ciberseguridad, ethical hacking y penetration testing. Contenido exclusivo para miembros premium con tutorials avanzados y live streams semanales.',
  openGraph: {
    title: 'YouTube VIP - Ethical Hacking Blog',
    description: 'Videos educativos VIP sobre ciberseguridad, ethical hacking y penetration testing.',
    type: 'video.other',
  },
}

const featuredVideos = [
  {
    id: 'sql-injection-vip-advanced',
    title: 'VIP: SQL Injection Av Bypass WAF 2024',
    description: 'Técnicas exclusivas de bypass de Web Application Firewalls con métodos no documentados. Solo para miembros VIP.',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop',
    duration: '58:45',
    views: 15200,
    likes: 1456,
    published: '2024-11-01',
    category: 'Web Security',
    level: 'Avanzado',
    isLive: false,
    isVip: true,
    isPremium: true,
    liveTime: null
  },
  {
    id: 'burp-suite-vip-masterclass',
    title: 'VIP: Burp Suite Pro - Zero to Hero',
    description: 'Masterclass completo de Burp Suite Pro con extensiones exclusivas y automatización avanzada.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    duration: '1:45:30',
    views: 23700,
    likes: 2134,
    published: '2024-10-28',
    category: 'Tools',
    level: 'Intermedio',
    isLive: false,
    isVip: true,
    isPremium: true,
    liveTime: null
  },
  {
    id: 'red-team-vip-operation',
    title: 'VIP: Red Team Live Operation (Solo VIP)',
    description: 'Demo en vivo exclusiva de una operación Red Team completa. Acceso limitado a miembros VIP.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop',
    duration: '2:35:15',
    views: 8900,
    likes: 756,
    published: '2024-10-25',
    category: 'Red Team',
    level: 'Avanzado',
    isLive: true,
    isVip: true,
    isPremium: false,
    liveTime: 'Próximo: Viernes 20:00 CET'
  }
]

const recentVideos = [
  {
    title: 'VIP: Advanced Persistent Threats (APT) Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop',
    duration: '42:30',
    views: 12200,
    likes: 892,
    published: '2 días',
    category: 'Threat Intelligence',
    isVip: true,
    isPremium: true
  },
  {
    title: 'OAuth & JWT Security Deep Dive',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    duration: '35:45',
    views: 8900,
    likes: 734,
    published: '4 días',
    category: 'Authentication',
    isVip: true,
    isPremium: false
  },
  {
    title: 'Linux Kernel Exploitation Techniques',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
    duration: '48:20',
    views: 15600,
    likes: 1203,
    published: '1 semana',
    category: 'Systems',
    isVip: true,
    isPremium: true
  },
  {
    title: 'VIP: Hashcat & Password Cracking Mastery',
    thumbnail: 'https://images.unsplash.com/photo-1510511336377-1a9caa095974?w=300&h=200&fit=crop',
    duration: '31:15',
    views: 11200,
    likes: 956,
    published: '1 semana',
    category: 'Cracking',
    isVip: true,
    isPremium: false
  },
  {
    title: 'Cloud Security: AWS & Azure Pentesting',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop',
    duration: '39:10',
    views: 9800,
    likes: 823,
    published: '2 semanas',
    category: 'Cloud Security',
    isVip: true,
    isPremium: true
  },
  {
    title: 'Mobile App Security Testing',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
    duration: '28:35',
    views: 7600,
    likes: 612,
    published: '2 semanas',
    category: 'Mobile Security',
    isVip: true,
    isPremium: false
  }
]

const vipPlaylists = [
  {
    title: 'VIP: Advanced Web Exploitation',
    description: 'Técnicas avanzadas de explotación web exclusivas para miembros VIP',
    videoCount: 12,
    duration: '8h 45m',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop',
    color: 'from-premium-gold to-premium-vip',
    isVip: true,
    isPremium: true
  },
  {
    title: 'VIP: Red Team Operations',
    description: 'Operaciones completas de Red Team con metodologías profesionales',
    videoCount: 15,
    duration: '12h 30m',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    color: 'from-primary to-tech-blue',
    isVip: true,
    isPremium: true
  },
  {
    title: 'VIP: Threat Hunting & Analysis',
    description: 'Caza de amenazas y análisis forense avanzado',
    videoCount: 18,
    duration: '15h 20m',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    color: 'from-deep-purple to-premium-vip',
    isVip: true,
    isPremium: false
  }
]

const freeContent = [
  {
    title: 'Introducción al Ethical Hacking',
    description: 'Fundamentos básicos para principiantes',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
    duration: '25:00',
    views: 25400,
    published: '3 semanas'
  }
]

const channelStats = {
  subscribers: '52.3K',
  totalViews: '2.1M',
  videos: 187,
  since: '2022',
  vipMembers: '2.1K'
}

export default function YouTubePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="vip-badge text-lg px-4 py-2 animate-premium-glow">
              <Crown className="w-5 h-5 mr-2" />
              Canal VIP
            </Badge>
            <Badge variant="outline" className="text-red-400 border-red-400">
              <Youtube className="w-4 h-4 mr-1" />
              YouTube
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Canal VIP de Ethical Hacking
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contenido VIP exclusivo sobre ciberseguridad, ethical hacking y penetration testing. 
            Tutorials avanzados, live streams semanales y análisis de casos reales solo para miembros premium.
          </p>
        </div>

        {/* VIP Features Banner */}
        <div className="glass-dark rounded-2xl p-6 mb-12 border border-premium-gold/30">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 gradient-text-premium">
              <Crown className="w-6 h-6 inline mr-2" />
              Beneficios VIP
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <Star className="w-8 h-8 text-premium-gold mx-auto mb-2" />
              <h3 className="font-semibold">Contenido Exclusivo</h3>
              <p className="text-sm text-muted-foreground">Videos avanzados y técnicas no publicadas</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Live Streams</h3>
              <p className="text-sm text-muted-foreground">Sesiones semanales en vivo y Q&A</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-premium-vip mx-auto mb-2" />
              <h3 className="font-semibold">Comunidad Privada</h3>
              <p className="text-sm text-muted-foreground">Acceso a Discord exclusivo y mentoring</p>
            </div>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {[
            { label: 'Suscriptores', value: channelStats.subscribers, icon: Youtube, color: 'text-red-400' },
            { label: 'Visualizaciones', value: channelStats.totalViews, icon: Eye, color: 'text-tech-blue' },
            { label: 'Videos VIP', value: channelStats.videos, icon: Play, color: 'text-premium-gold' },
            { label: 'Miembros VIP', value: channelStats.vipMembers, icon: Crown, color: 'text-premium-vip' },
            { label: 'Desde', value: channelStats.since, icon: Calendar, color: 'text-muted-foreground' }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* VIP Featured Videos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="h-6 w-6 text-premium-gold" />
            <h2 className="text-2xl font-bold">Videos VIP Destacados</h2>
            <Badge className="vip-badge">Solo para Miembros</Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-xl transition-all duration-300 border-border/50 group relative overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-black/80 text-white text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                  {video.isLive && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white animate-pulse">
                        🔴 EN VIVO
                      </Badge>
                    </div>
                  )}
                  {video.isVip && (
                    <div className="absolute top-2 right-2">
                      <Badge className="vip-badge text-xs">
                        <Crown className="w-3 h-3 mr-1" />
                        VIP
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 premium-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {video.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={
                        video.level === 'Principiante' ? 'border-green-400 text-green-400' :
                        video.level === 'Intermedio' ? 'border-yellow-400 text-yellow-400' :
                        'border-red-400 text-red-400'
                      }
                    >
                      {video.level}
                    </Badge>
                    {video.isPremium && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2 group-hover:scale-[1.02]">
                    {video.title}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-2 text-sm">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <CompactViewCounter 
                        articleId={video.id} 
                        initialViews={video.views} 
                        className="text-xs"
                      />
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span className="text-xs">{video.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{video.published}</span>
                    </div>
                  </div>
                  
                  {video.isLive && video.liveTime && (
                    <div className="mb-4 p-2 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-400">
                      {video.liveTime}
                    </div>
                  )}
                  
                  <Button asChild className="w-full premium-glow" size="sm">
                    <a 
                      href={`https://youtube.com/watch?v=${video.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Acceso VIP
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* VIP Playlists */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-premium-gold" />
            <h2 className="text-2xl font-bold">Playlists VIP Exclusivas</h2>
            <Badge className="vip-badge">Contenido Premium</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipPlaylists.map((playlist, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50 group">
                <div className="relative">
                  <div className={`h-32 bg-gradient-to-r ${playlist.color} rounded-t-xl flex items-center justify-center relative overflow-hidden`}>
                    <Play className="h-12 w-12 text-white z-10" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="vip-badge text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      VIP
                    </Badge>
                  </div>
                  {playlist.isPremium && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg hover:text-primary transition-colors group-hover:scale-[1.02]">
                    {playlist.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {playlist.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{playlist.videoCount} videos</span>
                    <span>{playlist.duration}</span>
                  </div>
                  
                  <Button asChild className="w-full premium-glow" size="sm">
                    <a 
                      href={`https://youtube.com/playlist?list=PL${index + 1}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Acceso VIP
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent VIP Videos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Videos VIP Recientes</h2>
            <Badge className="vip-badge">Últimas Actualizaciones</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-border/50">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-1 right-1">
                    <Badge className="bg-black/80 text-white text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-1 right-1">
                    <Badge className="vip-badge text-xs">
                      <Crown className="w-3 h-3" />
                    </Badge>
                  </div>
                  {video.isPremium && (
                    <div className="absolute top-1 left-1">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        <Star className="w-2 h-2 mr-1" />
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <CompactViewCounter 
                        articleId={`recent-${index}`} 
                        initialViews={video.views} 
                        className="text-xs"
                      />
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{video.likes}</span>
                      </div>
                    </div>
                    <span>{video.published}</span>
                  </div>
                  
                  <Button asChild size="sm" className="w-full premium-glow" variant="ghost">
                    <a 
                      href={`https://youtube.com/watch?v=recent-${index}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Crown className="w-3 h-3 mr-1" />
                      Acceso VIP
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Free Content CTA */}
        <section className="mb-16">
          <div className="text-center">
            <Card className="border-border/50 bg-gradient-to-r from-muted/20 to-primary/5">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  Contenido Gratuito Limitado
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explora algunos de nuestros videos gratuitos y descubre la calidad de nuestro contenido VIP
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="premium-glow">
                    <Link href="/vip">
                      <Crown className="w-5 h-5 mr-2" />
                      Acceder a VIP
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a 
                      href="https://youtube.com/@ethicalhacking" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      Ver Contenido Gratuito
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-premium-gold/20 bg-gradient-to-r from-premium-gold/10 to-premium-vip/10 premium-glow-vip">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="h-8 w-8 text-premium-gold" />
                <Youtube className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4 gradient-text-premium">
                ¡Únete al canal VIP!
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Accede a contenido exclusivo, live streams semanales, comunidad privada y mentoring personalizado. 
                ¡Solo para miembros VIP!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="vip-badge text-lg px-8 py-6 animate-premium-glow">
                  <Link href="/vip">
                    <Crown className="w-5 h-5 mr-2" />
                    Unirse a VIP
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a 
                    href="https://youtube.com/@ethicalhacking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Ver Canal Público
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}