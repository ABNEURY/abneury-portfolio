/* ==========================================
   GOOGLE SHEETS API
========================================== */

/* ==========================================
   GOOGLE SHEETS CONFIG
========================================== */

const SHEET_BASE_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3e0XtoQTuh5IfKTDnjf8aVOXFLiFfcsWkvsNDmcZ47WlPSshi0eW3eyKdgACR-S5UlX4vKT_oF5w8";

const SHEET_IDS = {
    projects: "0",
    labs: "281574715",
    documentation: "615331787",
    articles: "1162926040",
    certifications: ""
};

/* ==========================================
   FETCH CSV
========================================== */

async function fetchCSV(sheetId) {

    try {

        const response = await fetch(
            `${SHEET_BASE_URL}/pub?gid=${sheetId}&single=true&output=csv`
        );

        if (!response.ok) {
            throw new Error(`Unable to load Google Sheet (${sheetId})`);
        }

        return await response.text();

    } catch (error) {

        console.error(error);

        return "";

    }

}

/* ==========================================
   CSV PARSER
========================================== */

/* ==========================================
   CSV PARSER
========================================== */

function parseCSV(csv) {

    if (!csv || !csv.trim()) {
        return [];
    }

    const rows = [];
    let row = [];
    let value = "";
    let insideQuotes = false;

    for (let i = 0; i < csv.length; i++) {

        const char = csv[i];
        const nextChar = csv[i + 1];

        /* ======================================
           QUOTED FIELD
        ====================================== */

        if (char === '"') {

            if (insideQuotes && nextChar === '"') {

                value += '"';

                i++;

            } else {

                insideQuotes = !insideQuotes;

            }

        }

        /* ======================================
           COLUMN SEPARATOR
        ====================================== */

        else if (char === "," && !insideQuotes) {

            row.push(value.trim());

            value = "";

        }

        /* ======================================
           ROW SEPARATOR
        ====================================== */

        else if (
            (char === "\n" || char === "\r") &&
            !insideQuotes
        ) {

            if (char === "\r" && nextChar === "\n") {
                i++;
            }

            row.push(value.trim());

            if (row.some(cell => cell !== "")) {
                rows.push(row);
            }

            row = [];
            value = "";

        }

        /* ======================================
           NORMAL CHARACTER
        ====================================== */

        else {

            value += char;

        }

    }

    /* ==========================================
       LAST VALUE / ROW
    ========================================== */

    if (value !== "" || row.length > 0) {

        row.push(value.trim());

        if (row.some(cell => cell !== "")) {
            rows.push(row);
        }

    }

    if (rows.length === 0) {
        return [];
    }

    const headers = rows.shift().map(header => header.trim());

    return rows.map(values => {

        const object = {};

        headers.forEach((header, index) => {

            object[header] = values[index] || "";

        });

        return object;

    });

}

/* ==========================================
   GENERIC SHEET LOADER
========================================== */

async function getSheet(sheetId) {

    const csv = await fetchCSV(sheetId);

    return parseCSV(csv);

}

/* ==========================================
   PROJECTS
========================================== */

async function getProjects(){

    const csv =
        await fetchCSV(SHEET_IDS.projects);

    const projects =
        parseCSV(csv);

    return projects.map(normalizeProject);

}

/* ==========================================
   GET LABS
========================================== */

async function getLabs() {

    const labs =
        await getSheet(
            SHEET_IDS.labs
        );

    return labs.map(normalizeLab);

}

/* ==========================================
   DOCUMENTATION
========================================== */

async function getDocumentation() {

    return await getSheet(SHEET_IDS.documentation);

}

/* ==========================================
   ARTICLES
========================================== */

async function getArticles() {

    return await getSheet(SHEET_IDS.articles);

}

/* ==========================================
   CERTIFICATIONS
========================================== */

async function getCertifications() {

    return await getSheet(SHEET_IDS.certifications);

}
/* ==========================================
   GET PROJECT BY ID
========================================== */

async function getProjectById(id) {

    const projects = await getProjects();

    return projects.find(

        project => project.id === String(id)

    );

}
/* ==========================================
   NORMALIZE PROJECT
========================================== */

function normalizeProject(project) {

    return {

        ...project,

        image: project.image
            ? `assets/images/projects/${project.image}`
            : "",

        featured:
            project.featured === "TRUE",

        tags:
            project.tags
                ? project.tags.split("|")
                : []

    };

}
/* ==========================================
   NORMALIZE LAB
========================================== */

function normalizeLab(lab) {

    return {

        ...lab,

        image: lab.image
            ? `assets/images/labs/${lab.image}`
            : "",

        featured:
            lab.featured === "TRUE",

        technologies:
            lab.technologies
                ? lab.technologies.split("|")
                : []

    };

}
/* ==========================================
   GET LAB BY ID
========================================== */

async function getLabById(id) {

    const labs =
        await getLabs();

    return labs.find(

        lab =>
            lab.id === String(id)

    );

}
/* ==========================================
   DOCUMENTATION
========================================== */

async function getDocumentation() {

    return await getSheet(
        SHEET_IDS.documentation
    );

}
async function getDocumentationById(id) {

    const documentation =
        await getDocumentation();

    return documentation.find(

        document =>

            document.id === id

    );

}