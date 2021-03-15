const ceilDiv = require('./ceilDiv');


function rangeSize(v, V, DV=1) {
  return Math.max(0, ceilDiv(V-v, DV));
}
module.exports = rangeSize;
