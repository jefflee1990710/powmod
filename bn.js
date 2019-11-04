const forge = require('node-forge')
const BigInteger = forge.jsbn.BigInteger

const getBN = (x) => {
    if(typeof x === "number"){
        return new BigInteger(`${x}`, 10)
    }else if(typeof x === "string"){
        return new BigInteger(`${x}`, 10)
    }else if(x.constructor.name === "BigInteger"){
        return x.clone()
    }else if(Array.isArray(x)){
        return new BigInteger(x)
    }else {
        return new BigInteger(x)
    }
}

module.exports = getBN