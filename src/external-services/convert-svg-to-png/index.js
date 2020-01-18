const svgToPng = require("svg-to-png");
const fs = require("fs");
const path = require("path");
const convertFileNameType = function(filePath, ext) {
  if (!ext) {
    throw new Error("No extension setted");
  }
  return filePath.split(".svg").join("." + ext);
};
module.exports = async function convertToType(folderSvgs, outType) {
  switch (outType) {
    case "png":
      const badgesList = fs
        .readdirSync(folderSvgs)
        .filter(entry => entry.endsWith(".svg"));
      for (const filename of badgesList) {
        const filepath = path.resolve(folderSvgs + "/" + filename);
        await svgToPng.convert(filepath, folderSvgs + "\\");
        await fs.unlinkSync(filepath);
      }
      break;
    default:
      break;
  }
  return;
};
