const chai = require("chai");
const expect = chai.expect;

const {
  integerToRoman,
  romanToInteger
} = require("./script");

describe("Integer to Roman Conversion", function () {

  it("TC-1: 1 -> I", function () {
    expect(integerToRoman(1)).to.equal("I");
  });

  it("TC-2: 4 -> IV", function () {
    expect(integerToRoman(4)).to.equal("IV");
  });

  it("TC-3: 9 -> IX", function () {
    expect(integerToRoman(9)).to.equal("IX");
  });

  it("TC-4: 58 -> LVIII", function () {
    expect(integerToRoman(58)).to.equal("LVIII");
  });

  it("TC-5: 1994 -> MCMXCIV", function () {
    expect(integerToRoman(1994)).to.equal("MCMXCIV");
  });

  it("TC-6: 3999 -> MMMCMXCIX", function () {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it("TC-7: 0 -> Error", function () {
    expect(() => integerToRoman(0)).to.throw();
  });

  it("TC-8: -5 -> Error", function () {
    expect(() => integerToRoman(-5)).to.throw();
  });

  it("TC-9: 4000 -> Error", function () {
    expect(() => integerToRoman(4000)).to.throw();
  });

  it("TC-10: 'ABC' -> Error", function () {
    expect(() => integerToRoman("ABC")).to.throw();
  });

});

describe("Roman to Integer Conversion", function () {

  it("TC-11: I -> 1", function () {
    expect(romanToInteger("I")).to.equal(1);
  });

  it("TC-12: IV -> 4", function () {
    expect(romanToInteger("IV")).to.equal(4);
  });

  it("TC-13: IX -> 9", function () {
    expect(romanToInteger("IX")).to.equal(9);
  });

  it("TC-14: LVIII -> 58", function () {
    expect(romanToInteger("LVIII")).to.equal(58);
  });

  it("TC-15: MCMXCIV -> 1994", function () {
    expect(romanToInteger("MCMXCIV")).to.equal(1994);
  });

  it("TC-16: MMMCMXCIX -> 3999", function () {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });

  it("TC-17: empty string -> Error", function () {
    expect(() => romanToInteger("")).to.throw();
  });

  it("TC-18: IIII -> Error (non-canonical)", function () {
    expect(() => romanToInteger("IIII")).to.throw();
  });

  it("TC-19: VX -> Error", function () {
    expect(() => romanToInteger("VX")).to.throw();
  });

  it("TC-20: ABC -> Error", function () {
    expect(() => romanToInteger("ABC")).to.throw();
  });

});
