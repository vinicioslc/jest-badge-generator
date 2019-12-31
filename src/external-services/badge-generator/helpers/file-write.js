const { writeFile } = require("fs");

const writeBadgeInFolder = (key, res, outputPath) => {
  writeFile(`${outputPath}/badge-${key}.svg`, res, "utf8", writeError => {
    if (writeError) {
      throw writeError;
    }
  });
};

module.exports = { writeBadgeInFolder };
