/* ==========================================
   ARTICLES
========================================== */

async function renderArticles(
    limit = null,
    containerId = "articles-container"
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

        let articles =
            await getArticles();


        articles =
            articles.map(article => ({

                ...article,

                image: article.image
                    ? `assets/images/articles/${article.image}`
                    : "",

                featured:
                    String(article.featured)
                        .trim()
                        .toUpperCase() === "TRUE",

                tags:
                    article.tags
                        ? article.tags
                            .split("|")
                            .map(tag => tag.trim())
                            .filter(Boolean)
                        : []

            }));


        /*
        ==========================================
        FEATURED / LIMIT
        ==========================================
        */

        if (limit) {

            articles =
                articles
                    .filter(
                        article => article.featured
                    )
                    .sort(
                        (a, b) =>
                            Number(a.order || 999) -
                            Number(b.order || 999)
                    )
                    .slice(0, limit);

        }


        container.innerHTML = "";


        if (articles.length === 0) {

            container.innerHTML = `

                <p class="empty-state">

                    No articles found.

                </p>

            `;

            return;

        }


        /*
        ==========================================
        RENDER ARTICLES
        ==========================================
        */

        articles.forEach(article => {

            container.innerHTML +=
                createArticleCard(article);

        });

    }


    catch (error) {

        console.error(
            "Articles error:",
            error
        );


        container.innerHTML = `

            <p class="error-state">

                Unable to load articles.

            </p>

        `;

    }

}