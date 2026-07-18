# 📚 Malla Curricular Interactiva

Malla curricular interactiva para la **Licenciatura en Lengua Castellana** con React y Tailwind CSS.

## ✨ Características

- **Visualización por Semestres**: Organización clara de 10 semestres académicos
- **Sistema de Prerrequisitos**: Las materias se desbloquean automáticamente al completar sus dependencias
- **Interactividad**: Haz clic en una materia para marcarla como aprobada
- **Cambio de Colores Dinámico**:
  - 🌸 **Rosa Coral**: Materias sin desbloquear
  - ✨ **Rosa Coral (Pulsante)**: Materias desbloqueadas
  - 🔴 **Frambuesa**: Materias aprobadas
  - ⚫ **Rosa Palo**: Materias bloqueadas
- **Barra de Progreso**: Visualiza tu avance en la carrera
- **Diseño Responsivo**: Funciona en escritorio, tablet y móvil

## 🎨 Paleta de Colores

| Color | Código HEX | Uso |
|-------|-----------|-----|
| Rosa Nube | #FFF0F5 | Fondo principal |
| Rosa Palo | #F2D1D9 | Tarjetas y secciones |
| Rosa Coral | #F294A5 | Elementos interactivos |
| Frambuesa | #D93664 | Botones y materias aprobadas |
| Cereza Oscuro | #731731 | Títulos y contraste |

## 🚀 Instalación

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio:**
```bash
git clone https://github.com/Fadisito1/Malla-curricular-.git
cd Malla-curricular-
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📦 Dependencias

- **React 18.2.0**: Librería de UI
- **Tailwind CSS 3.3.0**: Framework CSS utility-first
- **React Scripts 5.0.1**: Scripts de build

## 🎮 Cómo Usar

1. **Visualiza la malla**: Todos los semestres se muestran en el grid
2. **Completa materias**: Haz clic en una materia disponible para marcarla como aprobada
3. **Desbloquea dependencias**: Las materias cuyos requisitos están completos se resaltarán
4. **Reinicia**: Usa el botón "Reiniciar Progreso" para empezar de nuevo

## 📊 Estructura de Datos

Cada materia tiene:
- `id`: Código único de la materia
- `name`: Nombre de la materia
- `semester`: Semestre en el que se dicta (1-10)
- `prerequisites`: Array de IDs de materias que deben aprobarse antes

Ejemplo:
```json
{
  "id": "2094101",
  "name": "Práctica Pedagógica I",
  "semester": 1,
  "prerequisites": []
}
```

## 📁 Estructura del Proyecto

```
Malla-curricular-/
├── public/
│   └── index.html                 ← HTML principal
├── src/
│   ├── components/
│   │   ├── CourseCard.jsx         ← Tarjeta de materia
│   │   ├── SemesterColumn.jsx     ← Columna de semestre
│   │   ├── Header.jsx             ← Encabezado con progreso
│   │   ├── Legend.jsx             ← Guía de colores
│   │   └── ResetButton.jsx        ← Botón reiniciar
│   ├── data/
│   │   └── courses.json           ← Datos de materias
│   ├── App.jsx                    ← Componente principal
│   ├── index.js                   ← Punto de entrada
│   └── index.css                  ← Estilos globales
├── package.json                   ← Dependencias
├── tailwind.config.js             ← Configuración Tailwind
├── postcss.config.js              ← Configuración PostCSS
├── .gitignore                     ← Archivos a ignorar
└── README.md                      ← Este archivo
```

## 🔧 Scripts Disponibles

```bash
npm start          # Inicia servidor de desarrollo (localhost:3000)
npm build          # Construye la app para producción
npm test           # Ejecuta los tests
npm eject          # Expone la configuración de webpack
```

## 📱 Responsive Design

- **Mobile**: 1 columna
- **Tablet**: 2 columnas  
- **Desktop**: 3 columnas

## 🎨 Personalización

### Cambiar colores
Edita `src/index.css` y modifica las variables CSS:
```css
:root {
  --rosa-nube: #FFF0F5;
  --rosa-palo: #F2D1D9;
  --rosa-coral: #F294A5;
  --frambuesa: #D93664;
  --cereza-oscuro: #731731;
}
```

### Agregar o modificar materias
Edita `src/data/courses.json` y sigue el formato:
```json
{
  "id": "2094101",
  "name": "Nombre de la Materia",
  "semester": 1,
  "prerequisites": ["2094001"]
}
```

## 🌟 Características Futuras

- [ ] Guardar progreso en LocalStorage
- [ ] Exportar certificado de progreso
- [ ] Modo oscuro/claro
- [ ] Estadísticas detalladas por área
- [ ] Integración con backend para guardar datos de usuario
- [ ] Notificaciones de desbloqueo
- [ ] Historial de cambios

## 🐛 Solución de Problemas

### "npm: command not found"
- Instala Node.js desde https://nodejs.org/

### "Cannot find module"
- Ejecuta `npm install` nuevamente

### Puerto 3000 en uso
- Cambia de puerto: `PORT=3001 npm start`

### Los colores no se ven correctamente
- Limpia la caché: `Ctrl + Shift + R` (o `Cmd + Shift + R` en Mac)

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👤 Autor

Creado por [Fadisito1](https://github.com/Fadisito1)

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💬 Contacto

Si tienes preguntas o sugerencias, abre un issue en el repositorio.

---

**¿Te gusta este proyecto?** ⭐ Dale una estrella en GitHub