import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class FixedNav {
    constructor() {
        this.navBar = document.querySelector('.nav-bar')
        this.navBarLinks = this.navBar.querySelectorAll('a')
        this.pageSectiongs = document.querySelectorAll('.page-section')
        this.fixedNavBarTrigger = document.querySelector('#about-us')
        this.fixedNav()
    }

    fixedNav() {
        new Waypoint({
            element: this.fixedNavBarTrigger,
            handler: (direction) => {
                if (direction === 'down') {
                    this.navBar.classList.add('nav-bar--fixed')
                } else {
                    this.navBar.classList.remove('nav-bar--fixed')
                }
            }
        })
    }
}

export { FixedNav as default }