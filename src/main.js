import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';


// Business Logic //

function calcExchange(response, USD, otherCountry) {
  if (response.conversion_rates) {
    if (isNaN(response.conversion_rates[`${otherCountry}`])) {
      return $('#printErrors').text("We are sorry. The currency you selected is not currently available for conversion.");
    }
    $('#printExchange').text((USD*response.conversion_rates[`${otherCountry}`]) );
  } else {
    $('#printErrors').text(`Error: ${response.message}`);
  }
}

// User Interface Logic //

$(document).ready(function() {
  $('form#userInput').submit(function(event) {
    event.preventDefault();

    $('#printErrors').empty();
    const otherCountry = $('#otherCountry').val();
    const USD = $('#usd').val();
    
    CurrencyService.getCurrency()
      .then(function(response) {
        calcExchange(response, USD, otherCountry);
      });

  });
}); 