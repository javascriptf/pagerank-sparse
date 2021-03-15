function transposeWithDegree(x, a) {
  for (var u of x.vertices())
    a.addVertex(u, x.degree(u));
  for (var u of x.vertices()) {
    for (var v of x.edges(u))
      a.addEdge(v, u, x.edgeData(u, v));
  }
  return a;
}
module.exports = transposeWithDegree;
