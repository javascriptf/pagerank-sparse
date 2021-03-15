const fs = require('fs');
const os = require('os');


function writeFile(pth, d) {
  d = d.replace(/\r?\n/g, os.EOL);
  fs.writeFileSync(pth, d);
}
module.exports = writeFile;
