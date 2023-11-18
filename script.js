const app = (function () {

    const navBar = document.querySelector('.nav__links')
    const toggleButton = document.querySelector('.toggle__menu')

    toggleButton.addEventListener('click', () => {

        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active')
            return
        }

        navBar.classList.add('active')

    })

    const navButtons = document.querySelectorAll('.nav__link-item')

    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            navBar.classList.remove('active')
        })

    })

})()