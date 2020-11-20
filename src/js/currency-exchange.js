export default class CurrencyExchange {
  constructor(USD, otherCountry) {
    this.USD = USD;
    this.otherCountry = otherCountry;
    this.exchangeValue = 'test';
  }

  calcExchangeValue() {
    return this.exchangeValue = this.USD*response.conversion_rates[`${otherCountry}`];
  }
}