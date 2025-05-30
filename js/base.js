// Ham-menu functionality
const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    console.log('click')
    hamMenu.classList.toggle('active')

    offScreenMenu.classList.toggle('active')
})

