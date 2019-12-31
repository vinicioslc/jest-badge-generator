#!/usr/bin/env node
const { readSummaryAndGenerateBadges } = require("./domain");
const { inputPath, outputPath, reportKeys } = require("./constants/paths");

readSummaryAndGenerateBadges(inputPath, outputPath, reportKeys);
