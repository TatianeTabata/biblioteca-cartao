var chai = require('chai');
var expect = chai.expect;
var card = require('../lib/index');

describe('index lib', () => {
  describe('cardValidator', () => {

    it('Verifica se o cartão é valido', () => {
      expect(card.cardValidator('5084392518959159')).to.equal(true);
    })

    it('Verifica se o cartão NÃO é valido', () => {
      expect(card.cardValidator('4824790159602948')).to.equal(false);
    })

    it('Verifica se o cartão possui menos de 16 digitos', () => {
      expect(card.cardValidator('22861')).to.equal(false);
    })

    it('Verifica se o cartão não é do tipo NAN', () => {
      expect(card.cardValidator('a2286ut9105685')).to.equal(false);
    })

    it('Verifica se o campo número do cartão está vazio', () => {
      expect(card.cardValidator('')).to.equal(false);
    })

    it('Verifica se o campo do cartão possui somente números iguais', () => {
      expect(card.cardValidator('1111111111111111')).to.equal(false);
    })
    it('Verifica validação do cartão digitado com espaço', () => {
      expect(card.cardValidator('5084 3925 1895 9159')).to.equal(true);
    })
  })
});




