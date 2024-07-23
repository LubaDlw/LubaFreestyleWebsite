const menu = document.querySelector('#mobile-menu')
const mneuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    mneuLinks.classList.toggle('active');
})
