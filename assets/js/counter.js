/* ==========================================
   COUNTERS
========================================== */

async function initCounters() {

    const counters =
        document.querySelectorAll(".counter");

    if (counters.length === 0) {
        return;
    }


    try {

        /* ======================================
           LOAD DATA FROM GOOGLE SHEETS
        ====================================== */

        const [
            projects,
            labs,
            documentation,
            certifications
        ] = await Promise.all([

            getProjects(),

            getLabs(),

            getDocumentation(),

            getCertifications()

        ]);


        /* ======================================
           COUNTER VALUES
        ====================================== */

        const counts = {

            projects:
                projects?.length || 0,

            labs:
                labs?.length || 0,

            documentation:
                documentation?.length || 0,

            certifications:
                certifications?.length || 0

        };


        /* ======================================
           SET TARGETS
        ====================================== */

        counters.forEach(counter => {

            const type =
                counter.dataset.counter;

            const target =
                counts[type] ?? 0;

            counter.dataset.target =
                target;

        });


        /* ======================================
           ANIMATION
        ====================================== */

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            animateCounter(
                                entry.target
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );


        counters.forEach(counter => {

            observer.observe(counter);

        });


    } catch (error) {

        console.error(
            "Error loading counter data:",
            error
        );

    }

}


/* ==========================================
   ANIMATE COUNTER
========================================== */

function animateCounter(counter) {

    const target =
        parseInt(
            counter.dataset.target,
            10
        ) || 0;

    const duration = 1500;

    let start = 0;

    const increment =
        target / (duration / 16);


    const timer =
        setInterval(() => {

            start += increment;


            if (start >= target) {

                counter.textContent =
                    target;

                clearInterval(timer);

            } else {

                counter.textContent =
                    Math.floor(start);

            }

        }, 16);

}