/* ==========================================
   PROJECTS
========================================== */

async function renderProjects(limit = null) {

    const container = document.getElementById("projects-container");

    if (!container) return;

    container.innerHTML = `
        <div class="project-skeleton"></div>
        <div class="project-skeleton"></div>
        <div class="project-skeleton"></div>
    `;

    try {

        let projects = await getProjects();

        projects = projects.map(project => ({

            ...project,

            image: `assets/images/projects/${project.image}`,

            featured: project.featured === "TRUE",

            tags: project.tags
                ? project.tags.split("|")
                : []

        }));

        if (limit) {

            projects = projects.slice(0, limit);

        }

        container.innerHTML = "";

        if (projects.length === 0) {

            container.innerHTML = `
                <p class="empty-state">
                    No projects found.
                </p>
            `;

            return;

        }

        projects.forEach(project => {

            container.innerHTML += createProjectCard(project);

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