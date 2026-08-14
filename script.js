//=========================================================
//          KEEP SCROLL POSITION UNDER CONTROL
//=========================================================

if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

}


//=========================================================
//                    HEADER / MENU
//=========================================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".menu-btn i");
const header = document.querySelector(".header");


if (menuBtn && navMenu && icon) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            icon.className = "ri-close-line";

        } else {

            icon.className = "ri-menu-line";

        }

    });

}


//=========================================================
//                    HEADER SCROLL
//=========================================================

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


//=========================================================
//                    DESKTOP NAV LINKS
//=========================================================

const links = document.querySelectorAll(".nav-list a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (icon) {

            icon.className = "ri-menu-line";

        }

    });

});


//=========================================================
//                    MOBILE HELLO BUTTON
//=========================================================

const mobileBtn = document.querySelector(".mobile-btn");

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (icon) {

            icon.className = "ri-menu-line";

        }

    });

}


//=========================================================
//                    PAGE LOAD
//=========================================================

window.addEventListener("load", () => {

    // Always start from Home / Hero after refresh

    window.scrollTo({

        top: 0,

        left: 0,

        behavior: "instant"

    });


    // Loader

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2200);

    }

});


//=========================================================
//                    TESTIMONIALS
//=========================================================

const slides = document.querySelectorAll(".testimonial-slide");

const dots = document.querySelectorAll(".testimonial-pagination span");

const prevBtn = document.querySelector(".testimonial-prev");

const nextBtn = document.querySelector(".testimonial-next");

let currentSlide = 0;


function showSlide(index) {

    if (!slides.length) return;

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    if (dots[index]) {

        dots[index].classList.add("active");

    }

}


//=========================================================
//                    NEXT SLIDE
//=========================================================

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

}


//=========================================================
//                    PREVIOUS SLIDE
//=========================================================

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    });

}


//=========================================================
//                    PAGINATION DOTS
//=========================================================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


//=========================================================
//                    AUTO SLIDE
//=========================================================

if (slides.length > 1) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}


//=========================================================
//                    ACTIVE NAVIGATION
//=========================================================

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-list a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});