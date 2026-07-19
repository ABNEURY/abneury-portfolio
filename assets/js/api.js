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
    documentation: "",
    articles: "",
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

async function getProjects() {

    return await getSheet(SHEET_IDS.projects);

}

/* ==========================================
   LABS
========================================== */

async function getLabs() {

    return await getSheet(SHEET_IDS.labs);

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