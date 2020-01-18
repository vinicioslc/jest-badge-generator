const { findArgument } = require("../helpers/arguments");
const defaultValues = require("./default-values");

const outputPath = findArgument("output", defaultValues.DEFAULT_OUTPUT_FOLDER);
const inputPath = findArgument("input", defaultValues.DEFAULT_INPUT_FILE);
const reportKeys = ["lines", "statements", "functions", "branches"];
const outputType = findArgument("type", "svg");

module.exports = {
  outputPath,
  inputPath,
  reportKeys,
  outputType
};
