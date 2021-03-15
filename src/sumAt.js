function sumAt(x, is) {
  var a = 0;
  for (var i of is)
    a += x[i];
  return a;
}
module.exports = sumAt;
