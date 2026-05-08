const expect = chai.expect;

describe('Integer to Roman Conversion', function () {

  it('1 -> I', function () {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('4 -> IV', function () {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('9 -> IX', function () {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('58 -> LVIII', function () {
    expect(integerToRoman(58)).to.equal('LVIII');
  });

  it('1994 -> MCMXCIV', function () {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('3999 -> MMMCMXCIX', function () {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('invalid low -> error', function () {
    expect(() => integerToRoman(0)).to.throw();
  });

  it('invalid negative -> error', function () {
    expect(() => integerToRoman(-5)).to.throw();
  });

  it('invalid high -> error', function () {
    expect(() => integerToRoman(4000)).to.throw();
  });

  it('invalid string -> error', function () {
    expect(() => integerToRoman("ABC")).to.throw();
  });
});

describe('Roman to Integer Conversion', function () {

  it('I -> 1', function () {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('IV -> 4', function () {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('IX -> 9', function () {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('LVIII -> 58', function () {
    expect(romanToInteger('LVIII')).to.equal(58);
  });

  it('MCMXCIV -> 1994', function () {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('MMMCMXCIX -> 3999', function () {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('empty -> error', function () {
    expect(() => romanToInteger('')).to.throw();
  });

  it('IIII -> error', function () {
    expect(() => romanToInteger('IIII')).to.throw();
  });

  it('VX -> error', function () {
    expect(() => romanToInteger('VX')).to.throw();
  });

  it('ABC -> error', function () {
    expect(() => romanToInteger('ABC')).to.throw();
  });
});
