
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
- Jenkins : 2.401.1
- SuperTest : 6.3.3
- Lodash : 4.17.21
- Babel : 7.22.1
- Mocha JUnit Reporter : 2.2.0



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
- 

After installation of Chrome Browser, Open Terminal on your system and add the following commands to add the path of your chrome driver and to check if it is present after adding:

- sudo nano /etc/paths
(add the path of chrome driver)
- echo $PATH 
(check if the path exists)

To install Jenkins on macOS system, open your terminal and execute below commands to install and start jenkins service:

- brew install jenkins-lts
- brew services start jenkins-lts

(Make sure to have Homebrew already installed on your system)

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
- npm install lodash
- npm install supertest
- npm install @babel/cli @babel/core @babel/node @babel/register @babel/preset-env @babel/plugin-transform-runtime
- npm install mocha-junit-reporter

## Project Structure

- **config.js**: Contains the configuration settings for the UI tests of project, such as the application URL under the config folder.
- **apiConfig.js**: Contains the configuration settings for the API tests of project, such as the application URL under the config folder.

- **data/**: Folder containing data files used in the tests.
- **checkoutData.js**: Contains valid checkout data.
- **userCredentials.js**: Contains valid and invalid user credentials.
- **helpers/**: Folder containing helper functions used in the tests.
- **apiHelper.js**: Contains functions related to POST, GET, PUT, and DELETE methods.
- **cartHelper.js**: Contains functions related to adding items to the cart and managing the cart.
- **checkoutHelper.js**: Contains functions related to filling checkout information and completing the checkout process.
- **loginHelper.js**: Contains functions related to logging in and handling login-related tasks.
- **test/**: Folder containing the actual UI Automation test files.
- **albumsTestAPI.js**: Contains tests related to the API functionality.
- **commentsTestAPI.js**: Contains tests related to the API functionality.
- **postsTestAPI.js**: Contains tests related to the API functionality.
- **userTestAPI.js**: Contains tests related to the API functionality.
- **cartTests.js**: Contains tests related to the cart functionality.
- **checkoutTests.js**: Contains tests related to the checkout process.
- **loginTests.js**: Contains tests related to the login functionality.
- **productDetailsTests.js**: Contains tests related to the product details page.
- **sortingTests.js**: Contains tests related to the product sorting filter.
- **TestReports/**: Folder containing the actual UI Automation test results reports.
- **TestResults.html**: Contains tests results related the actual UI Automation from test folder.
- **TestResults.json**: Contains tests results related the actual UI Automation from test folder.
- **mochawesome-report-api/**: Folder containing the actual API Automation test results reports.
- **mochawesome.html**: Contains tests results related the actual API Automation from test folder.
- **mochawesome.json**: Contains tests results related the actual API Automation from test folder.
- **package.json**: Contains all the project configuration and dependencies related to the project.
- **test-results.xml**: Contains tests results related the actual API Automation from test folder.
- **Jenkinsfile**: Contains pipeline script for pipeline to follow to build CI/CD process.


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
- npx mocha --no-timeouts 'test/albumsTestAPI.js'
- npx mocha --no-timeouts 'test/commentsTestAPI.js'
- npx mocha --no-timeouts 'test/postsTestAPI.js'
- npx mocha --no-timeouts 'test/usersTestAPI.js'

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
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/node": "^7.22.5",
    "@babel/plugin-transform-runtime": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/register": "^7.22.5",
    "chai": "^4.3.7",
    "lodash": "^4.17.21",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0",
    "supertest": "^6.3.3"
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
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/node": "^7.22.5",
    "@babel/plugin-transform-runtime": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/register": "^7.22.5",
    "chai": "^4.3.7",
    "lodash": "^4.17.21",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0",
    "supertest": "^6.3.3"
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
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/node": "^7.22.5",
    "@babel/plugin-transform-runtime": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/register": "^7.22.5",
    "chai": "^4.3.7",
    "lodash": "^4.17.21",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0",
    "supertest": "^6.3.3"
  }
}

And, run command "npm test" to run all the tests in parallel and to create a directory named TestReports which will store the test results for all tests under file named TestResults using mochawesome.

(Note: There should be no depedency between the tests)

4. Run command npm run test-junit, to create mocha junit test results XML file with below package.json configuration.

{
  "name": "automation",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "mocha --no-timeouts --parallel",
    "test-junit": "mocha --no-timeouts --reporter mocha-junit-reporter"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/node": "^7.22.5",
    "@babel/plugin-transform-runtime": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/register": "^7.22.5",
    "chai": "^4.3.7",
    "lodash": "^4.17.21",
    "mocha": "^10.2.0",
    "mochawesome": "^7.1.3",
    "selenium-webdriver": "^4.10.0",
    "supertest": "^6.3.3"
  },
  "devDependencies": {
    "mocha-junit-reporter": "^2.2.0"
  }
}



## CI/CD Implementation

The UI Automation tests can be integrated into a CI/CD pipeline using Jenkins. The pipeline can be configured to automatically trigger the tests whenever changes are pushed to the repository. Follow the steps below to set up the CI/CD pipeline:

1. Install and configure Jenkins
2. Run Jenkins on localhost
3. Open Jenkins in your web browser and navigate to the dashboard.
4. Click on "New Item" to create a new Jenkins pipeline.
5. Enter a name for the pipeline (e.g., UI Automation) and select "Pipeline".
6. Configure the pipeline script with the following:

   pipeline {
    agent any

    tools {
        nodejs "Node"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master',
                url: 'https://github.com/ShiwaniDeshmukh/VisualStudioCode.git'
            }
        }
        
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Execute the UI Automation tests
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy App'
            }
        }
    }
}

7. Save the Jenkins pipeline configuration.
8. On the Jenkins dashboard, locate your UI Automation pipeline and click on "Build Now" to trigger the pipeline execution.
9. Monitor the CI/CD pipeline:

   - Monitor the Jenkins console output and the pipeline's progress on the Jenkins dashboard.
   - The pipeline will perform the defined stages sequentially and execute your UI Automation tests.
   - Also, go to configuration of pipeline and under "Build Triggers", click on the checkboc of Poll SCM to schedule your build trigger whenever any changes are made.


## Appendix

The tests are configured to run on Chrome browser by default. 

- The UI Automation tests use Selenium WebDriver and are written in JavaScript.
- The tests cover functionality related to the cart, checkout process, login, and product details.
- The tests are executed using the Chrome browser.

