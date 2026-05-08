const chai = require("chai");
const expect = chai.expect;

const {
  integerToRoman,
  romanToInteger
} = require("./script");

describe("Integer to Roman Conversion", function () {

  it("1 -> I", function () {
    expect(integerToRoman(1)).to.equal("I");
  });

  it("4 -> IV", function () {
    expect(integerToRoman(4)).to.equal("IV");
  });

  it("9 -> IX", function () {
    expect(integerToRoman(9)).to.equal("IX");
  });

  it("58 -> LVIII", function () {
    expect(integerToRoman(58)).to.equal("LVIII");
  });

  it("1994 -> MCMXCIV", function () {
    expect(integerToRoman(1994)).to.equal("MCMXCIV");
  });

  it("3999 -> MMMCMXCIX", function () {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it("0 throws error", function () {
    expect(() => integerToRoman(0)).to.throw();
  });

});

describe("Roman to Integer Conversion", function () {

  it("I -> 1", function () {
    expect(romanToInteger("I")).to.equal(1);
  });

  it("IV -> 4", function () {
    expect(romanToInteger("IV")).to.equal(4);
  });

  it("IX -> 9", function () {
    expect(romanToInteger("IX")).to.equal(9);
  });

  it("MCMXCIV -> 1994", function () {
    expect(romanToInteger("MCMXCIV")).to.equal(1994);
  });

});
