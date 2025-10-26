# Pruebas Jest con GitHub Actions

Este proyecto demuestra cómo configurar pruebas automatizadas con Jest e integración continua usando GitHub Actions.

## 🚀 Configuración del proyecto

### Prerrequisitos
- Node.js (v18 o superior)
- npm
- Git

### Instalación
```bash
# Clonar el repositorio
git clone <tu-repositorio-url>
cd pruebas-jest

# Instalar dependencias
npm install
```

## 🧪 Ejecutar pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo watch (observando cambios)
npm run test:watch

# Ejecutar pruebas con reporte de cobertura
npm run test:coverage

# Ejecutar pruebas para CI (usado por GitHub Actions)
npm run test:ci
```

## 📁 Estructura del proyecto

```
pruebas-jest/
├── .github/
│   └── workflows/
│       └── test.yml          # Configuración de GitHub Actions
├── suma.js                   # Función a probar
├── suma.test.js             # Pruebas unitarias
├── package.json             # Configuración del proyecto
└── README.md               # Este archivo
```

## 🔄 Integración Continua

El proyecto está configurado con GitHub Actions para ejecutar pruebas automáticamente:

- ✅ Se ejecuta en cada `push` a las ramas `main` o `master`
- ✅ Se ejecuta en cada `pull request`
- ✅ Prueba con Node.js 18.x y 20.x
- ✅ Genera reporte de cobertura

### Estado de las pruebas
[![Ejecutar pruebas Jest](https://github.com/TU-USUARIO/pruebas-jest/actions/workflows/test.yml/badge.svg)](https://github.com/TU-USUARIO/pruebas-jest/actions/workflows/test.yml)

## 📊 Cobertura de código

Los reportes de cobertura se generan automáticamente en la carpeta `coverage/` después de ejecutar:
```bash
npm run test:coverage
```

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commitea tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Agregar más pruebas

Para agregar más funciones y pruebas:

1. Crea una nueva función en un archivo `.js`
2. Crea las pruebas correspondientes en un archivo `.test.js`
3. Las pruebas se ejecutarán automáticamente

Ejemplo:
```javascript
// multiplicacion.js
function multiplicacion(a, b) {
  return a * b;
}
module.exports = multiplicacion;

// multiplicacion.test.js
const multiplicacion = require('./multiplicacion');

test('3 * 4 = 12', () => {
  expect(multiplicacion(3, 4)).toBe(12);
});
```

## 🛠️ Tecnologías utilizadas

- **Jest**: Framework de pruebas para JavaScript
- **GitHub Actions**: Plataforma de CI/CD
- **Node.js**: Entorno de ejecución para JavaScript