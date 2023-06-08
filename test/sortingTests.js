const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("chai").assert;
const loginHelper = require("../helpers/loginHelper");
const data = require("../data/userCredentials");
const config = require("../config/config");

describe("Sorting Tests", function () {
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

  beforeEach(async function () {
    // Navigate to the products page before each test case
    await driver.get(config.appUrl);

    console.log("Logging in with valid credentials...");
    // Log in with valid credentials
    await loginHelper.login(driver, data.validCredentials.username, data.validCredentials.password);
    await new Promise(resolve => setTimeout(resolve, 3000));
  });

  it("should sort products by name (Z to A) and assert the correct order", async function () {
    console.log("Sorting products by name (Z to A)...");
    // Click the sorting dropdown
    await driver.findElement(By.css(".product_sort_container")).click();
    // Select "Name (Z to A)" option
    await driver.findElement(By.css("option[value='za']")).click();

    // Get the list of product names
    const productElements = await driver.findElements(By.css(".inventory_item_name"));
    const productNames = await Promise.all(productElements.map((element) => element.getText()));

    // Assert the correct order
    const sortedProductNames = [...productNames].sort((a, b) => b.localeCompare(a));
    assert.deepStrictEqual(productNames, sortedProductNames);
    console.log("Sorting test passed! Products are sorted in the correct order.");
  });

  it("should sort products by price (low to high) and assert the correct order", async function () {
    console.log("Sorting products by price (low to high)...");
    // Click the sorting dropdown
    await driver.findElement(By.css(".product_sort_container")).click();
    // Select "Price (low to high)" option
    await driver.findElement(By.css("option[value='lohi']")).click();

    // Get the list of product prices
    const productElements = await driver.findElements(By.css(".inventory_item_price"));
    const productPrices = await Promise.all(productElements.map((element) => element.getText()));

    // Convert prices to numbers for comparison
    const numericProductPrices = productPrices.map((price) => parseFloat(price.replace("$", "")));

    // Assert the correct order
    const sortedProductPrices = [...numericProductPrices].sort((a, b) => a - b);
    assert.deepStrictEqual(numericProductPrices, sortedProductPrices);
    console.log("Sorting test passed! Products are sorted in the correct order.");
  });

  it("should sort products by price (high to low) and assert the correct order", async function () {
    console.log("Sorting products by price (high to low)...");
    // Click the sorting dropdown
    await driver.findElement(By.css(".product_sort_container")).click();
    // Select "Price (high to low)" option
    await driver.findElement(By.css("option[value='hilo']")).click();

    // Get the list of product prices
    const productElements = await driver.findElements(By.css(".inventory_item_price"));
    const productPrices = await Promise.all(productElements.map((element) => element.getText()));

    // Convert prices to numbers for comparison
    const numericProductPrices = productPrices.map((price) => parseFloat(price.replace("$", "")));

    // Assert the correct order
    const sortedProductPrices = [...numericProductPrices].sort((a, b) => b - a);
    assert.deepStrictEqual(numericProductPrices, sortedProductPrices);
    console.log("Sorting test passed! Products are sorted in the correct order.");
  });
});