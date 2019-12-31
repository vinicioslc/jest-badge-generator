#!/usr/bin/env node
const { readSummaryAndGenerateBadges } = require("./src");
const { inputPath, outputPath } = require("./constants/paths");

readSummaryAndGenerateBadges(inputPath, outputPath);
