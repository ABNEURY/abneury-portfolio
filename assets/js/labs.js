/* ==========================================
   LABS
========================================== */

async function renderLabs(limit = null) {

    const container = document.getElementById("labs-container");

    if (!container) return;

    container.innerHTML = `
        <div class="project-skeleton"></div>
        <div class="project-skeleton"></div>
        <div class="project-skeleton"></div>
    `;

    try {

        let labs = await getLabs();

        labs = labs.map(lab => ({

            ...lab,

            image: lab.image
                ? `assets/images/labs/${lab.image}`
                : "",

            featured: lab.featured === "TRUE",

            technologies: lab.technologies
                ? lab.technologies.split("|")
                : []

        }));

        if (limit) {

            labs = labs.slice(0, limit);

        }

        container.innerHTML = "";

        if (labs.length === 0) {

            container.innerHTML = `
                <p class="empty-state">
                    No labs found.
                </p>
            `;

            return;

        }

        labs.forEach(lab => {

            container.innerHTML += createLabCard(lab);

        });

    }

    catch (error) {

        console.error(error);

        container.innerHTML = `
            <p class="error-state">
                Unable to load labs.
            </p>
        `;

    }

}