import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="container">
      <h1>⚡ Vite & Vercel</h1>
      <p class="subtitle">Las herramientas que están revolucionando el desarrollo web moderno</p>
    </div>
  </header>

  <div class="container">
    <div class="tabs">
      <button class="tab-button active" data-tab="vite">🚀 Vite</button>
      <button class="tab-button" data-tab="vercel">▲ Vercel</button>
      <button class="tab-button" data-tab="comparison">⚖️ Comparación</button>
      <button class="tab-button" data-tab="integration">🔗 Integración</button>
    </div>

    <!-- Sección Vite -->
    <div class="content-section active" id="vite">
      <div class="logo-container">
        <div class="logo vite-logo">⚡</div>
      </div>
      
      <h2>¿Qué es Vite?</h2>
      <p>Vite (palabra francesa que significa "rápido") es una herramienta de construcción frontend de última generación que ofrece una experiencia de desarrollo extremadamente rápida. Creada por Evan You, el creador de Vue.js, Vite aprovecha los módulos ES nativos del navegador y herramientas compiladas en lenguajes nativos.</p>

      <h3>Características Principales</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h4>Inicio Instantáneo</h4>
          <p>El servidor de desarrollo arranca en milisegundos sin importar el tamaño del proyecto.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔥</div>
          <h4>HMR Ultra Rápido</h4>
          <p>Hot Module Replacement que permanece rápido sin importar el tamaño de la aplicación.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h4>Build Optimizado</h4>
          <p>Utiliza Rollup para builds de producción altamente optimizados.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h4>Configuración Simple</h4>
          <p>Configuración mínima con soporte para TypeScript, JSX, CSS y más fuera de la caja.</p>
        </div>
      </div>

      <h3>¿Por qué usar Vite?</h3>
      <ul>
        <li><strong>Velocidad excepcional:</strong> Desarrollo hasta 10-100x más rápido que webpack tradicional</li>
        <li><strong>Moderno por defecto:</strong> Aprovecha las características modernas de JavaScript</li>
        <li><strong>Framework agnóstico:</strong> Compatible con Vue, React, Svelte, Vanilla JS y más</li>
        <li><strong>Plugin ecosystem:</strong> Sistema de plugins compatible con Rollup</li>
        <li><strong>TypeScript integrado:</strong> Soporte nativo para TypeScript sin configuración</li>
      </ul>

      <a href="https://vitejs.dev" class="cta-button" target="_blank" rel="noopener">Documentación Oficial</a>
      <a href="https://github.com/vitejs/vite" class="cta-button" target="_blank" rel="noopener">Ver en GitHub</a>
    </div>

    <!-- Sección Vercel -->
    <div class="content-section" id="vercel">
      <div class="logo-container">
        <div class="logo vercel-logo">▲</div>
      </div>
      
      <h2>¿Qué es Vercel?</h2>
      <p>Vercel es una plataforma en la nube para sitios estáticos y funciones serverless que se adapta perfectamente al flujo de trabajo de desarrollo frontend. Es la empresa detrás de Next.js y ofrece la mejor experiencia para desplegar aplicaciones web modernas.</p>

      <h3>Características Principales</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h4>Deploy Instantáneo</h4>
          <p>Despliega tu aplicación en segundos con git push.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h4>Edge Network Global</h4>
          <p>CDN global para entregar contenido ultra rápido en todo el mundo.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h4>Preview Deployments</h4>
          <p>Cada commit obtiene su propia URL de preview para testing.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h4>Analytics Integrado</h4>
          <p>Monitoreo de performance y analytics sin configuración adicional.</p>
        </div>
      </div>

      <h3>¿Por qué usar Vercel?</h3>
      <ul>
        <li><strong>Zero Configuration:</strong> Detecta automáticamente tu framework y configura el build</li>
        <li><strong>Integración con Git:</strong> Conecta GitHub, GitLab o Bitbucket para CI/CD automático</li>
        <li><strong>HTTPS automático:</strong> Certificados SSL gratis y renovación automática</li>
        <li><strong>Serverless Functions:</strong> Backend API sin gestionar servidores</li>
        <li><strong>Edge Functions:</strong> Ejecuta código cerca de tus usuarios para mínima latencia</li>
        <li><strong>Domain Management:</strong> Gestión fácil de dominios personalizados</li>
      </ul>

      <a href="https://vercel.com" class="cta-button" target="_blank" rel="noopener">Ir a Vercel</a>
      <a href="https://vercel.com/docs" class="cta-button" target="_blank" rel="noopener">Documentación</a>
    </div>

    <!-- Sección Comparación -->
    <div class="content-section" id="comparison">
      <h2>Vite vs Webpack vs Otros</h2>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Característica</th>
            <th>Vite</th>
            <th>Webpack</th>
            <th>Create React App</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiempo de inicio</td>
            <td>⚡ < 1 segundo</td>
            <td>🐢 10-60 segundos</td>
            <td>🐢 10-30 segundos</td>
          </tr>
          <tr>
            <td>HMR</td>
            <td>⚡ Instantáneo</td>
            <td>🐢 Lento en proyectos grandes</td>
            <td>🐌 Variable</td>
          </tr>
          <tr>
            <td>Configuración</td>
            <td>✅ Mínima</td>
            <td>❌ Compleja</td>
            <td>✅ Zero-config</td>
          </tr>
          <tr>
            <td>Build para producción</td>
            <td>⚡ Rápido (Rollup)</td>
            <td>✅ Muy optimizado</td>
            <td>✅ Optimizado</td>
          </tr>
          <tr>
            <td>Soporte TypeScript</td>
            <td>✅ Nativo</td>
            <td>✅ Requiere configuración</td>
            <td>✅ Incluido</td>
          </tr>
        </tbody>
      </table>

      <h3>¿Cuándo usar Vite?</h3>
      <p>✅ Proyectos nuevos que buscan velocidad de desarrollo<br>
      ✅ Aplicaciones modernas con frameworks como Vue, React, Svelte<br>
      ✅ Equipos que valoran la experiencia de desarrollo<br>
      ✅ Proyectos que necesitan builds rápidos</p>

      <h3>¿Cuándo considerar Webpack?</h3>
      <p>✅ Proyectos legacy existentes<br>
      ✅ Necesitas configuraciones muy específicas y complejas<br>
      ✅ Dependencias que requieren transformaciones especiales</p>
    </div>

    <!-- Sección Integración -->
    <div class="content-section" id="integration">
      <h2>Vite + Vercel: La Combinación Perfecta</h2>
      
      <p>Vite y Vercel funcionan excepcionalmente bien juntos, creando un flujo de trabajo de desarrollo a producción sin fricciones.</p>

      <h3>🎯 Ventajas de la Integración</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h4>Desarrollo Ultra Rápido</h4>
          <p>Vite proporciona HMR instantáneo durante el desarrollo.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h4>Deploy Sin Configuración</h4>
          <p>Vercel detecta automáticamente proyectos Vite y los configura.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌍</div>
          <h4>Distribución Global</h4>
          <p>Tu build optimizado de Vite se distribuye por el CDN de Vercel.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h4>Preview Automático</h4>
          <p>Cada PR obtiene una preview URL con tu build de Vite.</p>
        </div>
      </div>

      <h3>📋 Pasos para Desplegar Vite en Vercel</h3>
      <ol>
        <li><strong>Crea tu proyecto Vite:</strong> <code>npm create vite@latest mi-app</code></li>
        <li><strong>Sube a GitHub:</strong> Inicia un repositorio Git y súbelo a GitHub</li>
        <li><strong>Conecta con Vercel:</strong> Importa el repositorio en vercel.com</li>
        <li><strong>Deploy automático:</strong> Vercel detecta Vite y despliega automáticamente</li>
        <li><strong>¡Listo!</strong> Cada push a main despliega automáticamente</li>
      </ol>

      <h3>💡 Mejores Prácticas</h3>
      <ul>
        <li><strong>Variables de entorno:</strong> Usa <code>VITE_</code> como prefijo para variables públicas</li>
        <li><strong>Optimización de assets:</strong> Vite los optimiza automáticamente durante el build</li>
        <li><strong>Code splitting:</strong> Vite hace code splitting automático por rutas</li>
        <li><strong>Preview deployments:</strong> Prueba cambios antes de mergear a producción</li>
        <li><strong>Analytics:</strong> Activa Vercel Analytics para monitorear performance</li>
      </ul>

      <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 30px; border-radius: 15px; margin: 30px 0;">
        <h3>🎉 Resultado Final</h3>
        <p><strong>Desarrollo:</strong> Experiencia de desarrollo instantánea con Vite<br>
        <strong>Production:</strong> Aplicación optimizada servida globalmente por Vercel<br>
        <strong>Workflow:</strong> CI/CD automático sin configuración<br>
        <strong>Performance:</strong> Tiempos de carga mínimos y máxima velocidad</p>
      </div>

      <a href="https://vercel.com/new" class="cta-button" target="_blank" rel="noopener">Crear Proyecto en Vercel</a>
    </div>
  </div>

  <footer>
    <div class="container">
      <p>💜 Creado con HTML, CSS y JavaScript vanilla</p>
      <p>Vite y Vercel son marcas registradas de sus respectivos propietarios</p>
    </div>
  </footer>
`

// Sistema de tabs
const tabButtons = document.querySelectorAll('.tab-button')
const contentSections = document.querySelectorAll('.content-section')

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab')
    
    // Remover active de todos los botones y secciones
    tabButtons.forEach(btn => btn.classList.remove('active'))
    contentSections.forEach(section => section.classList.remove('active'))
    
    // Agregar active al botón clickeado y su sección correspondiente
    button.classList.add('active')
    document.getElementById(targetTab).classList.add('active')
    
    // Smooth scroll al contenido
    document.getElementById(targetTab).scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    })
  })
})

// Animación de las feature cards
const featureCards = document.querySelectorAll('.feature-card')

featureCards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.05)'
    setTimeout(() => {
      card.style.transform = ''
    }, 300)
  })
})

// Efecto parallax suave en el header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const header = document.querySelector('header')
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`
    header.style.opacity = 1 - (scrolled / 500)
  }
})

// Log de bienvenida en consola
console.log('%c⚡ Vite + ▲ Vercel ', 
  'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;')
console.log('¡Bienvenido a la guía de Vite y Vercel! 🚀')
