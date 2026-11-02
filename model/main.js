const { parseArgs } = require("node:util");
const Ranking = require("./ranking");
const Report = require("./report");
const RegionList = ["Europe", "Americas", "Asia"];
const ALLOWED_EXTENSIONS = [".md", ".json", ".csv", ".txt", ".html"];

function run() {
  // Parse command line flags and positional arguments natively
  const { values, positionals } = parseArgs({
    options: {
      format: { type: "string", short: "f" },
    },
    allowPositionals: true,
  });

  // Map positional arguments cleanly
  const regions = [0, 1, 2];
  let filename = "matchdata.json";

  // Parse matches and generate standings
  let [matches, teams] = Ranking.generateRanking(-1, filename);

  // Get date of most recent match
  let mostRecentMatch = Math.max(...matches.map((m) => m.matchStartTime));
  // format date as YYYY-MM-DD
  let d = new Date(0);
  d.setUTCSeconds(mostRecentMatch);
  let defaultStrDate = d.toLocaleString("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  let strDate = positionals[2] !== undefined ? positionals[2] : defaultStrDate;

  if(strDate.equals("Invalid Date")) {
    console.error("Error: Invalid date provided.");
    process.exit(1);
  }

  // Handle format resolution and validation
  let format = ".md";
  if (values.format) {
    let extensionArg = values.format.toLowerCase();

    if (!extensionArg.startsWith(".")) {
      extensionArg = "." + extensionArg;
    }

    if (ALLOWED_EXTENSIONS.includes(extensionArg)) {
      format = extensionArg;
    } else {
      console.error(`Error: "${values.format}" is not a valid file extension.`);
      console.error(
        `Please use one of the supported formats: ${ALLOWED_EXTENSIONS.join(", ")}`,
      );
      process.exit(1);
    }
  }

  // Print results
  Report.generateOutput(teams, regions, strDate, format);
}

run();
