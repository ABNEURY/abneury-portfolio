/* ==========================================
   PROJECTS
========================================== */
const projects = [

    {
        title: "Enterprise Active Directory",

        description: "Complete Active Directory deployment with DNS, DHCP and Group Policy.",

        image: "assets/images/projects/ad.png",

        category: "Windows Server",

        github: "#",

        demo: "#",

        featured: true,

        tags: [
            "Windows Server",
            "Active Directory",
            "DNS"
        ]
    },

    {
        title: "Corporate DNS",

        description: "Enterprise DNS implementation with Forward Lookup, Reverse Lookup and Conditional Forwarders.",

        image: "assets/images/projects/dns.png",

        category: "Networking",

        github: "#",

        demo: "#",

        featured: true,

        tags: [
            "DNS",
            "Networking",
            "Windows Server"
        ]
    },

    {
        title: "DHCP Failover",

        description: "High availability DHCP implementation using Failover between two Windows Servers.",

        image: "assets/images/projects/dhcp.png",

        category: "Infrastructure",

        github: "#",

        demo: "#",

        featured: true,

        tags: [
            "DHCP",
            "Infrastructure",
            "Windows Server"
        ]
    }

];
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
                    href="${project.demo}"
                    class="btn-secondary">

                    Details

                </a>

            </div>

        </article>

    `;

}function renderProjects(){

    const container = document.getElementById("projects-container");

    if(!container) return;

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += createProjectCard(project);

    });

}