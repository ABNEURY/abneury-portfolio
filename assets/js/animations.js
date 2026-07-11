/* ==========================================
   ANIMATIONS
========================================== */

function initAnimations(){

    const sections = document.querySelectorAll(".reveal");

    if(sections.length === 0) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        observer.observe(section);

    });

}