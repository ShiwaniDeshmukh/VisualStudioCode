const { By } = require("selenium-webdriver");

async function addToCart(driver, itemId) {
  // Find the "Add to Cart" button and click it
  const addToCartButton = await driver.findElement(By.id(`add-to-cart-${itemId}`));
  await addToCartButton.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function getCartItems(driver) {
  // Find the cart items
  const cartItems = await driver.findElements(By.className("cart_item"));
  return cartItems;
}

async function navigateToCart(driver) {
  // Find the shopping cart icon and click it
  const shoppingCartIcon = await driver.findElement(By.className("shopping_cart_link"));
  await shoppingCartIcon.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function removeItemFromCart(driver, itemId) {
  // Find the "Remove" button for the item and click it
  const removeButton = await driver.findElement(By.id(`remove-${itemId}`));
  await removeButton.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function continueShopping(driver) {
    // Find the "Continue Shopping" button and click it
    const continueShopping = await driver.findElement(By.id("continue-shopping"));
    await continueShopping.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
}

async function getCartIconItemCount(driver) {
  // Find the cart item count displayed on the shopping cart icon
  const cartItemCountElement = await driver.findElement(By.className("shopping_cart_badge"));
  const cartItemCountText = await cartItemCountElement.getText();
  const cartItemCount = parseInt(cartItemCountText);
  return cartItemCount;
}

module.exports = {
  addToCart,
  getCartItems,
  navigateToCart,
  removeItemFromCart,
  continueShopping,
  getCartIconItemCount,
};