const sr = ScrollReveal({
    origin : 'top', distance : '60px',duration:2000,delay:300
})

sr.reveal('.inicio__data')
sr.reveal ('.inicio__card',{
    delay:600,distance:'100px',interval:100
})

sr.reveal ('.nosotros__data, .join__image',{
    origin:'right'
})

sr.reveal ('.nosotros__image, .join__data',{
    origin:'left'
})

sr.reveal ('.servicio__card',{
    interval:200
})

sr.reveal('.inicio__data, .contacto__data, .servicio__user, .contacto__text, .footer__content')


