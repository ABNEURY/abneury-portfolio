/* ==========================================
   PROJECTS
========================================== */

async function renderProjects(limit = null) {

    const container =
        document.getElementById("projects-container");

    if (!container) return;


    container.innerHTML = "";


    try {

        let projects =
            await getProjects();


        if (limit) {
            projects = projects
                .filter(
                    project => project.featured
                )
                .slice(0, limit);

        }


        projects.forEach(project => {

            container.innerHTML +=
                createProjectCard(project);

        });

    }

    catch (error) {

        console.error(error);

        container.innerHTML = `

            <p class="error-state">

                Unable to load projects.

            </p>

        `;

    }

}