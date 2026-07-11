/* ==========================================
   NAVBAR
========================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");

    // Navbar muda de aparência ao fazer scroll
    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    // Link ativo conforme a secção
    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

}