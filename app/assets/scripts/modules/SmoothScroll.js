import smoothScroll from 'smoothscroll'

class SmoothScroll {
    constructor(data) {
        this.data = data
        this.smoothScrolling()
    }

    smoothScrolling() {
        // console.log(this.data)
        this.data.forEach(link => {
            link.element.addEventListener('click', (e) => {
                e.preventDefault()
                smoothScroll(link.target, link.duration)
            })
        })
    }
}

export { SmoothScroll as default }