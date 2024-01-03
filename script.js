const scrollers = document.querySelectorAll('.scroller')

const addScrollAnimation = () => {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)

        const list = scroller.querySelector('.list')
        const items = Array.from(list.children)

        items.forEach(item => {
            const duplicated = item.cloneNode(true)
            duplicated.setAttribute('aria-hidden', true)

            list.appendChild(duplicated)
        })
    });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) addScrollAnimation()