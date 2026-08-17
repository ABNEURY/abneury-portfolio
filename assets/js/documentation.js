/* ==========================================
   DOCUMENTATION
========================================== */

async function renderDocumentation(
    limit = null,
    containerId = "documentation-container"
) {

    const container =
        document.getElementById(
            containerId
        );

    if (!container) return;


    container.innerHTML = `

        <div class="project-skeleton"></div>

        <div class="project-skeleton"></div>

        <div class="project-skeleton"></div>

    `;


    try {

        let documentation =
            await getDocumentation();


        documentation =
            documentation.map(item => ({

                ...item,

                image: item.image
                    ? `assets/images/documentation/${item.image}`
                    : "",

                featured:
                    String(item.featured)
                        .trim()
                        .toUpperCase() === "TRUE",

                tags: item.tags
                    ? item.tags
                        .split("|")
                        .map(tag => tag.trim())
                        .filter(Boolean)
                    : []

            }));


        /*
        ==========================================
        FILTER FEATURED
        ==========================================
        */

        if (limit) {

            documentation =
                documentation
                    .filter(
                        item => item.featured
                    )
                    .sort(
                        (a, b) =>
                            Number(a.order || 999) -
                            Number(b.order || 999)
                    )
                    .slice(0, limit);

        }


        /*
        ==========================================
        CLEAR CONTAINER
        ==========================================
        */

        container.innerHTML = "";


        if (documentation.length === 0) {

            container.innerHTML = `

                <p class="empty-state">

                    No documentation found.

                </p>

            `;

            return;

        }


        /*
        ==========================================
        RENDER
        ==========================================
        */

        documentation.forEach(item => {

            container.innerHTML +=
                createDocumentationCard(item);

        });

    }


    catch (error) {

        console.error(
            "Documentation error:",
            error
        );


        container.innerHTML = `

            <p class="error-state">

                Unable to load documentation.

            </p>

        `;

    }

}