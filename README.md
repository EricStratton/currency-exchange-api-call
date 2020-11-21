## API Request -- Currency Exchanger

### _Exchange USD and currencies available with ExchangeRate-API, vs: 11/20/2020_

### _Created by: Eric Stratton_

## Description

Enter an amount in USD and exchange that amount with any one of the currencies available in the select menu.

## Setup/Instillation

### Requirements:

- Internet browser
- Code editor if you wish to view/edit the code (recommended)
- Node.js
- ExchangeRate-API key 

### Node:

- Node is a requirement for running this applcation, if you need to install it visit <https://nodejs.org/en/download/> and download the applicable version for your system

### API:

- To run this application you will be required to make an account with ExchangeRate-API to generate your own API key
- The API key is sensitive and should be stored in an .env file at the top level of your working directory
- Be sure to follow the naming convention: `API_KEY = {your API}` in the .env file
- Include the .env file in your .gitignore file

### Download: 

- Download this repository by clicking the green 'Code' icon and selecting download zip
- Use your favorite zip.file opener to extract files to your local device

### Terminal:

- Open command terminal on local device
- Navigate to desktop in terminal using `$ cd desktop`
- Copy repository link by clicking on green 'Code' icon and clicking the clipboard to the right of the url
- Use command `$ git clone {specific_repository_URL}`
- From desktop, run command `$ cd {newly-downloaded-directory}` to navigate to the installed directory
- Run command `$ code .` to open directory in default code editor
- While inside `{newly-downloaded-directory}` in your terminal run `$ npm install` to download necessary Node packages for application functionality
- Run command `$ npm run start` to open webpage in defualt browse with an `8080` local server 
- Alternatively, use command `$ npm run build` to generate dist- folder in your local directory
  - Open `index.html` file located in the dist- folder with your prefered local server tool
  - Requires you perform an `$ npm run build` after altering code to see changes in browser

## Tests

 Test | Input | Output |
| :------------| :---------------| :-----------|
| Currency Exchanger |
| Take user input USD and exchange with any of the currencies available in the API response | 10USD | 7.5349GBP |
| Return message if currency is not available via API response | 10USD | "Sorry this exhange is not currently available" |
| Return error if API request status is not 200OK'd | 10USD | Error: 404 |


## Known Bugs

There are no known bugs at this time.

## Support & Contact Details

Do not hesitate to contact me at:

<strattonericj@gmail.com>

# Technologies

- HTML
- CSS
- JavaScript
- Node.js
- jQuery
- Bootstrap
- Git
- GitHub
- ExchangeRate-API

## Licensing

Copyright (c) 2020 **_Eric Stratton_**

This software is licensed under the MIT license