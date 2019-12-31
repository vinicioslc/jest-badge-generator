/**
 * Will lookup the argument in the cli arguments list and will return a
 * value passed as CLI arg (if found)
 * Otherwise will return default value passed
 * @param argName - name of hte argument to look for
 * @param defaultOutput - default value to return if could not find argument in cli command
 * @private
 */
const findArgument = (argName, defaultOutput) => {
  if (!argName) {
    return defaultOutput;
  }

  const index = process.argv.findIndex(a => a.match(argName));
  if (index < 0) {
    return defaultOutput;
  }

  try {
    return process.argv[index + 1];
  } catch (e) {
    return defaultOutput;
  }
};

module.exports = { findArgument };
