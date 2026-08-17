/* ==========================================
   JOSÉ ALBERTO PORTFOLIO
   MAIN JAVASCRIPT
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    init
);


/* ==========================================
   INITIALIZE WEBSITE
========================================== */

function init() {

    /* ======================================
       GLOBAL COMPONENTS
    ====================================== */

    initNavbar();

    initSmoothScroll();

    initAnimations();

    initCounters();


    /* ======================================
       PROJECTS
    ====================================== */

    const projectsContainer =
        document.getElementById(
            "projects-container"
        );


    if (projectsContainer) {

        const isProjectsPage =
            window.location.pathname
                .includes("projects.html");


        if (isProjectsPage) {

            renderProjects();

        } else {

            renderProjects(3);

        }

    }


    /* ======================================
       LABS
    ====================================== */

    const labsContainer =
        document.getElementById(
            "labs-container"
        );


    if (labsContainer) {

        const isLabsPage =
            window.location.pathname
                .includes("labs.html");


        if (isLabsPage) {

            renderLabs();

        } else {

            renderLabs(3);

        }

    }


    /* ======================================
       PROJECT DETAILS
    ====================================== */

    const projectDetails =
        document.getElementById(
            "project-details"
        );


    if (projectDetails) {

        renderProjectDetails();

    }


    /* ======================================
       LAB DETAILS
    ====================================== */

    const labDetails =
        document.getElementById(
            "lab-details"
        );


    if (labDetails) {

        renderLabDetails();

    }
   /* ======================================
   DOCUMENTATION
====================================== */

const documentationContainer =
    document.getElementById(
        "documentation-container"
    );


if (documentationContainer) {

    renderDocumentation();

}


/* ======================================
   FEATURED DOCUMENTATION
====================================== */

const documentationPreviewContainer =
    document.getElementById(
        "documentation-preview-container"
    );


if (documentationPreviewContainer) {

    renderDocumentation(
        3,
        "documentation-preview-container"
    );

}
}