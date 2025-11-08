# 📋 Instrucciones de Despliegue - GitHub + Vercel

## 🚀 Despliegue Paso a Paso

### 1. Preparar el Repositorio GitHub

#### Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) y inicia sesión
2. Haz clic en "New repository" (botón verde)
3. Configura el repositorio:
   - **Repository name**: `ethical-hacking-blog-v2`
   - **Description**: `Modern Ethical Hacking Blog with VIP features, comments system, view tracking & premium content`
   - **Visibility**: Public (o Private si prefieres)
   - **Initialize**: NO marques "Add a README file" (ya tienes uno)
   - **Add .gitignore**: Node
   - **Add license**: MIT

#### Subir el Proyecto
```bash
# Navega a la carpeta del proyecto
cd ethical-hacking-blog-v2

# Inicializar git
git init

# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USERNAME/ethical-hacking-blog-v2.git

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: Modern Ethical Hacking Blog v2.0

✨ Features included:
- VIP content system with premium access
- Advanced comments system with nesting
- View tracking with analytics
- Smart pagination (9 items per page)
- Modern design with premium colors
- TypeScript strict mode
- Next.js 15 with App Router
- TailwindCSS with custom themes
- Responsive mobile-first design
- SEO optimized with meta tags
- Performance optimized
- Ready for Vercel deployment"

# Crear y cambiar a la rama main
git branch -M main

# Subir al repositorio
git push -u origin main
```

### 2. Configurar Vercel

#### Conectar Repositorio
1. Ve a [Vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio `ethical-hacking-blog-v2`
4. Vercel detectará automáticamente Next.js

#### Configurar Variables de Entorno (Opcional)
En la configuración del proyecto en Vercel, agrega estas variables:

```env
# Required (for production)
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app

# Optional (for enhanced features)
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=tu-channel-id
NEXT_PUBLIC_YOUTUBE_API_KEY=tu-youtube-api-key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-app-password

# Database URL (for future features)
# DATABASE_URL=postgresql://...
```

#### Configuración de Build
Vercel detectará automáticamente:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install` (o `bun install` si está configurado)

#### Desplegar
1. Haz clic en "Deploy"
2. Espera 2-3 minutos
3. ¡Tu blog estará en línea!

### 3. Configurar Dominio Personalizado (Opcional)

#### En Vercel
1. Ve a tu proyecto en Vercel Dashboard
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Configura DNS según las instrucciones

#### Configurar DNS
```dns
# Para Vercel, agrega estos registros:

# Tipo: A
# Nombre: @
# Valor: 76.76.19.61

# Tipo: CNAME
# Nombre: www
# Valor: cname.vercel-dns.com
```

### 4. Optimizaciones Adicionales

#### Performance
- **Imagenes**: Vercel las optimiza automáticamente
- **CDN**: Incluido en Vercel
- **Compresión**: Gzip/Brotli automático
- **Caching**: Headers optimizados

#### SEO
- **Meta Tags**: Ya configurados en `layout.tsx`
- **Sitemap**: Vercel genera automáticamente
- **Robots.txt**: Incluido
- **Open Graph**: Configurado

#### Analytics (Opcional)
```javascript
// Agregar a vercel.json para analytics
{
  "analyticsId": "YOUR_VERCEL_ANALYTICS_ID"
}
```

## 🔧 Configuraciones Avanzadas

### Vercel.json Personalizado
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {
    "src/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Variables por Entorno
```env
# Development (.env.local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Production (Vercel)
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NODE_ENV=production
```

## 🆘 Solución de Problemas

### Error: Build Failed
```bash
# Limpiar cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Error: Environment Variables
- Verifica que estén en Vercel Dashboard → Settings → Environment Variables
- No uses `process.env` directamente, usa `NEXT_PUBLIC_` para variables públicas

### Error: TypeScript
```bash
# Verificar tipos
npm run type-check

# Si hay errores, instala tipos faltantes
npm install @types/node @types/react @types/react-dom
```

### Error: CSS/Tailwind
```bash
# Regenerar estilos
npm run build

# Si hay problemas de cache
rm -rf .next
npm run build
```

## 📊 Monitoreo Post-Deployment

### Vercel Analytics
1. Ve a tu proyecto en Vercel
2. Click en "Analytics" para ver métricas:
   - **Page Views**: Estadísticas de tráfico
   - **Performance**: Core Web Vitals
   - **Errors**: Errores de runtime

### Google Analytics (Opcional)
1. Crea una propiedad en Google Analytics 4
2. Agrega el ID como `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Vercel regenerará con el tracking

### Monitoring
- **Uptime**: Vercel tiene 99.9% uptime
- **Performance**: Monitoreo automático
- **Errors**: Notificaciones por email

## 🔄 Actualizaciones Futuras

### Deploy Automático
Cada vez que hagas `git push` a la rama `main`, Vercel:
1. Detecta el cambio automáticamente
2. Hace build del proyecto
3. Despliega la nueva versión
4. Te notifica por email

### Workflow Recomendado
```bash
# Para nuevas características
git checkout -b feature/nueva-funcionalidad
# Haz cambios...
git add .
git commit -m "Add: nueva funcionalidad"
git push origin feature/nueva-funcionalidad

# Crea Pull Request en GitHub
# Merge a main → Vercel deploy automático
```

## 🎯 URLs Importantes

- **Tu blog**: `https://tu-proyecto.vercel.app`
- **GitHub repo**: `https://github.com/TU_USERNAME/ethical-hacking-blog-v2`
- **Vercel dashboard**: `https://vercel.com/dashboard`
- **Vercel project**: `https://vercel.com/TU_USERNAME/ethical-hacking-blog-v2`

## ✅ Checklist de Deployment

- [ ] Repositorio creado en GitHub
- [ ] Proyecto subido con git
- [ ] Conectado a Vercel
- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Sitio accesible online
- [ ] Dominio personalizado (opcional)
- [ ] Analytics configurado (opcional)
- [ ] SSL activo (automático en Vercel)
- [ ] Performance test exitoso

## 🆘 Soporte Adicional

### Documentación
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages](https://pages.github.com)

### Comunidad
- [Vercel Discord](https://discord.gg/vercel)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js+vercel)

---

¡Tu blog moderno está listo para conquistar la web! 🚀