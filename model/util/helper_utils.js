'use strict'

const fs = require("fs");
const path = require("path");

module.exports = {
    sanitize,
    sanitizeRoster,
    sortCaseInsensitive,
    formatLine,
    writeFileSafely
}; 

function sanitize(text, replacement = "_") {
    return text.toLowerCase().replace(/[^a-z0-9-]/gi, replacement);
}

function sanitizeRoster(roster, delimiter = "-") {
    let text = sortCaseInsensitive(roster.map((el) => el.nick)).join(delimiter);
    return sanitize(text);
}

// Helper to ensure parent directory exists and write the file safely
function writeFileSafely(filePath, data) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, data);
}

function sortCaseInsensitive(list) {
    return list.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    });
}


function formatLine(line, newline = false) {
    let output = line + "<br />\n";
    if (newline) output = line + "\n";
    return output;
}