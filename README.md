# 🍏 Contador de Calorías

![Versión](https://img.shields.io/badge/versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

Una aplicación web moderna para realizar un seguimiento de tu ingesta y gasto calórico diario, desarrollada con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Registro de Actividades**: Añade actividades de consumo y ejercicio con sus respectivas calorías.
- **Seguimiento en Tiempo Real**: Visualiza tu balance calórico al instante.
- **Interfaz Intuitiva**: Diseño limpio y fácil de usar.
- **Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio.
- **Persistencia de Datos**: Tus registros se guardan localmente en tu navegador.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 con TypeScript
- **Estilización**: Tailwind CSS
- **Gestión de Estado**: React Context API
- **Iconos**: Heroicons
- **Herramientas de Desarrollo**: Vite, ESLint, Prettier

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/contador-calorias.git
   cd contador-calorias
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 🎯 Uso

1. **Añadir Actividad**:
   - Selecciona el tipo de actividad (comida o ejercicio).
   - Ingresa el nombre de la actividad.
   - Especifica las calorías.
   - Haz clic en "Guardar".

2. **Ver Resumen**:
   - Visualiza las calorías consumidas y quemadas.
   - Revisa el balance calórico total.
   - Explora el historial de actividades.

3. **Gestionar Actividades**:
   - Edita o elimina actividades existentes.
   - Filtra actividades por tipo.



## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en [josefrlnc01@gmail.com]

---


import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
