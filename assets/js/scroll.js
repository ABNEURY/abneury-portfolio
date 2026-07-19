/* ==========================================
   SCROLL
========================================== */

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initSmoothScroll(){

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const url = new URL(this.href);

            // Só faz scroll suave se estivermos na mesma página
            if(url.pathname === window.location.pathname){

                const target = document.querySelector(url.hash);

                if(target){

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }

        });

    });

    initBackToTop();

}

/* ==========================================
   BACK TO TOP
========================================== */

function initBackToTop(){

    const button=document.getElementById("backToTop");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}