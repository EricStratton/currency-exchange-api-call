export default class CurrencyService {
  static getCurrency(country) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  }
}