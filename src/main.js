import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';



// User Interface Logic //

function calcExchange(response, USD, otherCountry) {
  if (response.conversion_rates) {
    $('#printExchange').text(USD*response.conversion_rates[`${otherCountry}`]);
  } else {
    $('#printErrors').text(`Error: ${response.result}`);
  }
}

$(document).ready(function() {
  $('form#userInput').submit(function(event) {
    event.preventDefault();

    const otherCountry = $('#otherCountry').val();
    const USD = $('#usd').val();
    
    CurrencyService.getCurrency()
      .then(function(response) {
        calcExchange(response, USD, otherCountry);
      });

  });
}); 