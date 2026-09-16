/* ==========================================
   CERTIFICATIONS
========================================== */


/* ==========================================
   RENDER CERTIFICATIONS
========================================== */

async function renderCertifications() {

    const container =
        document.getElementById(
            "certifications-container"
        );

    if (!container) {
        return;
    }


    try {

        const certifications =
            await getCertifications();


        /* ======================================
           EMPTY STATE
        ====================================== */

        if (
            !certifications ||
            certifications.length === 0
        ) {

            container.innerHTML = `
                <p class="empty-state">
                    Nenhuma certificação disponível no momento.
                </p>
            `;

            return;

        }


        /* ======================================
           NORMALIZE DATA
        ====================================== */

        const normalizedCertifications =
            certifications.map(certification => ({

                ...certification,

                image:
                    certification.image
                        ? `assets/images/certifications/${certification.image}`
                        : "",

                featured:
                    certification.featured === "TRUE",

                tags:
                    certification.tags
                        ? certification.tags.split("|")
                        : []

            }));


        /* ======================================
           ORDER
        ====================================== */

        normalizedCertifications.sort(
            (a, b) =>
                Number(a.order || 999) -
                Number(b.order || 999)
        );


        /* ======================================
           RENDER
        ====================================== */

        container.innerHTML =
            normalizedCertifications
                .map(createCertificationCard)
                .join("");


    } catch (error) {

        console.error(
            "Error loading certifications:",
            error
        );


        container.innerHTML = `
            <p class="empty-state">
                Não foi possível carregar as certificações.
            </p>
        `;

    }

}