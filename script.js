window.addEventListener('DOMContentLoaded', function () {
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

    const navlinks = document.querySelectorAll('.nav-link')
    navlinks.forEach(nav => {
        nav.addEventListener('click', function () {
            resetActive()
            nav.classList.add('active')
            const id = nav.getAttribute('id')
            beritaNav(id)
        })
    })

    function beritaNav(type) {
        const fotoEl = document.querySelectorAll('.foto')
        const videoEl = document.querySelectorAll('.video')

        if (type === 'artikel') {
            fotoEl.forEach(foto => foto.classList.add('d-none'))
            videoEl.forEach(video => video.classList.add('d-none'))
        } else if (type === 'foto') {
            fotoEl.forEach(foto => foto.classList.remove('d-none'))
            videoEl.forEach(video => video.classList.add('d-none'))
        } else if (type === 'video') {
            fotoEl.forEach(foto => foto.classList.add('d-none'))
            videoEl.forEach(video => video.classList.remove('d-none'))
        }
    }

    function resetActive() {
        navlinks.forEach(nav => {
            if (nav.classList.contains('active')) nav.classList.remove('active')
        })
    }
})