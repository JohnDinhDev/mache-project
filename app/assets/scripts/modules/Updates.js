class Updates {
    constructor() {
        this.imgs = document.querySelectorAll('.latest-updates__img')
        this.showMore = document.querySelector('.latest-updates__show-more')
        this.hidden = document.querySelector('.latest-updates__updates--hidden')
        this.hover()
        this.showMoreAction()
    }

    hover() {
        this.imgs.forEach(img => {
            const bar = img.querySelector('.latest-updates__slanted-bar')
            img.addEventListener('mouseover', () => {
                bar.classList.add('latest-updates__slanted-bar--hover')
            })

            img.addEventListener('mouseout', () => {
                bar.classList.remove('latest-updates__slanted-bar--hover')
            })
        })
    }

    showMoreAction() {
        this.showMore.addEventListener('click', (e) => {
            const hiddenHeight = this.hidden.offsetHeight
            e.preventDefault()
            this.hidden.style.opacity = 1
            this.hidden.style.position = 'relative'
            this.hidden.style.left = 0
            this.hidden.style.zIndex = 1
            this.showMore.style.opacity = 0
            this.showMore.style.display = 'none'
            window.scrollBy({
                left: 0,
                top: hiddenHeight,
                behavior: 'smooth'
            })
        })
    }
}


export { Updates as default }