import Link from 'next/link'
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  contenido: [
    { name: 'Artículos', href: '/articles' },
    { name: 'Cursos', href: '/courses' },
    { name: 'YouTube', href: '/youtube' },
    { name: 'Buscar', href: '/search' },
  ],
  recursos: [
    { name: 'Herramientas', href: '/tools' },
    { name: 'CTFs', href: '/ctfs' },
    { name: 'Bug Bounty', href: '/bug-bounty' },
    { name: 'Comunidad', href: '/community' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Términos de Uso', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Contacto', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:contact@ethicalhacking.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ethical Hacking
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Tu recurso profesional para aprender ciberseguridad, ethical hacking y penetration testing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contenido</h3>
                <ul className="space-y-2">
                  {footerLinks.contenido.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
                <ul className="space-y-2">
                  {footerLinks.recursos.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ethical Hacking Blog. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Construido con{' '}
              <Link 
                href="https://nextjs.org" 
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Link>
              {' '}y{' '}
              <Link 
                href="https://tailwindcss.com" 
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}