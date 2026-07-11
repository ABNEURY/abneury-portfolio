/* ==========================================
   COUNTERS
========================================== */

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

}

function animateCounter(counter) {

    const target = parseInt(counter.dataset.target);
    const duration = 1500;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {

        start += increment;

        if (start >= target) {

            counter.textContent = target;

            clearInterval(timer);

        } else {

            counter.textContent = Math.floor(start);

        }

    }, 16);

}