#!/bin/bash

# Ethical Hacking Blog v2.0 - Setup Script
# Modern Next.js 15 + TypeScript + TailwindCSS + Bun

set -e

echo "🚀 Configurando Ethical Hacking Blog v2.0"
echo "=========================================="

# Verificar si Bun está instalado
if ! command -v bun &> /dev/null; then
    echo "❌ Bun no está instalado. Instalando Bun..."
    curl -fsSL https://bun.sh/install | bash
    
    # Agregar Bun al PATH
    export BUN_INSTALL="$HOME/.bun"
    export PATH="$BUN_INSTALL/bin:$PATH"
    echo "✅ Bun instalado y configurado"
else
    echo "✅ Bun ya está instalado: $(bun --version)"
fi

# Navegar al directorio del proyecto
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Instala Node.js 18+ primero."
    exit 1
fi

echo "✅ Node.js: $(node --version)"

# Instalar dependencias
echo "📦 Instalando dependencias con Bun..."
bun install

# Verificar TypeScript
echo "🔍 Verificando tipos TypeScript..."
bun run type-check

# Ejecutar linting
echo "🧹 Ejecutando ESLint..."
bun run lint

# Build de prueba
echo "🏗️ Ejecutando build de prueba..."
bun run build

echo ""
echo "🎉 ¡Configuración completada!"
echo "=========================="
echo ""
echo "Para empezar el servidor de desarrollo:"
echo "  bun dev"
echo ""
echo "Para hacer build de producción:"
echo "  bun build"
echo ""
echo "Para iniciar en producción:"
echo "  bun start"
echo ""
echo "🌐 Tu aplicación estará disponible en:"
echo "  http://localhost:3000"
echo ""
echo "📖 Para más información, revisa el README.md"
echo ""
echo "🚀 ¡Listo para el desarrollo!"