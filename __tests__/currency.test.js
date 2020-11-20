import CurrencyExchange from '../src/js/currency-exchange.js';

describe ('CurrencyExchange', () => {

  let exchange;

  beforeEach(() => {
    exchange = new CurrencyExchange(10, "EUR")
  });

  test('should correct add user input USD value to currency exhange object', () => {
    expect(exchange.USD).toEqual(10);
  });



  test('should correctly calculate total other currency amount based on user input USD amount', () => {
    expect(exchange.exchangeValue).toEqual(10*0.8440);
  });
});

