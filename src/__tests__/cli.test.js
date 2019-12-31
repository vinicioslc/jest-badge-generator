const { findArgument } = require("../helpers/arguments");
const defaultValues = require("../constants/default-values");

test("Shall not pass", () => {
  //   process.argv = process.argv + ' --teste="slaoq" ';
  let result = findArgument("--folder", defaultValues.DEFAULT_INPUT_FILE);
  expect(result).toBe(defaultValues.DEFAULT_INPUT_FILE);
});
