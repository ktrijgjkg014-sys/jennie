import Link from 'next/link'
import { ArrowRight, Shield, Terminal, BookOpen, Video, Users, Search, Crown, TrendingUp, Eye, Heart, Star, Award, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-tech-blue/10 to-deep-purple/10 tech-grid" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 premium-glow border-primary text-primary animate-glow">
            <Shield className="w-4 h-4 mr-2" />
            Cybersecurity Blog
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Ethical Hacking
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground font-normal">
              Moderno & Profesional
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Aprende ciberseguridad, penetration testing y ethical hacking con tutoriales profesionales, 
            herramientas actualizadas y contenido VIP exclusivo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="premium-glow text-lg px-8 py-6 animate-float">
              <Link href="/search">
                Explorar Artículos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/courses">
                <Crown className="w-5 h-5 mr-2" />
                Cursos VIP
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">1,250+</div>
              <div className="text-sm text-muted-foreground">Artículos</div>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-tech-blue">50+</div>
              <div className="text-sm text-muted-foreground">Cursos</div>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-premium-gold">15K+</div>
              <div className="text-sm text-muted-foreground">Estudiantes</div>
            </div>
            <div className="glass rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-premium-vip">2K+</div>
              <div className="text-sm text-muted-foreground">Miembros VIP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegir nuestro blog?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos completos y actualizados para convertirte en un profesional de la ciberseguridad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <Terminal className="w-10 h-10 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Tutoriales Prácticos</CardTitle>
                <CardDescription className="text-base">
                  Guías paso a paso con hands-on labs, ejercicios reales y código descargable
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-tech-blue mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Cursos Especializados</CardTitle>
                <CardDescription className="text-base">
                  Rutas de aprendizaje estructuradas desde principiante hasta experto con certificación
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-premium-vip/20 hover:border-premium-vip/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <Video className="w-10 h-10 text-premium-vip mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Contenido VIP</CardTitle>
                <CardDescription className="text-base">
                  Videos exclusivos, live streams semanales y mentoring personalizado para miembros VIP
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-premium-gold/20 hover:border-premium-gold/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <Award className="w-10 h-10 text-premium-gold mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Certificaciones</CardTitle>
                <CardDescription className="text-base">
                  Prepara y obtén certificaciones reconocidas en la industria de la ciberseguridad
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <Target className="w-10 h-10 text-cyber-cyan mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Herramientas Avanzadas</CardTitle>
                <CardDescription className="text-base">
                  Accede a herramientas profesionales, frameworks y scripts exclusivos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-deep-purple/20 hover:border-deep-purple/40 transition-all duration-300 premium-glow group">
              <CardHeader>
                <Zap className="w-10 h-10 text-deep-purple mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Actualizaciones Constantes</CardTitle>
                <CardDescription className="text-base">
                  Contenido actualizado semanalmente con las últimas vulnerabilidades y técnicas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-premium-vip/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="vip-badge text-lg px-4 py-2 mb-4 animate-premium-glow">
              <Crown className="w-5 h-5 mr-2" />
              Miembro VIP
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Desbloquea el Poder Completo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accede a contenido exclusivo, herramientas premium y mentoring personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-dark rounded-lg p-6 border border-premium-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-premium-gold" />
                <h3 className="font-semibold">Contenido Exclusivo</h3>
              </div>
              <p className="text-muted-foreground">
                Acceso a tutoriales avanzados, exploits zero-day y técnicas de pentesting de nivel profesional
              </p>
            </div>

            <div className="glass-dark rounded-lg p-6 border border-premium-vip/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-premium-vip" />
                <h3 className="font-semibold">Comunidad Privada</h3>
              </div>
              <p className="text-muted-foreground">
                Discord privado con otros profesionales, sesiones de Q&A y networking exclusivo
              </p>
            </div>

            <div className="glass-dark rounded-lg p-6 border border-tech-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-tech-blue" />
                <h3 className="font-semibold">Mentoring Personal</h3>
              </div>
              <p className="text-muted-foreground">
                Sesiones 1:1 con expertos, revisión de código y guidance personalizado en tu carrera
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="vip-badge text-lg px-8 py-6 animate-premium-glow">
              <Link href="/vip">
                <Crown className="w-5 h-5 mr-2" />
                Únete como VIP
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-4">
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
                title: "SQL Injection Avanzada: Bypass WAF",
                excerpt: "Técnicas avanzadas de bypass de Web Application Firewalls y filtros de seguridad",
                category: "Web Security",
                difficulty: "Avanzado",
                date: "2024-11-08",
                views: 1234,
                likes: 156,
                premium: true,
                vip: true
              },
              {
                title: "Reconocimiento con Nmap Scripts",
                excerpt: "Domina los NSE scripts para discovery avanzado y enumeración profunda",
                category: "Network Security", 
                difficulty: "Intermedio",
                date: "2024-11-07",
                views: 892,
                likes: 98,
                premium: false,
                vip: true
              },
              {
                title: "Burp Suite Pro Extensions",
                excerpt: "Las mejores extensiones de Burp Suite para automatizar pentesting",
                category: "Tools",
                difficulty: "Principiante",
                date: "2024-11-06", 
                views: 2103,
                likes: 234,
                premium: false,
                vip: false
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50 group">
                <CardHeader className="relative">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        article.difficulty === 'Principiante' ? 'border-green-400 text-green-400' :
                        article.difficulty === 'Intermedio' ? 'border-yellow-400 text-yellow-400' :
                        'border-red-400 text-red-400'
                      }`}
                    >
                      {article.difficulty}
                    </Badge>
                    {article.premium && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    {article.vip && (
                      <Badge className="vip-badge text-xs">
                        <Crown className="w-3 h-3 mr-1" />
                        VIP
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="hover:text-primary transition-colors group-hover:scale-[1.02]">
                    <Link href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  {article.vip && (
                    <div className="absolute inset-0 premium-overlay rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    <Button asChild size="sm" variant="ghost" className="group-hover:text-primary transition-colors">
                      <Link href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {article.vip ? 'Acceso VIP' : 'Leer más'}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="premium-glow">
              <Link href="/search">
                Ver todos los artículos
                <Search className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-premium-vip/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para dominar la ciberseguridad?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de profesionales y comienza tu journey en el ethical hacking con 
            contenido de calidad y mentoring personalizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="premium-glow text-lg px-8 py-6">
              <Link href="/courses">
                <Users className="w-5 h-5 mr-2" />
                Explorar Cursos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/search">
                <Search className="w-5 h-5 mr-2" />
                Buscar Contenido
              </Link>
            </Button>
            <Button asChild size="lg" className="vip-badge text-lg px-8 py-6 animate-premium-glow">
              <Link href="/vip">
                <Crown className="w-5 h-5 mr-2" />
                Membresía VIP
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}