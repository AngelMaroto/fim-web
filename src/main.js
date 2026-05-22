import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { observeElements } from './utils/observer.js'
import { initParticles } from './scenes/particles.js'
import { createNav } from './components/nav.js'
import { createHero, animateHero } from './sections/hero.js'
import { createFeatures, animateFeatures } from './sections/features.js'
import { createPipeline, animatePipeline } from './sections/pipeline.js'
import { createStack, animateStack } from './sections/stack.js'
import { createDemo, animateDemo } from './sections/demo.js'
import { createInstall, animateInstall } from './sections/install.js'
import { createFooter } from './sections/footer.js'
import { initScrollTop } from './components/scrollTop.js'
import { initCursor } from './components/cursor.js'

document.querySelector('#app').innerHTML = `
  <canvas id="bg"></canvas>
  ${createNav()}
  <div class="sticky-wrapper">
    ${createHero()}
  </div>
  <main>
    ${createFeatures()}
    ${createPipeline()}
    ${createStack()}
    ${createDemo()}
    ${createInstall()}
  </main>
  ${createFooter()}
`

initParticles()
animateHero()
animateFeatures()
animatePipeline()
animateStack()
animateDemo()
animateInstall()
initScrollTop()
initCursor()
observeElements('.anim-fade-up, .anim-fade-left, .anim-fade-right')