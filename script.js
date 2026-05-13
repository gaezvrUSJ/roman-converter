function integerToRoman(num) {
  if (typeof num !== 'number' || isNaN(num) || num <= 0 || num >= 4000) {
    throw new Error('The number must be between 1 and 3999.');
  }

  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

function romanToInteger(roman) {
  if (typeof roman !== 'string' || roman.trim() === '') {
    throw new Error('Input must be a valid Roman numeral.');
  }

  roman = roman.toUpperCase();

  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('The Roman numeral contains invalid characters.');
  }

  const romanMap = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };

  let total = 0;
  let prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const curr = romanMap[roman[i]];

    if (curr < prev) total -= curr;
    else total += curr;

    prev = curr;
  }

  const reconversion = integerToRoman(total);
  if (reconversion !== roman) {
    throw new Error('The Roman numeral is not canonical.');
  }

  return total;
}

function handleConversion() {
  const mode = document.getElementById('conversionMode').value;
  const input = document.getElementById('inputValue').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  // Evento 1: Usuario hace clic en Convertir
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click_convert', {
      'event_category': 'user_action',
      'event_label': mode
    });
  }

  try {
    if (mode === 'intToRoman') {
      const num = parseInt(input, 10);
      if (isNaN(num)) throw new Error('Please enter a valid integer number.');
      
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;
      
      // Evento 2: Conversión exitosa de entero a romano
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion_success', {
          'event_category': 'conversion',
          'event_label': 'int_to_roman',
          'value': num
        });
      }
      
    } else {
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;
      
      // Evento 2 alternativo: Conversión exitosa de romano a entero
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion_success', {
          'event_category': 'conversion',
          'event_label': 'roman_to_int',
          'value': num
        });
      }
    }
  } catch (err) {
    errorDiv.textContent = err.message;
    
    // Evento 3: Error del usuario (entrada inválida)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion_error', {
        'event_category': 'error',
        'event_label': mode,
        'value': err.message
      });
    }
  }
}

if (typeof document !== "undefined") {
  const btn = document.getElementById('convertButton');
  if (btn) btn.addEventListener('click', handleConversion);
}

if (typeof window !== "undefined") {
  window.integerToRoman = integerToRoman;
  window.romanToInteger = romanToInteger;
}

if (typeof module !== "undefined") {
  module.exports = {
    integerToRoman,
    romanToInteger
  };
}
