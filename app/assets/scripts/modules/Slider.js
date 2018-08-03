import { tns } from '../../../../node_modules/tiny-slider/src/tiny-slider'

class Slider {
    constructor() {
        this.container = document.querySelector('.slider')
        this.slider()
    }

    slider() {
        const slider = tns({
            speed: 800,
            nav: false
        })
    }
}

export { Slider as default }