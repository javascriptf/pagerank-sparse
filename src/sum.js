function sum(x) {
  var a = 0;
  for (var v of x)
    a += v;
  return a;
}
module.exports = sum;
