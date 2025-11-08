import { Metadata } from 'next'
import { Youtube, Play, Clock, Eye, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube - Ethical Hacking',
  description: 'Videos educativos sobre ciberseguridad, ethical hacking y penetration testing. Tutorials prácticos y demostraciones en vivo.',
  openGraph: {
    title: 'YouTube - Ethical Hacking Blog',
    description: 'Videos educativos sobre ciberseguridad, ethical hacking y penetration testing.',
    type: 'video.other',
  },
}

const featuredVideos = [
  {
    id: 'sql-injection-advanced',
    title: 'SQL Injection Avanzada: Técnica Blind SQL Injection',
    description: 'Aprende a explotar vulnerabilidades SQL con técnicas blind injection y automatización con SQLMap.',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop',
    duration: '42:15',
    views: '15.2K',
    published: '2024-11-01',
    category: 'Web Security',
    level: 'Avanzado',
    isLive: false
  },
  {
    id: 'burp-suite-pro-guide',
    title: 'Burp Suite Pro: Web App Testing Masterclass',
    description: 'Tutorial completo sobre testing de aplicaciones web con Burp Suite Professional, extensiones y automatización.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    duration: '1:23:45',
    views: '23.7K',
    published: '2024-10-28',
    category: 'Tools',
    level: 'Intermedio',
    isLive: false
  },
  {
    id: 'network-penetration-testing-live',
    title: 'Red Team Operation: End-to-End Pentest',
    description: 'Demo en vivo de un penetration test completo, desde reconnaissance hasta post-exploitation.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop',
    duration: '2:15:30',
    views: '8.9K',
    published: '2024-10-25',
    category: 'Red Team',
    level: 'Avanzado',
    isLive: true,
    liveTime: 'Próximo: Viernes 15:00 CET'
  }
]

const recentVideos = [
  {
    title: 'Vulnerability Scanning with Nuclei',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop',
    duration: '18:30',
    views: '5.2K',
    published: '2 días',
    category: 'Automation'
  },
  {
    title: 'OAuth Security Testing',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    duration: '25:45',
    views: '7.8K',
    published: '1 semana',
    category: 'Authentication'
  },
  {
    title: 'Linux Exploitation Techniques',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
    duration: '35:20',
    views: '12.1K',
    published: '2 semanas',
    category: 'Systems'
  },
  {
    title: 'Password Cracking with Hashcat',
    thumbnail: 'https://images.unsplash.com/photo-1510511336377-1a9caa095974?w=300&h=200&fit=crop',
    duration: '22:15',
    views: '9.4K',
    published: '3 semanas',
    category: 'Cracking'
  }
]

const playlists = [
  {
    title: 'Ethical Hacking Fundamentals',
    description: 'Serie completa para principiantes en ethical hacking',
    videoCount: 12,
    duration: '8h 45m',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    color: 'from-green-400 to-blue-500'
  },
  {
    title: 'Advanced Web Security',
    description: 'Técnicas avanzadas de testing en aplicaciones web',
    videoCount: 8,
    duration: '6h 20m',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop',
    color: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Network Pentesting',
    description: 'Masterclass completo de network penetration testing',
    videoCount: 15,
    duration: '12h 30m',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    color: 'from-cyan-400 to-blue-500'
  }
]

const channelStats = {
  subscribers: '45.2K',
  totalViews: '1.2M',
  videos: 156,
  since: '2022'
}

export default function YouTubePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-400 border-red-400">
            <Youtube className="w-3 h-3 mr-1" />
            YouTube Channel
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            Canal de Ethical Hacking
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Videos educativos sobre ciberseguridad, ethical hacking y penetration testing. 
            Tutorials prácticos, demostraciones en vivo y análisis de casos reales.
          </p>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Suscriptores', value: channelStats.subscribers, icon: Youtube },
            { label: 'Visualizaciones', value: channelStats.totalViews, icon: Eye },
            { label: 'Videos', value: channelStats.videos, icon: Play },
            { label: 'Desde', value: channelStats.since, icon: Calendar }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-red-400/20">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Videos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Play className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-bold">Videos Destacados</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-xl transition-all border-red-400/20 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-xl"
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
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-red-500/10 text-red-400">
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
                  </div>
                  
                  <CardTitle className="text-lg hover:text-red-400 transition-colors line-clamp-2">
                    {video.title}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-2">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{video.published}</span>
                    </div>
                  </div>
                  
                  {video.isLive && (
                    <div className="mb-4 p-2 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-400">
                      {video.liveTime}
                    </div>
                  )}
                  
                  <Button asChild className="w-full" variant="outline">
                    <a 
                      href={`https://youtube.com/watch?v=${video.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      Ver en YouTube
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Play className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-bold">Playlists</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <div className="relative">
                  <div className={`h-32 bg-gradient-to-r ${playlist.color} rounded-t-xl flex items-center justify-center`}>
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/80 text-white">
                      {playlist.videoCount} videos
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg hover:text-red-400 transition-colors">
                    {playlist.title}
                  </CardTitle>
                  <CardDescription>
                    {playlist.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{playlist.videoCount} videos</span>
                    <span>{playlist.duration}</span>
                  </div>
                  
                  <Button asChild className="w-full" variant="outline">
                    <a 
                      href={`https://youtube.com/playlist?list=PL${index + 1}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver Playlist
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Videos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-bold">Videos Recientes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentVideos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-all group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-1 right-1">
                    <Badge className="bg-black/80 text-white text-xs">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.views}</span>
                    <span>{video.published}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-red-400/20 bg-gradient-to-r from-red-900/10 to-red-600/10">
            <CardContent className="pt-8">
              <Youtube className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                ¡Suscríbete a nuestro canal!
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                No te pierdas ningún video nuevo. Suscríbete y activa las notificaciones 
                para recibir las últimas técnicas de ethical hacking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
                  <a 
                    href="https://youtube.com/@ethicalhacking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Suscribirse al Canal
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://youtube.com/@ethicalhacking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver en YouTube
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