const fs = require('fs');
const readline = require('readline');


function readMtx(pth, a) {
  var input = fs.createReadStream(pth), n = 0;
  var reader = readline.createInterface({input});
  return new Promise(fres => {
    reader.on('line', l => {
      if (l.startsWith('%')) return;
      if (++n === 1) return;
      var [u, v] = l.split(/\s+/g).map(parseInt);;
      a.addEdge(u, v);
    });
    reader.on('close', fres);
  });
}
module.exports = readMtx;
