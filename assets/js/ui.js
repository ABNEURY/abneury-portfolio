/* ==========================================
   UI COMPONENTS
========================================== */

/* ==========================================
   PROJECT CARD
========================================== */

function createProjectCard(project){

    return `

        <article class="project-card">

            <img
                src="${project.image}"
                alt="${project.title}"
                class="project-image">

            <span class="project-category">

                ${project.category}

            </span>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="tags">

                ${project.tags
                    .map(tag => `<span>${tag}</span>`)
                    .join("")}

            </div>

            <div class="project-actions">

                <a
                    href="${project.github}"
                    class="btn-primary">

                    GitHub

                </a>

                <a
                    href="project.html?id=${project.id}"
                    class="btn-secondary">

                    Details

                </a>

            </div>

        </article>

    `;

}
/* ==========================================
   LAB CARD
========================================== */

function createLabCard(lab) {

    return `

        <article class="lab-card">

            <span class="project-category">

                ${lab.category}

            </span>

            <h3>${lab.title}</h3>

            <p>${lab.description}</p>

            <div class="tags">

                ${lab.technologies
                    .map(technology => `<span>${technology}</span>`)
                    .join("")}

            </div>

            <div class="lab-footer">

                <span class="project-category">

                    ${lab.difficulty}

                </span>

                <a
                    href="lab.html?id=${lab.id}"
                    class="btn-secondary">

                    Details

                </a>

            </div>

        </article>

    `;

}