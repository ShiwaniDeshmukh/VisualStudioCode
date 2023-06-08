
# UI Automation Tests

This repository contains UI Automation tests for Selenium-Test. 

This repository contains UI automation tests for www.saucedemo.com. The tests are written in JavaScript using Node.js and leverage Selenium WebDriver, Mocha, Chai, and Mochawesome.

The purpose of these tests is to verify the functionality of the website's features and ensure a smooth user experience. The tests cover various scenarios, including login, sorting products, adding items to the shopping cart, and completing the checkout process.


## Tech Stack - Prerequisites 

- Visual Studio Code : 1.78
- Chrome Browser : 114.0.5735.90 
- Node.js : 18.16.0
- Chai : 4.3.7
- Mocha : 10.2.0
- Mochawesome : 7.1.3
- Selenium Webdriver : 4.10.0



## Installation


- [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/) should be installed.
- [Node.js](https://nodejs.org/) should be installed.
- [Chrome](http://chromedriver.storage.googleapis.com/index.html) should be installed.
- [Visual Studio code](https://code.visualstudio.com/) should be installed.


To chcek for successfull installation of Node.js:

Open Terminal on your system and add the following commands to receive the version details:

- node -v
- npm -v

Later, naviagte to the root directory project Selenium-Test on the terminal and run below commands:

- npm init (to setup package.json file)
- npm install selenium-webdriver

After installation of Chrome Browser, Open Terminal on your system and add the following commands to add the path of your chrome driver and to check if it is present after adding:

- sudo nano /etc/paths
(add the path of chrome driver)
- echo $PATH 
(check if the path exists)


## Dependencies

The following dependencies are used in the project in Package.json file:

- Chai : 4.3.7
- Mocha : 10.2.0
- Mochawesome : 7.1.3
- Selenium-Webdriver : 4.10.0

1. Clone the Selenium-Test project repository.
Git Clone link: 

2. Open a terminal or command prompt and navigate to the project's root directory.
In visual studio code, open the project and go to terminal.

3. Run the following command to install the project dependencies:

- npm install chai
- npm install mocha
- npm install mochawesome

## Project Structure

- **config.js**: Contains the configuration settings for the project, such as the application URL under the config folder.

- **data/**: Folder containing data files used in the tests.
- **checkoutData.js**: Contains valid checkout data.
- **userCredentials.js**: Contains valid and invalid user credentials.
- **helpers/**: Folder containing helper functions used in the tests.
- **cartHelper.js**: Contains functions related to adding items to the cart and managing the cart.
- **checkoutHelper.js**: Contains functions related to filling checkout information and completing the checkout process.
- **loginHelper.js**: Contains functions related to logging in and handling login-related tasks.
- **test/**: Folder containing the actual UI Automation test files.
- **cartTests.js**: Contains tests related to the cart functionality.
- **checkoutTests.js**: Contains tests related to the checkout process.
- **loginTests.js**: Contains tests related to the login functionality.
- **productDetailsTests.js**: Contains tests related to the product details page.
- **sortingTests.js**: Contains tests related to the product sorting filter.
- **TestReports/**: Folder containing the actual UI Automation test results reports.
- **TestResults.html**: Contains tests results related the actual UI Automation from test folder.
- **TestResults.json**: Contains tests results related the actual UI Automation from test folder.
## Running Tests

1. Clone the Selenium-Test project repository.
Git Clone link: 

2. Open a terminal or command prompt and navigate to the project's root directory.
In visual studio code, open the project and go to terminal.

3. Run the following command to execute the UI Automation tests:

- npx mocha --no-timeouts 'test/loginTests.js'
- npx mocha --no-timeouts 'test/sortingTests.js'
- npx mocha --no-timeouts 'test/productDetailsTests.js'
- npx mocha --no-timeouts 'test/cartTests.js'
- npx mocha --no-timeouts 'test/checkoutTests.js'

1. After running these commands, change the package.json file as below:
{
  "name": "selenium-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --no-timeouts"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0"
  }
}

And, run command "npm test" to run all the tests in sequence rather than running them one by one.

2. Now, change the package.json file as below:

{
  "name": "selenium-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --no-timeouts --parallel"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0"
  }
}

And, run command "npm test" to run all the tests in parallel to save time.
(Note: There should be no depedency between the tests)

3. Again, change the package.json file as below:

{
  "name": "selenium-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register --reporter-options reportDir=/Users/shiwanideshmukh/Selenium-Test/TestReports,reportFilename=TestResults"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0"
  }
}

And, run command "npm test" to run all the tests in parallel and to create a directory named TestReports which will store the test results for all tests under file named TestResults using mochawesome.

(Note: There should be no depedency between the tests)
## Appendix

The tests are configured to run on Chrome browser by default. 

- The UI Automation tests use Selenium WebDriver and are written in JavaScript.
- The tests cover functionality related to the cart, checkout process, login, and product details.
- The tests are executed using the Chrome browser.

