export function initScrollTop() {
    const btn = document.createElement('button')
    btn.className = 'scroll-top'
    btn.innerHTML = '↑'
    btn.setAttribute('aria-label', 'Volver arriba')
    document.body.appendChild(btn)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            btn.classList.add('visible')
        } else {
            btn.classList.remove('visible')
        }
    })

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}