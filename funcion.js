window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('animar')
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1)
    let tamañoDePantalla = window.innerHeight/3.5;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})
ScrollReveal().reveal('.title',{ delay: 200});
ScrollReveal().reveal('.img1',{ delay: 250});
ScrollReveal().reveal('.img2',{ delay: 250});
ScrollReveal().reveal('.img3',{ delay: 250});
ScrollReveal().reveal('.img4',{ delay: 250});
ScrollReveal().reveal('.img5',{ delay: 250});
ScrollReveal().reveal('.img6',{ delay: 250});
ScrollReveal().reveal('.img7',{ delay: 250});
ScrollReveal().reveal('.img8',{ delay: 250});
ScrollReveal().reveal('.img9',{ delay: 250});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});
ScrollReveal().reveal('.',{ delay: 500});