const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop-60,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }


    })
}

window.addEventListener('scroll',scrollActive)