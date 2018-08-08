import { tns } from '../../../../node_modules/tiny-slider/src/tiny-slider'

class Slider {
    constructor() {
        this.screenSlider = document.querySelector('.slider--screen')
        this.slider()
    }

    slider() {
        const slider = tns({
            speed: 800,
            nav: false,
            autoplay: true,
        })

        const slider2 = tns({
            container: this.screenSlider,
            speed: 800,
            nav: false,
            autoplay: true,
        })
    }
}

export { Slider as default }