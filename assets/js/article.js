/* ==========================================
   ARTICLE DETAILS
========================================== */

async function renderArticleDetails() {

    const container =
        document.getElementById(
            "article-details"
        );

    if (!container) return;


    const params =
        new URLSearchParams(
            window.location.search
        );


    const articleId =
        params.get("id");


    if (!articleId) {

        container.innerHTML = `

            <p class="error-state">

                Article not found.

            </p>

        `;

        return;

    }


    try {

        const articles =
            await getArticles();


        const article =
            articles.find(
                item =>
                    item.id === String(articleId)
            );


        if (!article) {

            container.innerHTML = `

                <p class="error-state">

                    Article not found.

                </p>

            `;

            return;

        }


        const tags =
            article.tags
                ? article.tags
                    .split("|")
                    .map(
                        tag => tag.trim()
                    )
                    .filter(Boolean)
                : [];


        const image =
            article.image
                ? `assets/images/articles/${article.image}`
                : "";


        container.innerHTML = `

            <article class="article-details">


                <span class="section-tag">

                    ${article.category || "Article"}

                </span>


                <h1 class="section-title">

                    ${article.title}

                </h1>


                <div class="article-meta">

                    <span>

                        ${article.date || ""}

                    </span>

                    <span>

                        ${article.author || ""}

                    </span>

                </div>


                ${
                    image
                        ? `

                            <img
                                src="${image}"
                                alt="${article.title}"
                                class="article-details-image">

                          `
                        : ""
                }


                <p class="section-description">

                    ${article.description}

                </p>


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


                <div class="article-content">

                    ${article.content}

                </div>


                <div class="article-actions">

                    <a
                        href="blog.html"
                        class="btn-secondary">

                        Back to Articles

                    </a>

                </div>


            </article>

        `;


        document.title =
            `${article.title} | José Alberto`;

    }


    catch (error) {

        console.error(
            "Article details error:",
            error
        );


        container.innerHTML = `

            <p class="error-state">

                Unable to load article.

            </p>

        `;

    }

}