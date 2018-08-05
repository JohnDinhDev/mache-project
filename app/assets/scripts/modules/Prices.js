class Prices {
    constructor() {
        this.priceBoxes = document.querySelectorAll('.price-selection')
        this.prices = document.querySelectorAll('.price-selection__price')
        this.changeBackground()
    }

    changeBackground() {
        this.priceBoxes.forEach(priceBox => {
            priceBox.addEventListener('mouseover', () => {
                const activePrice = priceBox.querySelector('.price-selection__price')
                this.prices.forEach(price => {
                    price.classList.remove('price-selection__price--active')
                })
                activePrice.classList.add('price-selection__price--active')
            })
        })
    }
}

export { Prices as default }