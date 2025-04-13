

/*NAVBAR*/

const navMenu = document.getElementById('nav__menu'),
navToggle = document.getElementById('nav__toggle'),
navClose = document.getElementById('nav__close'),
navLink = document.querySelectorAll('.nav__link')


function action (){
    if (navToggle){
        navToggle.addEventListener("click",add)
    }

    if (navClose){
        navClose.addEventListener("click",remove)
    }

    navLink.forEach(n=>n.addEventListener("click",linkAction))
    
}

const linkAction = () =>{
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}

const add =() => {
    navMenu.classList.add('show-menu')
}
const remove = () =>{
    navMenu.classList.remove('show-menu')
}






action()


/*HEADER BLUR*/



 



