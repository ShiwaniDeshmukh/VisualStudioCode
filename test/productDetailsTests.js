const { Builder, By } = require("selenium-webdriver");
const assert = require("chai").assert;
const loginHelper = require("../helpers/loginHelper");
const data = require("../data/userCredentials");
const config = require("../config/config");

describe("Product Details Tests", function () {
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

        // Log in with valid credentials
        await loginHelper.login(driver, data.validCredentials.username, data.validCredentials.password);
        await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    it("should open the details of a product and assert the presence of key information", async function () {
        console.log("Opening the details of a product...");
        // Click on a product
        await driver.findElement(By.className("inventory_item_name")).click();

        // Assert the presence of key information (name, description, image, price)
        const productName = await driver.findElement(By.css(".inventory_details_name")).getText();
        const productDescription = await driver.findElement(By.css(".inventory_details_desc")).getText();
        const productImage = await driver.findElement(By.css(".inventory_details_img")).isDisplayed();
        const productPrice = await driver.findElement(By.css(".inventory_details_price")).getText();

        assert.isNotEmpty(productName, "Product name is not empty");
        assert.isNotEmpty(productDescription, "Product description is not empty");
        assert.isTrue(productImage, "Product image is displayed");
        assert.isNotEmpty(productPrice, "Product price is not empty");
        console.log("Product details test passed! Key information is present.");
    });

    it("should click the 'Back to Products' button and assert the redirection to the products page", async function () {
        console.log("Clicking the 'Back to Products' button...");
        // Click on a product
        await driver.findElement(By.className("inventory_item_name")).click();

        // Assert the presence of key information (name, description, image, price)
        const productName = await driver.findElement(By.css(".inventory_details_name")).getText();
        const productImage = await driver.findElement(By.css(".inventory_details_img")).isDisplayed();
        const productPrice = await driver.findElement(By.css(".inventory_details_price")).getText();

        // Click the 'Back to Products' button
        await driver.findElement(By.id("back-to-products")).click();

        // Get the current page URL
        const currentUrl = await driver.getCurrentUrl();

        // Assert the redirection to the products page
        assert.strictEqual(currentUrl, `${config.appUrl}inventory.html`);
        console.log("Back to products test passed! Successfully redirected to the products page.");
    });
});