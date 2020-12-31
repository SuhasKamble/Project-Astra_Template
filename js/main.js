window.addEventListener('load',init)

const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const bars = document.querySelector('.fa-bars')


function init() {
    
    burger.addEventListener('click',()=>{
        navLinks.classList.toggle('show')
        bars.classList.toggle('fa-times')
    })
  
}