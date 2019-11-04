'use strict';

let BigInteger = require('node-forge').jsbn.BigInteger
var expect = require('chai').expect;
let getBN = require('../bn')
let powmod = require('../index')

describe('#getBN', function() {
    it('get big number from number', async function() {
        let x = getBN(2)
        expect(x.toString()).eq("2")
    })
    it('get big number from big number', async function() {
        let x = getBN(1234567891234567)
        expect(x.toString()).eq("1234567891234567")
    })
    it('get big number from string', async function() {
        let x = getBN("23")
        expect(x.toString()).eq("23")
    })
    it('get big number from bytearray', async function() {
        let x = getBN([9, 9])
        expect(x.toString()).eq("2313")
    })
    it('get big number from BigInteger', async function() {
        let x = getBN(new BigInteger("20", 10))
        expect(x.toString()).eq("20")
    })
})

describe('#modpow', function() {
    it("normal discrete logarithm from integer", () => {
        let x = 2, n = 3, g = 10
        let r = powmod(g, x, n)
        expect(r.toString()).eq("1")
    })
    it("normal discrete logarithm from string", () => {
        let x = '2', n = '3', g = '10'
        let r = powmod(g, x, n)
        expect(r.toString()).eq("1")
    })
    it("normal discrete logarithm from byte array", () => {
        let x = [2], n = [3], g = [10]
        let r = powmod(g, x, n)
        expect(r.toString()).eq("1")
    })
    it("normal discrete logarithm from big integer", () => {
        let x = new BigInteger("2", 10), n = new BigInteger("3", 10), g = new BigInteger("10", 10)
        let r = powmod(g, x, n)
        expect(r.toString()).eq("1")
    })
    it("normal discrete logarithm from mix data type", () => {
        let x = new BigInteger("2", 10), n = "3", g = [10]
        let r = powmod(g, x, n)
        expect(r.toString()).eq("1")
    })
})