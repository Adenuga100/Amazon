import test from "@playwright/test";
import { HomePage } from "../Pages/Home.po";

test('Add to Cart Functionality', async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://www.amazon.com/');

    // Search for a product
    await HomePage.searchInputAs(page, 'White shirt');
    await HomePage.pressEnter(page);
    // await HomePage.clickSearchButton(page);
    // Add the first product in the search results to the cart
    await HomePage.addToCartByIndex(page, 1);
    // await page.waitForTimeout(3000);
    await HomePage.addToCartMinWindow(page);

    await HomePage.addToCartByIndex(page, 2);
    await HomePage.addToCartMinWindow(page);


    await HomePage.getTittle(page).isVisible();
    

});