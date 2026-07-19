/* ==========================================
   PROJECT PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadProject();

});

async function loadProject(){

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    console.log("Project ID:", id);

}