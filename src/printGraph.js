// Prints graph.
function printGraph(x, all=false) {
  var a = `order: ${x.order()} size: ${x.size}`;
  if (!all) { console.log(`${a} {}`); return; }
  console.log(`${a} {`);
  for (var u of x.vertices()) {
    var a = `  ${u} ->`;
    for (var v of x.edges(u))
      a += ` ${v}`;
    console.log(a);
  }
  console.log('}');
}
module.exports = printGraph;
