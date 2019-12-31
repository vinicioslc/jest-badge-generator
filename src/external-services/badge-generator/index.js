const mkdirp = require("mkdirp");
const { get } = require("https");
const { writeFile, readFile } = require("fs");
const { getColour } = require("./helpers/color");
const { download } = require("./helpers/download");
const { writeBadgeInFolder } = require("./helpers/file-write");

const getBadge = (summaryReport, key) => {
  if (!(summaryReport && summaryReport.total && summaryReport.total[key])) {
    throw new Error("malformed coverage report");
  }

  const coverage =
    !summaryReport.total[key] ||
    typeof summaryReport.total[key].pct !== "number"
      ? 0
      : summaryReport.total[key].pct;
  const colour = getColour(coverage);

  return `https://img.shields.io/badge/Coverage${encodeURI(
    ":"
  )}${key}-${coverage}${encodeURI("%")}-${colour}.svg`;
};

const getBadgeByKey = (report, outputPath) => currentKey => {
  const url = getBadge(report, currentKey);

  download(url, (err, res) => {
    if (err) {
      throw err;
    }
    mkdirp(outputPath, folderError => {
      if (folderError) {
        console.error(`Could not create output directory ${folderError}`);
      } else {
        writeBadgeInFolder(currentKey, res, outputPath);
      }
    });
  });
};

module.exports = {
  getBadge,
  writeBadgeInFolder,
  getBadgeByKey
};
