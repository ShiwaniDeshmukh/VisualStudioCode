const { By } = require("selenium-webdriver");

async function fillCheckoutInformation(driver, firstName, lastName, zipCode) {
  // Find and fill in the First Name, Last Name, and Zip Code fields
  const firstNameField = await driver.findElement(By.id("first-name"));
  await firstNameField.sendKeys(firstName);

  const lastNameField = await driver.findElement(By.id("last-name"));
  await lastNameField.sendKeys(lastName);

  const zipCodeField = await driver.findElement(By.id("postal-code"));
  await zipCodeField.sendKeys(zipCode);
}

async function startCheckout(driver) {
  // Find and click the "Checkout" button
  const checkoutButton = await driver.findElement(By.id("checkout"));
  await checkoutButton.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function continueCheckout(driver) {
    // Find and click the "Continue" button
    const continueButton = await driver.findElement(By.id("continue"));
    await continueButton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    // Check if an error message appears
    const errorMessage = await findErrorMessage(driver);
    if (errorMessage.includes("First Name is required")) {
      return false; // Return false to indicate the need to go back and fill in the information
    }
  
    return true; // Return true to indicate successful continue
  }
  
  async function findErrorMessage(driver) {
    try {
      const errorMessageElement = await driver.findElement(By.css("h3[data-test='error']"));
      return await errorMessageElement.getText();
    } catch (error) {
      return ""; // Return an empty string if the error message element is not found
    }
  }
  

async function getOverviewItems(driver) {
  // Find the overview items
  const overviewItems = await driver.findElements(By.className("cart_item"));
  return overviewItems;
}

async function getOverviewTotalPrice(driver) {
  // Find the total price on the overview page
  const totalPriceElement = await driver.findElement(By.className("summary_total_label"));
  const totalPriceText = await totalPriceElement.getText();
  return totalPriceText;
}

async function finishCheckout(driver) {
  // Find and click the "Finish" button
  const finishButton = await driver.findElement(By.id("finish"));
  await finishButton.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

module.exports = {
  fillCheckoutInformation,
  startCheckout,
  continueCheckout,
  getOverviewItems,
  getOverviewTotalPrice,
  finishCheckout,
};
    