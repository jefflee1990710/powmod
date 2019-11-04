Calculate powmod
=========

A very simple library to calculate powmod from difference form of integer

## Installation

`npm install powmod`

## Usage

number
```
let x = 2, n = 3, g = 10
let r = powmod(g, x, n)
```

string
```
let x = '2', n = '3', g = '10'
let r = powmod(g, x, n)
```

bytearray
```
let x = [2], n = [3], g = [10]
let r = powmod(g, x, n)
```

big integer
```
let x = new BigInteger("2", 10), n = new BigInteger("3", 10), g = new BigInteger("10", 10)
let r = powmod(g, x, n)
```

mix data type
```
let x = new BigInteger("2", 10), n = "3", g = [10]
let r = powmod(g, x, n)
```

## Test

`npm test`

## Contributing

https://github.com/jefflee1990710/powmod

