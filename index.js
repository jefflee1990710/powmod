const getBN = require('./bn')

module.exports = (p, x, n) => {
    let bx = getBN(x);
    let bp = getBN(p);
    let bn = getBN(n);
    return bp.modPow(bx, bn)
}
