import Link from 'next/link'
import { ArrowRight, Shield, Terminal, BookOpen, Video, Users, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 neon-glow border-cyan-400 text-cyan-400">
            <Shield className="w-3 h-3 mr-1" />
            Cybersecurity Blog
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ethical Hacking
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aprende ciberseguridad, penetration testing y ethical hacking con tutoriales profesionales y herramientas actualizadas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="neon-glow-lg">
              <Link href="/articles">
                Explorar Artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/courses">
                Cursos Online
                <BookOpen className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que encontrarás aquí
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos completos para convertirte en un profesional de la ciberseguridad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-cyan-400/20 hover:border-cyan-400/40 transition-all neon-glow">
              <CardHeader>
                <Terminal className="w-8 h-8 text-cyan-400 mb-2" />
                <CardTitle>Tutoriales Prácticos</CardTitle>
                <CardDescription>
                  Guías paso a paso con hands-on labs y ejercicios reales
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-400/20 hover:border-blue-400/40 transition-all neon-glow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle>Cursos Especializados</CardTitle>
                <CardDescription>
                  Rutas de aprendizaje estructuradas desde principiante hasta experto
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-400/20 hover:border-purple-400/40 transition-all neon-glow">
              <CardHeader>
                <Video className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle>Contenido Audiovisual</CardTitle>
                <CardDescription>
                  Videos explicativos y demostraciones en vivo de técnicas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-4 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Últimos Artículos
            </h2>
            <p className="text-lg text-muted-foreground">
              Mantente actualizado con las últimas técnicas y vulnerabilidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SQL Injection Avanzada",
                excerpt: "Técnicas avanzadas de inyección SQL y cómo protegerte",
                category: "Web Security",
                difficulty: "Avanzado",
                date: "2024-11-08"
              },
              {
                title: "Reconocimiento con Nmap",
                excerpt: "Mastering network discovery and enumeration",
                category: "Network Security",
                difficulty: "Intermedio",
                date: "2024-11-07"
              },
              {
                title: "Burp Suite Pro Guide",
                excerpt: "Complete guide to web application testing with Burp Suite",
                category: "Tools",
                difficulty: "Principiante",
                date: "2024-11-06"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {article.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="hover:text-cyan-400 transition-colors">
                    <Link href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Leer más
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/articles">
                Ver todos los artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar tu carrera en ciberseguridad?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a nuestra comunidad y comienza tu journey en el ethical hacking
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/courses">
                <Users className="w-4 h-4 mr-2" />
                Unirse a Cursos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/search">
                <Search className="w-4 h-4 mr-2" />
                Explorar Contenido
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}