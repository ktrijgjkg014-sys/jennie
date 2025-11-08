import { Metadata } from 'next'
import { Video, Clock, Users, Star, BookOpen, Target, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos de Ethical Hacking',
  description: 'Aprende ciberseguridad con nuestros cursos especializados. Desde principiante hasta experto en penetration testing.',
}

const courses = [
  {
    id: 'ethical-hacking-basics',
    title: 'Fundamentos de Ethical Hacking',
    description: 'Introducción completa al ethical hacking, metodología, herramientas básicas y aspectos legales.',
    level: 'Principiante',
    duration: '20 horas',
    students: 1250,
    rating: 4.8,
    price: 'Gratis',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
    modules: [
      'Introducción al Ethical Hacking',
      'Configuración del Entorno de Trabajo',
      'Footprinting y Reconnaissance',
      'Network Scanning',
      'Vulnerability Assessment'
    ],
    skills: ['Linux', 'Networking', 'Python básico', 'Virtualización'],
    featured: true
  },
  {
    id: 'web-application-security',
    title: 'Web Application Security Testing',
    description: 'Testing completo de aplicaciones web, OWASP Top 10, y técnicas de explotación.',
    level: 'Intermedio',
    duration: '35 horas',
    students: 890,
    rating: 4.9,
    price: '$99',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    modules: [
      'OWASP Top 10 2021',
      'SQL Injection y NoSQL Injection',
      'Cross-Site Scripting (XSS)',
      'Cross-Site Request Forgery',
      'Authentication and Session Management',
      'Insecure Direct Object References'
    ],
    skills: ['Burp Suite', 'SQL', 'JavaScript', 'HTTP', 'OWASP'],
    featured: true
  },
  {
    id: 'network-penetration-testing',
    title: 'Network Penetration Testing',
    description: 'Técnicas avanzadas de pentesting en redes, explotación de servicios y pivoting.',
    level: 'Avanzado',
    duration: '45 horas',
    students: 567,
    rating: 4.7,
    price: '$149',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    modules: [
      'Network Reconnaissance Avanzado',
      'Explotación de Servicios',
      'Privilege Escalation',
      'Lateral Movement y Pivoting',
      'Post-Exploitation',
      'Report Writing'
    ],
    skills: ['Nmap', 'Metasploit', 'PowerShell', 'Wireshark', 'OSCP'],
    featured: false
  },
  {
    id: 'malware-analysis',
    title: 'Malware Analysis Fundamentals',
    description: 'Análisis estático y dinámico de malware, reverse engineering y detección de amenazas.',
    level: 'Avanzado',
    duration: '40 horas',
    students: 334,
    rating: 4.6,
    price: '$129',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
    modules: [
      'Static Analysis Techniques',
      'Dynamic Analysis',
      'Reverse Engineering Basics',
      'YARA Rules',
      'Threat Intelligence',
      'Incident Response'
    ],
    skills: ['IDA Pro', 'Ghidra', 'OllDbg', 'YARA', 'Assembly'],
    featured: false
  }
]

const levelColors = {
  'Principiante': 'border-green-400 text-green-400',
  'Intermedio': 'border-yellow-400 text-yellow-400',
  'Avanzado': 'border-red-400 text-red-400'
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            <Video className="w-3 h-3 mr-1" />
            Cursos Online
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Academia de Ethical Hacking
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aprende ciberseguridad con cursos estructurados, desde fundamentos hasta técnicas avanzadas. 
            Contenido práctico con laboratorios hands-on.
          </p>
        </div>

        {/* Featured Courses */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold">Cursos Destacados</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.filter(course => course.featured).map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-all border-cyan-400/20">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-black font-semibold">
                      Destacado
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className={levelColors[course.level as keyof typeof levelColors]}>
                      {course.level}
                    </Badge>
                    <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400">
                      {course.price}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl hover:text-cyan-400 transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Lo que aprenderás:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {course.modules.slice(0, 3).map((module, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Target className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          {module}
                        </li>
                      ))}
                      {course.modules.length > 3 && (
                        <li className="text-cyan-400 text-xs">
                          +{course.modules.length - 3} módulos más
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Habilidades clave:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full neon-glow">
                    <Link href={`/courses/${course.id}`}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ver Curso Completo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Courses */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold">Todos los Cursos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-all h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-32 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={course.featured ? 'bg-yellow-400 text-black' : 'bg-muted'}>
                      {course.featured ? '⭐' : 'Course'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={`text-xs ${levelColors[course.level as keyof typeof levelColors]}`}>
                      {course.level}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {course.price}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg hover:text-cyan-400 transition-colors">
                    <Link href={`/courses/${course.id}`}>
                      {course.title}
                    </Link>
                  </CardTitle>
                  
                  <CardDescription className="text-sm line-clamp-3">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/courses/${course.id}`}>
                      Ver Detalles
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="border-cyan-400/20 bg-gradient-to-r from-cyan-900/10 to-blue-900/10">
            <CardContent className="pt-8">
              <Award className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                ¿Necesitas un curso personalizado?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Creamos cursos personalizados para equipos y organizaciones. 
                Contenido adaptado a tus necesidades específicas de seguridad.
              </p>
              <Button asChild size="lg" className="neon-glow-lg">
                <Link href="/contact">
                  Contactar para Curso Personalizado
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}