const writeFile = require('./writeFile');


function writeMtx(pth, g) {
  var a = `%%MatrixMarket matrix coordinate integer asymmetric\n`;
  a += `${g.order()} ${g.order()} ${g.size()}\n`;
  for (var u of g.vertices()) {
    for (var v of g.edges(u))
      a += `${u} ${v} ${g.edgeData(u, v)}\n`;
  }
  writeFile(pth, a);
}
module.exports = writeMtx;
