const path = require("path");

function root(dir) {
  return path.join.apply(path, [__dirname].concat("../", dir));
}

exports.root = root;
