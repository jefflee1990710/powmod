const forge = require('node-forge')
const BigInteger = forge.jsbn.BigInteger
const THIRTY = new BigInteger(null);
THIRTY.fromInt(30);

const generateRandom = (bits) => {
    const rng = {
        nextBytes : (x) => {
            let b = forge.random.getBytesSync(x.length)
            for(let i = 0; i < x.length; i ++){
                x[i] = b.charCodeAt(i)
            }
        }
    }
    let num = new BigInteger(bits, rng)
    
    return num;
}

module.exports = {
    generateRandom
}