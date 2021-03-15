const rangeSize = require('./rangeSize');


function rangeLast(v, V, DV=1) {
  return v + DV*(rangeSize(v, V, DV) - 1);
}
module.exports = rangeLast;
