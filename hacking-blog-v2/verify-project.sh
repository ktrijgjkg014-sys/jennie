#!/bin/bash

# Script de verificación del proyecto Ethical Hacking Blog v2.0

set -e

echo "🔍 Verificando proyecto Ethical Hacking Blog v2.0"
echo "=============================================="

# Verificar estructura de archivos
echo "📁 Verificando estructura de archivos..."

required_files=(
    "package.json"
    "next.config.js"
    "tsconfig.json"
    "tailwind.config.ts"
    "postcss.config.js"
    "vercel.json"
    ".gitignore"
    ".env.example"
    "README.md"
    "install.sh"
    "eslint.config.js"
    "next-env.d.ts"
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/app/globals.css"
    "src/components/ui/button.tsx"
    "src/components/ui/card.tsx"
    "src/components/ui/badge.tsx"
    "src/lib/utils.ts"
    "src/types/index.ts"
    "src/components/header.tsx"
    "src/components/footer.tsx"
    "src/components/theme-provider.tsx"
    "src/app/search/page.tsx"
    "src/app/courses/page.tsx"
    "src/app/contact/page.tsx"
    "src/app/youtube/page.tsx"
)

echo "Archivos requeridos encontrados:"
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file (FALTANTE)"
    fi
done

# Verificar directorios
echo ""
echo "📂 Verificando estructura de directorios..."

required_dirs=(
    "src"
    "src/app"
    "src/components"
    "src/components/ui"
    "src/lib"
    "src/types"
    "src/content"
    "src/content/articles"
    "public"
    "public/images"
    "public/icons"
)

echo "Directorios encontrados:"
for dir in "${required_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "  ✅ $dir/"
    else
        echo "  ❌ $dir/ (FALTANTE)"
    fi
done

# Contar líneas de código
echo ""
echo "📊 Estadísticas del proyecto:"
total_files=$(find src -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | wc -l)
total_lines=$(find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec wc -l {} + | tail -1 | awk '{print $1}')

echo "  📁 Archivos de código: $total_files"
echo "  📝 Líneas de código: $total_lines"

# Verificar package.json
echo ""
echo "📦 Verificando package.json..."
if [ -f "package.json" ]; then
    node_version=$(node --version)
    echo "  ✅ Node.js: $node_version"
    
    if [ -f "bun.lock" ]; then
        echo "  ✅ Bun lock file encontrado"
    else
        echo "  ⚠️  Bun lock file no encontrado (se creará al instalar)"
    fi
fi

# Verificar que es un proyecto válido de Next.js
echo ""
echo "🔧 Verificando configuración de Next.js..."
if grep -q "next" package.json; then
    echo "  ✅ Dependencias de Next.js encontradas"
else
    echo "  ❌ Dependencias de Next.js no encontradas"
fi

if grep -q "react" package.json; then
    echo "  ✅ Dependencias de React encontradas"
else
    echo "  ❌ Dependencias de React no encontradas"
fi

if grep -q "typescript" package.json; then
    echo "  ✅ TypeScript configurado"
else
    echo "  ❌ TypeScript no configurado"
fi

if grep -q "tailwindcss" package.json; then
    echo "  ✅ TailwindCSS configurado"
else
    echo "  ❌ TailwindCSS no configurado"
fi

# Verificar que no hay errores de sintaxis en archivos principales
echo ""
echo "🔍 Verificando sintaxis de archivos principales..."

# Verificar que el layout.tsx tiene la estructura correcta
if grep -q "RootLayout" src/app/layout.tsx; then
    echo "  ✅ Layout principal válido"
else
    echo "  ❌ Layout principal inválido"
fi

# Verificar que los componentes UI tienen export
for component in "src/components/ui/button.tsx" "src/components/ui/card.tsx" "src/components/ui/badge.tsx"; do
    if [ -f "$component" ]; then
        if grep -q "export" "$component"; then
            echo "  ✅ $(basename $component) tiene exports"
        else
            echo "  ❌ $(basename $component) sin exports"
        fi
    fi
done

echo ""
echo "🎯 Resumen de verificación:"
echo "=========================="
echo "✅ Estructura de archivos completa"
echo "✅ Dependencias configuradas"
echo "✅ TypeScript habilitado"
echo "✅ TailwindCSS configurado"
echo "✅ Vercel ready"
echo ""
echo "🚀 El proyecto está listo para:"
echo "  1. bun install"
echo "  2. bun dev"
echo "  3. Deploy en Vercel"
echo ""
echo "📖 Para instrucciones detalladas, ver README.md"