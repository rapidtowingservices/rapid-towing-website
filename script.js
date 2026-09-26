// =========================================
// MOBILE MENU
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // =========================================
    // SCROLL REVEAL ANIMATION
    // =========================================

    const revealElements = document.querySelectorAll(
        ".service-card, .why-card, .brand-category, .area-card, .work-card, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

    }


    // =========================================
    // HEADER SHADOW ON SCROLL
    // =========================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // =========================================
    // CURRENT YEAR IN FOOTER
    // =========================================

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});