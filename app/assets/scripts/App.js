import Slider from './modules/Slider'
import Prices from './modules/Prices'
import Updates from './modules/Updates'
import SmoothScroll from './modules/SmoothScroll'
import NavBar from './modules/NavBar'

new Slider()
new Prices()
new Updates()
new NavBar()

const smoothScrollData = [{
        element: document.querySelector('#home-link'),
        target: document.querySelector('#home'),
        duration: 2000
    },
    {
        element: document.querySelector('#about-us-link'),
        target: document.querySelector('#about-us'),
        duration: 2000
    },
    {
        element: document.querySelector('#our-services-link'),
        target: document.querySelector('#our-services'),
        duration: 2000
    },
    {
        element: document.querySelector('#prices-link'),
        target: document.querySelector('#prices'),
        duration: 2000
    },
    {
        element: document.querySelector('#contact-link'),
        target: document.querySelector('#contact'),
        duration: 2000
    },
    {
        element: document.querySelector('.nav-bar__logo'),
        target: document.querySelector('#home'),
        duration: 2000
    },
]

new SmoothScroll(smoothScrollData)