module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 0 || number > 999) throw new Error('Number out of range');
  if (number < 10) return ones[number];
  if (number >= 10 && number < 20) return teens[number - 10];
  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const onePart = number % 10;
    return `${tens[tenPart]}${onePart ? ` ${ones[onePart]}` : ''}`;
  }
  const hundredPart = Math.floor(number / 100);
  const rest = number % 100;
  const restWords = rest ? ` ${toReadable(rest)}` : '';
  return `${ones[hundredPart]} hundred${restWords}`;
};
