let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}