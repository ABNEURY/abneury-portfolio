/* ==========================================
   José Alberto Portfolio
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    init();

});


function init() {

    initNavbar();

    initSmoothScroll();

    initAnimations();

    initCounters();


    /* ==========================================
       PROJECTS
    ========================================== */

    const projectsContainer =
        document.getElementById("projects-container");

    if (projectsContainer) {

        const isProjectsPage =
            document.title.includes("Projects");

        renderProjects(
            isProjectsPage
                ? null
                : 3
        );

    }


    /* ==========================================
       LABS
    ========================================== */

    const labsContainer =
        document.getElementById("labs-container");

    if (labsContainer) {

        const isLabsPage =
            document.title.includes("Labs");

        renderLabs(
            isLabsPage
                ? null
                : 3
        );

    }

}