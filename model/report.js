"use strict";

const path = require("path");
const parsers = require("./util/parsers");
const summaryFolder = "details";
const { sanitize, sanitizeRoster, writeFileSafely } = require("./util/helper_utils.js");

module.exports = {
    generateOutput: generateOutput,
};

function generateOutput(teams, regions, strDate, format) {
    console.log("1. Starting report generation...");
    let fileDate = strDate.replaceAll("-", "_").trim();
    let year = fileDate.slice(0, 4);
    let dayOfMonth = Number(strDate.slice(-2));

    // Clean format string (e.g., ".html" -> "html")
    let cleanFormat = format.replace('.', '').toLowerCase();

    // Base root directories for the specific date
    const baseLiveDateDir = path.join(__dirname, '..', 'live', year);
    const baseInvitationDateDir = path.join(__dirname, '..', 'invitation', year);

    // Format-specific subdirectories matching your folder layout
    const liveStandingsFolder = path.join(baseLiveDateDir, `${cleanFormat}_standings`);
    const liveSummaryFolder = path.join(baseLiveDateDir, summaryFolder, fileDate, cleanFormat);

    const invitationStandingsFolder = path.join(baseInvitationDateDir, `${cleanFormat}_standings`);
    const invitationSummaryFolder = path.join(baseInvitationDateDir, summaryFolder, fileDate, cleanFormat);

    // 3. Handle main standings files (Live) -> saved to year/format
    writeFileSafely(path.join(liveStandingsFolder, `standings_global_${fileDate}${format}`), displayRankings(teams, [0, 1, 2], strDate, format));
    writeFileSafely(path.join(liveStandingsFolder, `standings_europe_${fileDate}${format}`), displayRankings(teams, [0], strDate, format));
    writeFileSafely(path.join(liveStandingsFolder, `standings_americas_${fileDate}${format}`), displayRankings(teams, [1], strDate, format));
    writeFileSafely(path.join(liveStandingsFolder, `standings_asia_${fileDate}${format}`), displayRankings(teams, [2], strDate, format));

    // 4. Handle main standings files (Invitation - if dayOfMonth < 8) -> saved to year/format
    if (dayOfMonth < 8) {
        writeFileSafely(path.join(invitationStandingsFolder, `standings_global_${fileDate}${format}`), displayRankings(teams, [0, 1, 2], strDate, format));
        writeFileSafely(path.join(invitationStandingsFolder, `standings_europe_${fileDate}${format}`), displayRankings(teams, [0], strDate, format));
        writeFileSafely(path.join(invitationStandingsFolder, `standings_americas_${fileDate}${format}`), displayRankings(teams, [1], strDate, format));
        writeFileSafely(path.join(invitationStandingsFolder, `standings_asia_${fileDate}${format}`), displayRankings(teams, [2], strDate, format));
    }

    // 5. Handle individual team summary files -> saved to details/fileDate/format
    teams.forEach((t) => {
        if (t.globalRank > 0) {
            let paddedRank = t.globalRank.toString().padStart(4, "0");
            let teamFileName = `${paddedRank}--${sanitize(t.name)}--${sanitizeRoster(t.activeRoster)}${format}`;
            let summaryData = displayTeamRankingSummary(t, teams, strDate, format);

            // Write live team summary
            writeFileSafely(path.join(liveSummaryFolder, teamFileName), summaryData);

            // Write invitation team summary (if applicable)
            if (dayOfMonth < 8) {
                writeFileSafely(path.join(invitationSummaryFolder, teamFileName), summaryData);
            }
        }
    });

    console.log("Report generation complete!");
}

/* ==========================================================================
   FORMAT DISPATCHERS & RENDERERS
   ================================================================          */

function displayRankings(teams, regions = [0, 1, 2], strDate, format) {
    switch (format) {
        case ".json":
            return parsers.renderRankingsJSON(teams, regions, strDate);
        case ".html":
            return parsers.renderRankingsHTML(teams, regions, strDate);
        case ".csv":
            return parsers.renderRankingsCSV(teams, regions, strDate);
        case ".txt":
            return parsers.renderRankingsTXT(teams, regions, strDate);
        case ".md":
        default:
            return parsers.renderRankingsMarkdown(teams, regions, strDate, format);
    }
}

function displayTeamRankingSummary(team, teams, strDate, format) {
    switch (format) {
        case ".json":
            return parsers.renderTeamSummaryJSON(team, teams, strDate);
        case ".html":
            return parsers.renderTeamSummaryHTML(team, teams, strDate);
        case ".csv":
            return parsers.renderTeamSummaryCSV(team, teams, strDate);
        case ".txt":
            return parsers.renderTeamSummaryTXT(team, teams, strDate);
        case ".md":
        default:
            return parsers.renderTeamSummaryMarkdown(team, teams, strDate, format);
    }
}
