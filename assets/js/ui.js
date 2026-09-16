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
/* ==========================================
   DOCUMENTATION CARD
========================================== */

function createDocumentationCard(document) {

    return `

        <article class="project-card">

            ${
                document.image

                    ? `

                        <img
                            src="${document.image}"
                            alt="${document.title}"
                            class="project-image">

                      `

                    : ""

            }

            <span class="project-category">

                ${document.category}

            </span>

            <h3>

                ${document.title}

            </h3>

            <p>

                ${document.description}

            </p>

            <div class="tags">

                <span>

                    ${document.type}

                </span>

                ${document.tags
                    .map(
                        tag => `<span>${tag}</span>`
                    )
                    .join("")}

            </div>

            <div class="project-actions">

                <a
                    href="documentation-detail.html?id=${document.id}"
                    class="btn-secondary">

                    View

                </a>

            </div>

        </article>

    `;

}
/* ==========================================
   ARTICLE CARD
========================================== */

function createArticleCard(article) {

    return `

        <article class="project-card">

            ${
                article.image
                    ? `
                        <img
                            src="${article.image}"
                            alt="${article.title}"
                            class="project-card-image">
                      `
                    : ""
            }


            <div class="project-card-content">


                <span class="project-category">

                    ${article.category || "Article"}

                </span>


                <h3>

                    ${article.title}

                </h3>


                <p>

                    ${article.description}

                </p>


                ${
                    article.tags.length
                        ? `
                            <div class="tags">

                                ${article.tags
                                    .map(
                                        tag =>
                                        `<span>${tag}</span>`
                                    )
                                    .join("")}

                            </div>
                          `
                        : ""
                }


                <div class="project-card-footer">

                    <span class="project-category">

                        ${article.date || ""}

                    </span>


                    <a
                        href="article.html?id=${article.id}"
                        class="btn-secondary">

                        Read Article

                    </a>

                </div>


            </div>

        </article>

    `;

}
 /* ==========================================
    CERTIFICATION CARD
 ========================================== */

 function createCertificationCard(certification) {

     return `

         <article class="project-card">

             ${
                 certification.image
                     ? `
                         <img
                             src="${certification.image}"
                             alt="${certification.title}"
                             class="project-image">
                       `
                     : ""
             }


             <span class="project-category">

                 ${certification.issuer || "Certification"}

             </span>


             <h3>

                 ${certification.title}

             </h3>


             <p>

                 ${certification.description}

             </p>


             ${
                 certification.tags.length
                     ? `
                         <div class="tags">

                             ${certification.tags
                                 .map(
                                     tag =>
                                     `<span>${tag}</span>`
                                 )
                                 .join("")}

                         </div>
                       `
                     : ""
             }


             <div class="project-card-footer">

                 <span class="project-category">

                     ${certification.date || ""}

                 </span>


                 ${
                     certification.credential
                         ? `
                             <a
                                 href="${certification.credential}"
                                 class="btn-secondary"
                                 target="_blank"
                                 rel="noopener noreferrer">

                                 View Credential

                             </a>
                           `
                         : ""
                 }

             </div>


         </article>

     `;

 }