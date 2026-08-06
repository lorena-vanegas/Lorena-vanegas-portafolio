// ==============================
// Scroll suave
// ==============================

const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});




// ==============================
// Navbar al hacer scroll
// ==============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});



// ==============================
// Animaciones al hacer scroll
// ==============================

const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elementos.forEach(elemento => {

    observer.observe(elemento);

});


// ==============================
// Botón volver arriba
// ==============================

const btnTop = document.querySelector("#btnTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTop.classList.add("show");

    }else{

        btnTop.classList.remove("show");

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ========================================== MENU HAMBURGUESA ====================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.onclick = function () {

        navLinks.classList.toggle("active");

    };

}