import CurrencyExchange from '../src/js/currency-exchange.js';

describe ('CurrencyExchange', () => {

  test('should correctly calculate total other currency amount based on user input USD amount', () => {
    let exchange = new CurrencyExchange (10, "EUR");
    expect(exchange.exchangeValue).toEqual(10*0.8440)
  });
});

