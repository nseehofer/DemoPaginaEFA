// NODOS A UTILIZAR
const nodoNav = document.querySelector('.nav-js');
const nodoContenedorBarras = document.querySelector('.contenedor-barras-js');
const nodeListBarras = document.querySelectorAll('.barra-js');
const nodeListPalabrasMenu = document.querySelectorAll('.palabra-menu-js');
let navAlExtremoIzquierdoInferior = false;

nodoNav.addEventListener('mouseover', (e) => {

    if (!navAlExtremoIzquierdoInferior) {
        nodoNav.classList.add('nav-extendido');
        nodoContenedorBarras.classList.add('ocultar');
        nodoContenedorBarras.classList.add('contenedor-palabras');
        const nodeListBarras = document.querySelectorAll('.barra-js');
        nodeListBarras.forEach(barra => {
            barra.classList.add('ocultar');

        });


        for (let index = 0; index < nodeListPalabrasMenu.length; index++) {
            if (index === 0) {
                nodeListPalabrasMenu[0].textContent = 'PROPOSITO';
            } else if (index === 1) {
                nodeListPalabrasMenu[1].textContent = 'INSTALACIONES';
            } else {
                nodeListPalabrasMenu[2].textContent = 'PROFESORA';
            }

        }
    }

});

nodoNav.addEventListener('mouseout', (e) => {
    nodoNav.classList.remove('nav-extendido');
    nodoContenedorBarras.classList.remove('ocultar');
    nodoContenedorBarras.classList.remove('contenedor-palabras');

    const nodeListBarras = document.querySelectorAll('.barra-js');
    nodeListBarras.forEach(barra => {
        barra.classList.remove('ocultar');
    });

    nodeListPalabrasMenu.forEach(palabra => {
        palabra.textContent = '';
    });
});

const nodeListLetrasPalabraCarrousel = document.querySelectorAll('.letra-carrousel-alfabetico-js');
const palabrasCarrousel = ["FUERZA", "TECNICA", "DISCIPLINA"];

window.onload = function () {
    let indiceBis = 0;
    function actualizarCarrousel() {
        eliminarLetras(nodeListLetrasPalabraCarrousel)
        if (indiceBis === 0) {
            removerClases(nodeListLetrasPalabraCarrousel);

            for (let indiceFuerza = 0; indiceFuerza < palabrasCarrousel[indiceBis].length; indiceFuerza++) {
                efectoOla(indiceFuerza, indiceBis);
            }

        } else if (indiceBis === 1) {
            removerClases(nodeListLetrasPalabraCarrousel);


            for (let indiceTecnica = 0; indiceTecnica < palabrasCarrousel[indiceBis].length; indiceTecnica++) {
                efectoOla(indiceTecnica, indiceBis);
            }


        } else if (indiceBis === 2) {
            removerClases(nodeListLetrasPalabraCarrousel);

            for (let indiceDisciplina = 0; indiceDisciplina < palabrasCarrousel[indiceBis].length; indiceDisciplina++) {

                let tiempoDisciplina = 1400;
                efectoOlaDisciplina(indiceDisciplina, indiceBis, tiempoDisciplina);
            }


        }

        indiceBis = (indiceBis + 1) % palabrasCarrousel.length;
        setTimeout(actualizarCarrousel, 3300);
    }

    actualizarCarrousel();
}

function efectoOlaDisciplina(indiceFuerza, indiceBis, tiempoDisciplina) {
    nodeListLetrasPalabraCarrousel[indiceFuerza].textContent = palabrasCarrousel[indiceBis][indiceFuerza];
    nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('letra');

    setTimeout(() => {
        nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('efectoOlaInversa');

        setTimeout(() => {
            setTimeout(() => {
                nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('efectoOla');

            }, 100);
            nodeListLetrasPalabraCarrousel[indiceFuerza].classList.remove('letra');
            nodeListLetrasPalabraCarrousel[indiceFuerza].classList.remove('efectoOlaInversa');
        }, tiempoDisciplina);

    }, 100);

    nodeListLetrasPalabraCarrousel[indiceFuerza].style.animationDelay = `${(indiceFuerza + 1) * 0.1}s`;
}


function efectoOla(indiceFuerza, indiceBis) {
    nodeListLetrasPalabraCarrousel[indiceFuerza].textContent = palabrasCarrousel[indiceBis][indiceFuerza];
    nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('letra');

    setTimeout(() => {
        nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('efectoOlaInversa');

        setTimeout(() => {
            setTimeout(() => {
                nodeListLetrasPalabraCarrousel[indiceFuerza].classList.add('efectoOla');

            }, 100);
            nodeListLetrasPalabraCarrousel[indiceFuerza].classList.remove('letra');
            nodeListLetrasPalabraCarrousel[indiceFuerza].classList.remove('efectoOlaInversa');
        }, 1100);

    }, 100);

    nodeListLetrasPalabraCarrousel[indiceFuerza].style.animationDelay = `${(indiceFuerza + 1) * 0.1}s`;
}

function eliminarLetras(nodeListLetrasPalabraCarrousel) {
    nodeListLetrasPalabraCarrousel.forEach(letra => {
        letra.textContent = '';
    });
}

function removerClases(nodeListLetrasPalabraCarrousel) {
    nodeListLetrasPalabraCarrousel.forEach(letra => {
        letra.classList.remove('efectoOlaInversa', 'efectoOla');
    });
}

// ANIMACION SCROLL 

const nodoImagen = document.querySelector('.imagen-hero-js');
const nodoImagenLogoMenu = document.querySelector('.img-menu-hamburgesa-js');

let ultimoScrolArriba = 0;

window.addEventListener('wheel', e => {
    let scrollActual = window.pageYOffset || document.documentElement.scrollTop;
    let imagenHeroRect = nodoImagen.getBoundingClientRect();
    let imagenEnVista = imagenHeroRect.top < window.innerHeight && imagenHeroRect.bottom >= 0;

    if (imagenEnVista) {
        if (e.deltaY > 0) {
            setTimeout(() => {
                nodoImagen.classList.add('efectoScrolZoomInverso');
            }, 10);
            nodoImagen.classList.remove('efectoScrolZoom');
        } else {
            setTimeout(() => {
                nodoImagen.classList.add('efectoScrolZoom');

            }, 10);
            nodoImagen.classList.remove('efectoScrolZoomInverso');
        }
    }
    ultimoScrolArriba = scrollActual;
});

// NAV AL COSTADO

window.addEventListener('scroll', () => {
    const rect = nodoImagenHero.getBoundingClientRect();


    if (rect.bottom <= 0) {
        setTimeout(() => {
            nodoImagenLogoMenu.classList.add('ocultar');
            nodoNav.classList.add('menu-hamburguesa-reducido-al-costado');
            navAlExtremoIzquierdoInferior = true;
        }, 200);
        console.log('El usuario ya dejó de ver la imagen hero.' + navAlExtremoIzquierdoInferior);

    } else {
        setTimeout(() => {
            nodoImagenLogoMenu.classList.remove('ocultar');
            nodoNav.classList.remove('menu-hamburguesa-reducido-al-costado');
            navAlExtremoIzquierdoInferior = false;
        }, 200);
        console.log('La imagen hero todavía es visible en el viewport.' + navAlExtremoIzquierdoInferior);
    }
});



// DESAPARECER Y APARECER BACKGROUND ESTATICO 

const nodoImagenHero = document.querySelector('.figure-js');
const nodoBackground = document.querySelector('.background-estatico-js');
const nodosPalabrasBackground = document.querySelectorAll('.palabras-background-section');

window.addEventListener('scroll', function () {
    let imagenHero = nodoImagenHero.getBoundingClientRect();

    if (imagenHero.bottom > window.innerHeight / 2 && imagenHero.top < window.innerHeight / 2) {
        nodoBackground.classList.add('ocultar-fluido');
        nodosPalabrasBackground.forEach(palabras => {
            palabras.classList.remove('efectoPlabrasBackground');
        });
    } else {
        setTimeout(() => {
            nodoBackground.classList.remove('ocultar-fluido');

        }, 100);

        nodosPalabrasBackground.forEach(palabras => {
            palabras.classList.add('efectoPlabrasBackground');
        });
    }
});

// CORTINA PARA IMAGENES 
const nodoImagenUno = document.querySelector('.imagen-proposito-uno-js');


const observadorImagenUno = new IntersectionObserver((entries) => {
    let animacionEjecutada = false;
    entries.forEach((entry) => {
        if (entry.isIntersecting && !animacionEjecutada) {
            nodoImagenUno.classList.add('efectoCortinaPalabrasBackground');
            animacionEjecutada = true;
        } else if (!entry.isIntersecting && animacionEjecutada) {
            nodoImagenUno.classList.remove('efectoCortinaPalabrasBackground');
            animacionEjecutada = false;
        }
    });
}, { threshold: 0.1 });

observadorImagenUno.observe(nodoImagenUno);

// IMAGEN DOS

const nodoImagenDos = document.querySelector('.imagen-proposito-dos-js');


const observadorImagenDos = new IntersectionObserver((entries) => {
    let animacionEjecutada = false;
    entries.forEach((entry) => {
        if (entry.isIntersecting && !animacionEjecutada) {
            nodoImagenDos.classList.add('efectoCortinaPalabrasBackground');
            animacionEjecutada = true;
        } else if (!entry.isIntersecting && animacionEjecutada) {
            nodoImagenDos.classList.remove('efectoCortinaPalabrasBackground');
            animacionEjecutada = false;
        }
    });
}, { threshold: 0.1 });

observadorImagenDos.observe(nodoImagenDos);


// IMAGEN TRES

const nodoImagenTres = document.querySelector('.imagen-proposito-tres-js');


const observadorImagenTres = new IntersectionObserver((entries) => {
    let animacionEjecutada = false;
    entries.forEach((entry) => {
        if (entry.isIntersecting && !animacionEjecutada) {
            nodoImagenTres.classList.add('efectoCortinaPalabrasBackground');
            animacionEjecutada = true;
        } else if (!entry.isIntersecting && animacionEjecutada) {
            nodoImagenTres.classList.remove('efectoCortinaPalabrasBackground');
            animacionEjecutada = false;
        }
    });
}, { threshold: 0.1 });

observadorImagenTres.observe(nodoImagenTres);


// APARICION DE LEYENDAS 

const nodeListImagenes = document.querySelectorAll('.figure-contenedor-imagen-proposito-js');
const nodeListTextosImagenes = document.querySelectorAll('.palabras-fuente-secundaria-js');
const arrayNodeListTextosImagenes = Array.from(nodeListTextosImagenes);
let imagenParaAparecer = null;

nodeListImagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', function () {
        if (imagen.classList.contains('figure-contenedor-imagen-proposito-uno-js')) {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-uno'));
            imagenParaAparecer.classList.remove('ocultar-fluido');
            ocultarPlabrasBackground();
        } else if (imagen.classList.contains('figure-contenedor-imagen-proposito-dos-js')) {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-dos'));
            imagenParaAparecer.classList.remove('ocultar-fluido');
            ocultarPlabrasBackground();
        } else {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-tres'));
            imagenParaAparecer.classList.remove('ocultar-fluido');
            ocultarPlabrasBackground();
        }
    });
});

nodeListImagenes.forEach(imagen => {
    imagen.addEventListener('mouseout', function () {
        if (imagen.classList.contains('figure-contenedor-imagen-proposito-uno-js')) {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-uno'));
            imagenParaAparecer.classList.add('ocultar-fluido');
            aparecerPlabrasBackground();

        } else if (imagen.classList.contains('figure-contenedor-imagen-proposito-dos-js')) {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-dos'));
            imagenParaAparecer.classList.add('ocultar-fluido');
            aparecerPlabrasBackground();
        } else {
            imagenParaAparecer = arrayNodeListTextosImagenes.find(imagen => imagen.classList.contains('palabra-tres'));
            imagenParaAparecer.classList.add('ocultar-fluido');
            aparecerPlabrasBackground();
        }
    });
}

);

function ocultarPlabrasBackground() {
    nodosPalabrasBackground.forEach(palabra => {
        palabra.classList.add('ocultar-fluido');
    });
};

function aparecerPlabrasBackground() {
    nodosPalabrasBackground.forEach(palabra => {
        palabra.classList.remove('ocultar-fluido');
    });
};

// SCROLL RELENTIZADO

let scrollSpeed = 0.3;

window.addEventListener('wheel', function (event) {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY * scrollSpeed,
        behavior: 'smooth'
    });
}, { passive: false });


