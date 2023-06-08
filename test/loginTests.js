const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("chai").assert;
const loginHelper = require("../helpers/loginHelper");
const data = require("../data/userCredentials");
const config = require("../config/config");

describe("Login Tests", function () {
  let driver;

  before(async function () {
    // Launch the Chrome browser driver
    driver = await new Builder().forBrowser("chrome").build();
    // Maximize the window
    await driver.manage().window().maximize();
  });

  after(async function () {
    // Close the browser
    await driver.quit();
  });

  it("should login successfully with valid credentials", async function () {
    await driver.get(config.appUrl);

    // Log in with valid credentials
    await loginHelper.login(driver, data.validCredentials.username, data.validCredentials.password);

    const pageTitle = await loginHelper.getPageTitle(driver);

    assert.strictEqual(pageTitle, "Products");
    console.log("Login test passed! Successfully logged in with valid credentials.");
  });

  it("should not login with invalid credentials", async function () {
    await driver.get(config.appUrl);

    // Log in with invalid credentials
    await loginHelper.login(driver, data.invalidCredentials.username, data.invalidCredentials.password);

    const errorMessage = await loginHelper.getErrorMessage(driver);

    assert.strictEqual(errorMessage, "Epic sadface: Username and password do not match any user in this service");
    console.log("Login test passed! Invalid credentials were rejected.");
  });
});