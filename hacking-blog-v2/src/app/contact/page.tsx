"use client"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@ethicalhacking.com',
      description: 'Respuesta en 24 horas',
      color: 'text-cyan-400'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Lun-Vie 9:00-18:00',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Madrid, España',
      description: 'Cursos presenciales',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Soporte',
      value: '24/7 Disponible',
      description: 'Para estudiantes premium',
      color: 'text-purple-400'
    }
  ]

  const contactTypes = [
    { value: 'general', label: 'Consulta General' },
    { value: 'course', label: 'Información de Cursos' },
    { value: 'collaboration', label: 'Colaboración' },
    { value: 'bug-report', label: 'Reporte de Errores' },
    { value: 'feedback', label: 'Feedback/Sugerencias' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center border-green-400/20">
            <CardContent className="pt-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-4">¡Mensaje Enviado!</h1>
              <p className="text-muted-foreground mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos en un plazo de 24 horas.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', subject: '', message: '', type: 'general' })
                }}
                variant="outline"
              >
                Enviar otro mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            <MessageCircle className="w-3 h-3 mr-1" />
            Contacto
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hablemos de Ciberseguridad
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre ethical hacking, cursos o colaboración? 
            Estamos aquí para ayudarte. Contáctanos y te responderemos pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-cyan-400/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-cyan-400" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Tipo de consulta
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder="Describe tu consulta en detalle..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full neon-glow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Enviar Mensaje
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-muted ${info.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-foreground font-medium mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
                <CardDescription>
                  Respuestas rápidas a las consultas más comunes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">¿Cuánto tiempo tardan en responder?</h4>
                  <p className="text-sm text-muted-foreground">
                    Respondemos en un plazo máximo de 24 horas. Para consultas urgentes, utiliza WhatsApp.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">¿Ofrecen consultoría personalizada?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, trabajamos con empresas y organizaciones para crear soluciones de seguridad personalizadas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">¿Dónde están ubicados?</h4>
                  <p className="text-sm text-muted-foreground">
                    Actualmente ofrecemos cursos online y presenciales en Madrid. Consultas para otras ubicaciones son bienvenidas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}