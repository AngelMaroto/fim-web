export function observeElements(selector, animClass = 'is-visible') {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animClass)
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.15 })

    elements.forEach(el => observer.observe(el))
}