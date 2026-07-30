/* ==========================================
   LAB DETAILS
========================================== */

async function renderLabDetails() {

    const container =
        document.getElementById("lab-details");

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const labId =
        params.get("id");


    if (!labId) {

        container.innerHTML = `

            <p class="error-state">

                Lab not found.

            </p>

        `;

        return;

    }


    try {

        const lab =
            await getLabById(labId);


        if (!lab) {

            container.innerHTML = `

                <p class="error-state">

                    Lab not found.

                </p>

            `;

            return;

        }


        container.innerHTML = `

            <article class="project-details">


                <!-- LAB HEADER -->

                <header class="details-header">

                    <span class="section-tag">

                        ${lab.category}

                    </span>


                    <h1 class="section-title">

                        ${lab.title}

                    </h1>


                    <p class="section-description">

                        ${lab.description}

                    </p>

                </header>


                <!-- LAB IMAGE -->

                ${
                    lab.image

                        ? `

                            <img
                                src="${lab.image}"
                                alt="${lab.title}"
                                class="project-details-image">

                          `

                        : ""

                }


                <!-- LAB CONTENT -->

                <div class="details-content-grid">


                    <!-- LAB INFORMATION -->

                    <section class="details-card">

                        <h2>

                            Lab Information

                        </h2>


                        <p>

                            <strong>

                                Difficulty:

                            </strong>

                            ${lab.difficulty}

                        </p>

                    </section>


                    <!-- TECHNOLOGIES -->

                    ${
                        lab.technologies &&
                        lab.technologies.length > 0

                            ? `

                                <section class="details-card">

                                    <h2>

                                        Technologies

                                    </h2>


                                    <div class="tags">

                                        ${
                                            lab.technologies

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


                    <!-- OVERVIEW -->

                    ${
                        lab.overview

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Overview

                                    </h2>


                                    <p>

                                        ${lab.overview}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- OBJECTIVES -->

                    ${
                        lab.objectives

                            ? `

                                <section class="details-card">

                                    <h2>

                                        Objectives

                                    </h2>


                                    <p>

                                        ${lab.objectives}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- ENVIRONMENT -->

                    ${
                        lab.environment

                            ? `

                                <section class="details-card">

                                    <h2>

                                        Environment

                                    </h2>


                                    <p>

                                        ${lab.environment}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- IMPLEMENTATION -->

                    ${
                        lab.implementation

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Implementation

                                    </h2>


                                    <p>

                                        ${lab.implementation}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- CHALLENGES -->

                    ${
                        lab.challenges

                            ? `

                                <section class="details-card">

                                    <h2>

                                        Challenges

                                    </h2>


                                    <p>

                                        ${lab.challenges}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                    <!-- RESULTS -->

                    ${
                        lab.results

                            ? `

                                <section
                                    class="details-card full-width">

                                    <h2>

                                        Results

                                    </h2>


                                    <p>

                                        ${lab.results}

                                    </p>

                                </section>

                              `

                            : ""

                    }


                </div>


                <!-- LAB ACTIONS -->

                <div class="project-details-actions">


                    ${
                        lab.github

                            ? `

                                <a
                                    href="${lab.github}"
                                    class="btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    View on GitHub

                                </a>

                              `

                            : ""

                    }


                    <a
                        href="labs.html"
                        class="btn-secondary">

                        Back to Labs

                    </a>


                </div>


            </article>

        `;


        document.title =

            `${lab.title} | José Alberto`;

    }


    catch (error) {

        console.error(error);


        container.innerHTML = `

            <p class="error-state">

                Unable to load lab.

            </p>

        `;

    }

}