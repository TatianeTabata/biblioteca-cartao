function validation(card) {
  //console.log(parseInt(card))
  return !(card.length < 12
    || card.length > 19
    || card.every(num => num === card[0])
  );
}

function cardValidator(number) {
  const cardNum = number.replace(/\D/g, '');
  const cardArray = cardNum.spli('').map(Number);
  if (validation(cardArray)) {
    const sum = cardArray
      .map((value, index) => (index % 2 === 0) ? value * 2 : value)
      .map(valueSub => valueSub > 9 ? valueSub - 9 : valueSub)
      .reduce((count, num) => count + num, 0);
    const lastDigit = parseInt(cardNum.slice(cardNum.length - 1, cardNum));
    return ((sum + lastDigit) % 10 === lastDigit);
  }
  return false;
}

module.exports.cardValidator = cardValidator;
