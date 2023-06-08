const { Builder, By } = require("selenium-webdriver");
const assert = require("chai").assert;
const loginHelper = require("../helpers/loginHelper");
const cartHelper = require("../helpers/cartHelper");
const data = require("../data/userCredentials");
const config = require("../config/config");
const checkoutHelper = require("../helpers/checkoutHelper");

describe("Cart Tests", function () {
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

    it("should add multiple items to the cart, assert their presence, assert the correct count displayed on the shopping cart icon, and remove an item", async function () {
        console.log("Adding multiple items to the cart...");

        // Add multiple items to the cart
        await cartHelper.addToCart(driver, "sauce-labs-backpack"); // Add the first item
        await cartHelper.addToCart(driver, "sauce-labs-bike-light"); // Add the second item
        await cartHelper.addToCart(driver, "sauce-labs-bolt-t-shirt"); // Add the third item

        // Assert the count displayed on the shopping cart icon matches the actual item count
        const cartIconItemCount = await cartHelper.getCartIconItemCount(driver);
        assert.strictEqual(cartIconItemCount, 3, "Incorrect item count displayed on the shopping cart icon");

        console.log("Multiple items were added to the shopping cart. Asserting the count and presence...");

        // Navigate to the cart page
        await cartHelper.navigateToCart(driver);

        // Assert the presence of added items on the cart page
        const cartPageItems = await cartHelper.getCartItems(driver);
        assert.lengthOf(cartPageItems, 3, "Incorrect number of items on the cart page");

        // Remove an item from the cart
        await cartHelper.removeItemFromCart(driver, "sauce-labs-backpack");

        // Click on Continue Shopping button to add one more item
        await cartHelper.continueShopping(driver);

        await cartHelper.addToCart(driver, "sauce-labs-onesie"); // Add the another item

        // Navigate to the cart page
        await cartHelper.navigateToCart(driver);
        
        // Assert the item is no longer present in the cart
        const updatedItems = await cartHelper.getCartItems(driver);
        assert.lengthOf(updatedItems, 3, "Item was not removed from the cart");

        console.log("Cart test passed! Multiple items were added to the shopping cart, count was asserted, and an item was removed.");
    });

});