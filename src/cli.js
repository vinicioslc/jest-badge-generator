#!/usr/bin/env node
const { readSummaryAndGenerateBadges } = require("./domain");
const convertSvgToPng = require("./external-services/convert-svg-to-png");

const {
  inputPath,
  outputPath,
  reportKeys,
  outputType
} = require("./constants/paths");

readSummaryAndGenerateBadges(inputPath, outputPath, reportKeys);

convertSvgToPng(outputPath, outputType);
