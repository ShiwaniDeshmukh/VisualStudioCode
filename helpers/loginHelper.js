const { By, Key, until } = require("selenium-webdriver");

// Login function to enter the username and password and submit the form
async function login(driver, username, password) {
  const usernameField = await driver.findElement(By.id("user-name"));
  const passwordField = await driver.findElement(By.id("password"));

  await usernameField.sendKeys(username);
  await passwordField.sendKeys(password, Key.RETURN);
}

// Get the page title and return the text
async function getPageTitle(driver) {
  // Wait until the title element is located
  const titleElement = await driver.wait(until.elementLocated(By.className("title")), 5000);
  return await titleElement.getText();
}

// Get the error message displayed on the page and return the text
async function getErrorMessage(driver) {
  // Wait until the error message element is located
  const errorMessageElement = await driver.wait(until.elementLocated(By.css("h3[data-test='error']")), 5000);
  return await errorMessageElement.getText();
}

module.exports = {
  login,
  getPageTitle,
  getErrorMessage
};
