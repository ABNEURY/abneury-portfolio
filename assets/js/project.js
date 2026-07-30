/* ==========================================
   PROJECT DETAILS
========================================== */

async function renderProjectDetails() {

    const container =
        document.getElementById("project-details");

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const projectId =
        params.get("id");


    if (!projectId) {

        container.innerHTML = `

            <p class="error-state">

                Project not found.

            </p>

        `;

        return;

    }


    try {

        const project =
            await getProjectById(projectId);


        if (!project) {

            container.innerHTML = `

                <p class="error-state">

                    Project not found.

                </p>

            `;

            return;

        }


        container.innerHTML = `

            <article class="project-details">


                <!-- PROJECT HEADER -->

                <header class="details-header">

                    <span class="section-tag">

                        ${project.category}

                    </span>


                    <h1 class="section-title">

                        ${project.title}

                    </h1>


                    <p class="section-description">

                        ${project.description}

                    </p>

                </header>


                <!-- PROJECT IMAGE -->

                ${
                    project.image

                        ? `

                            <img
                                src="${project.image}"
                                alt="${project.title}"
                                class="project-details-image">

                          `

                        : ""

                }


                <!-- PROJECT CONTENT -->

                <div class="details-content-grid">


                    <!-- OVERVIEW -->

                    ${
                        project.overview

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Overview

                                    </h2>


                                    <p>

                                        ${project.overview}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- OBJECTIVES -->

                    ${
                        project.objectives

                            ? `

                                <section
                                    class="details-card">

                                    <h2>

                                        Objectives

                                    </h2>


                                    <p>

                                        ${project.objectives}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- TECHNOLOGIES -->

                    ${
                        project.technologies &&
                        project.technologies.length > 0

                            ? `

                                <section
                                    class="details-card">

                                    <h2>

                                        Technologies

                                    </h2>


                                    <div class="tags">

                                        ${
                                            project.technologies

                                                .map(

                                                    technology =>

                                                    `<span>
                                                        ${technology}
                                                    </span>`

                                                )

                                                .join("")

                                        }

                                    </div>

                                </section>

                              `

                            : ""

                    }


                    <!-- ARCHITECTURE -->

                    ${
                        project.architecture

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Architecture

                                    </h2>


                                    <p>

                                        ${project.architecture}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- CHALLENGES -->

                    ${
                        project.challenges

                            ? `

                                <section
                                    class="details-card">

                                    <h2>

                                        Challenges

                                    </h2>


                                    <p>

                                        ${project.challenges}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- SOLUTIONS -->

                    ${
                        project.solutions

                            ? `

                                <section
                                    class="details-card">

                                    <h2>

                                        Solutions

                                    </h2>


                                    <p>

                                        ${project.solutions}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- RESULTS -->

                    ${
                        project.results

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Results

                                    </h2>


                                    <p>

                                        ${project.results}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- TOPICS -->

                    ${
                        project.tags &&
                        project.tags.length > 0

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Topics

                                    </h2>


                                    <div class="tags">

                                        ${
                                            project.tags

                                                .map(

                                                    tag =>

                                                    `<span>
                                                        ${tag}
                                                    </span>`

                                                )

                                                .join("")

                                        }

                                    </div>

                                </section>

                              `

                            : ""

                    }


                </div>


                <!-- PROJECT ACTIONS -->

                <div class="project-details-actions">


                    ${
                        project.github

                            ? `

                                <a
                                    href="${project.github}"
                                    class="btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    View on GitHub

                                </a>

                              `

                            : ""

                    }


                    ${
                        project.demo

                            ? `

                                <a
                                    href="${project.demo}"
                                    class="btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    View Demo

                                </a>

                              `

                            : ""

                    }


                    <a
                        href="projects.html"
                        class="btn-secondary">

                        Back to Projects

                    </a>


                </div>


            </article>

        `;


        document.title =

            `${project.title} | José Alberto`;

    }


    catch (error) {

        console.error(error);


        container.innerHTML = `

            <p class="error-state">

                Unable to load project.

            </p>

        `;

    }

}