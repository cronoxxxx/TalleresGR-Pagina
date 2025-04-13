const scrollUp = () =>{

    const scrollUp = document.getElementById('scroll-up')
    const whatsAppScrollUp = document.getElementById('scrollwhatspp-btn')
    if (this.scrollY>=350){
        scrollUp.classList.add ('show-scroll')
        whatsAppScrollUp.classList.add('show-whatsappbtn')
    } else{
        scrollUp.classList.remove ('show-scroll')
        whatsAppScrollUp.classList.remove('show-whatsappbtn')
    }
   
}

window.addEventListener("scroll",scrollUp)