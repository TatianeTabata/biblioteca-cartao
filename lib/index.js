function validation(cardNum) {
  const card = cardNum.replace(/\D/g, '').split('');
  return !(cardNum.length < 12
    || cardNum.length > 19
    || isNaN(parseInt(card))
    || card.every(num => num === card[0])
  );
}

function cardValidator(number) {
  const cardNum = number.replace(/\D/g, '');
  if (validation(cardNum)) {
    const sum = cardNum.split('')
      .map(Number)
      .map((value, index) => ((index % 2 === 0) ? value * 2 : value))
      .map(valueSub => (valueSub > 9 ? valueSub - 9 : valueSub))
      .reduce((count, num) => count + num, 0);
    const lastDigit = parseInt(cardNum.slice(cardNum.length - 1, cardNum));
    return ((sum + lastDigit) % 10 === lastDigit);
  }
  return false;
}

module.exports.cardValidator = cardValidator;
