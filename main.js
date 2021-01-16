const toggleBtn = document.querySelector('.toggle_btn')
const link = document.querySelector('.nav__link')
const menu = document.querySelector('.nav__menu')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
})