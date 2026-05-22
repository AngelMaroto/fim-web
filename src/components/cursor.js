export function initCursor() {
    const cursor = document.createElement('div')
    const cursorDot = document.createElement('div')
    cursor.className = 'cursor-ring'
    cursorDot.className = 'cursor-dot'
    document.body.appendChild(cursor)
    document.body.appendChild(cursorDot)

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX
        mouseY = e.clientY
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    })

    // Ring sigue con inercia
    function animateRing() {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        cursor.style.transform = `translate(${ringX}px, ${ringY}px)`
        requestAnimationFrame(animateRing)
    }
    animateRing()

    // Hover en elementos interactivos
    const interactives = 'a, button, .feat-big-card, .feat-row, .pipe-step, .install-card, .nav-cta'
    document.querySelectorAll(interactives).forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover')
            cursorDot.classList.add('cursor-hover')
        })
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover')
            cursorDot.classList.remove('cursor-hover')
        })
    })

    // Ocultar cursor nativo
    document.body.style.cursor = 'none'
    document.querySelectorAll('a, button').forEach(el => {
        el.style.cursor = 'none'
    })
}