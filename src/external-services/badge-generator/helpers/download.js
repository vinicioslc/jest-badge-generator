const { get } = require("https");

const download = (url, cb) => {
  get(url, res => {
    let file = "";
    res.on("data", chunk => {
      file += chunk;
    });
    res.on("end", () => cb(null, file));
  }).on("error", err => cb(err));
};

module.exports = {
  download
};
