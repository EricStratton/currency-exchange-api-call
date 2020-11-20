export default class CurrencyExchange {
  constructor(USD, otherCountry) {
    this.USD = USD;
    this.otherCountry = otherCountry;
    this.exchangeValue = 'test';
  }

  addUSD() {
    
  }

  calcExchangeValue() {
    return this.exchangeValue = USD*response.conversion_rates[`${otherCountry}`];
  }
}