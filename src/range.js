const rangeSize = require('./rangeSize');


function range(v, V, DV=1) {
  var N = rangeSize(v, V, DV);
  for (var i=0; i<N; i++, v+=DV)
    yield v;
}
module.exports = range;
