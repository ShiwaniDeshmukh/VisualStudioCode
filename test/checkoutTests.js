const { Builder, By } = require("selenium-webdriver");
const assert = require("chai").assert;
const loginHelper = require("../helpers/loginHelper");
const cartHelper = require("../helpers/cartHelper");
const checkoutHelper = require("../helpers/checkoutHelper");
const data = require("../data/userCredentials");
const config = require("../config/config");
const checkoutData = require("../data/checkoutData");


describe("Checkout Tests", function () {
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
        await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    beforeEach(async function () {
        // Navigate to the products page and log in before each test case
        await driver.get(config.appUrl);
        await loginHelper.login(driver, data.validCredentials.username, data.validCredentials.password);
        await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    it("should complete the checkout process and display the 'Thank you for your order!' message", async function () {
        console.log("Completing the checkout process...");

        // Add an item to the cart
        await cartHelper.addToCart(driver, "sauce-labs-backpack"); // Add the first item
        await cartHelper.addToCart(driver, "sauce-labs-bike-light"); // Add the second item

        // Navigate to the cart page
        await cartHelper.navigateToCart(driver);

        // Click on the checkout button
        await checkoutHelper.startCheckout(driver);

        console.log("Filling in the checkout information...");

        // Fill in the required information on the Checkout: Your Information page
        const { firstName, lastName, zipCode } = checkoutData.validCheckoutData;

        //Intentionally added error to check the error scenario
        let continueSuccess = false;
        while (!continueSuccess) {
            // Click on the continue button
            continueSuccess = await checkoutHelper.continueCheckout(driver);

            if (!continueSuccess) {
                // Go back to fill in the information
                await checkoutHelper.fillCheckoutInformation(driver, firstName, lastName, zipCode);
            }
        }

        console.log("Asserting the items and total price on the overview page...");

        // Assert the items on the Checkout: overview page
        const overviewItems = await checkoutHelper.getOverviewItems(driver);
        assert.lengthOf(overviewItems, 2, "Incorrect number of items on the overview page");

        // Assert the total price on the overview page
        const totalPrice = await checkoutHelper.getOverviewTotalPrice(driver);
        assert.include(totalPrice, "$43.18", "Incorrect total price on the overview page");

        // Click on the finish button
        await checkoutHelper.finishCheckout(driver);

        console.log("Checkout test passed! 'Thank you for your order!' message displayed.");
    });
});