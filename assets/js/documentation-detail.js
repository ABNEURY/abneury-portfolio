/* ==========================================
   DOCUMENTATION DETAILS
========================================== */

async function renderDocumentationDetails() {

    const container =
        document.getElementById(
            "documentation-details"
        );

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const documentationId =
        params.get("id");


    if (!documentationId) {

        container.innerHTML = `

            <p class="error-state">

                Documentation not found.

            </p>

        `;

        return;

    }


    try {

        const document =
            await getDocumentationById(
                String(documentationId)
            );


        if (!document) {

            container.innerHTML = `

                <p class="error-state">

                    Documentation not found.

                </p>

            `;

            return;

        }


        const tags =
            document.tags
                ? document.tags
                    .split("|")
                    .map(
                        tag => tag.trim()
                    )
                    .filter(Boolean)
                : [];


        const image =
            document.image
                ? `assets/images/documentation/${document.image}`
                : "";


        container.innerHTML = `

            <article class="project-details">


                <span class="section-tag">

                    ${document.category || "Documentation"}

                </span>


                <h1 class="section-title">

                    ${document.title}

                </h1>


                ${
                    image
                        ? `

                            <img
                                src="${image}"
                                alt="${document.title}"
                                class="project-details-image">

                          `
                        : ""
                }


                <p class="section-description">

                    ${document.description || ""}

                </p>


                ${
                    document.type
                        ? `

                            <div class="tags">

                                <span>
                                    ${document.type}
                                </span>

                            </div>

                          `
                        : ""
                }


                ${
                    tags.length
                        ? `

                            <div class="tags">

                                ${tags
                                    .map(
                                        tag =>
                                        `<span>${tag}</span>`
                                    )
                                    .join("")}

                            </div>

                          `
                        : ""
                }


                <div class="documentation-content">

                    ${document.content || ""}

                </div>


                <div class="project-actions">

                    <a
                        href="documentation.html"
                        class="btn-secondary">

                        Back to Documentation

                    </a>

                </div>


            </article>

        `;


        document.title =
            `${document.title} | José Alberto`;

    }


    catch (error) {

        console.error(
            "Documentation details error:",
            error
        );


        container.innerHTML = `

            <p class="error-state">

                Unable to load documentation.

            </p>

        `;

    }

}