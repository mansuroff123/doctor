// active class logic for navbar
document.addEventListener("DOMContentLoaded", function() {
    const navlinks = document.querySelectorAll(".nav-link")

    navlinks.forEach(link => {
        link.addEventListener("click", function() {
            navlinks.forEach(l => l.classList.remove('active'))

            this.classList.add('active')
        })
    })
})
// navbar shadow animation
const navbar = document.querySelector('.navbar')

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow')
    } else {
        navbar.classList.remove('shadow')
    }
})