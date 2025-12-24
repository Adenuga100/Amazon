import { Locator, Page } from "@playwright/test";


export class HomePage {

      static async searchInputAs( page: Page, product: string) : Promise<void> {
       return await page.locator('#twotabsearchtextbox').fill(product);
      }

      static async pressEnter( page: Page) : Promise<void> {
       return await page.locator('#twotabsearchtextbox').press('Enter');
     }

      static async clickSearchButton( page: Page) : Promise<void> {
        return await page.locator('#nav-search-submit-button').click();
      }

      static async addToCartByIndex( page: Page, index: number) : Promise<void> {
       return await page.locator('[type="button"][id*="a-autoid"]').filter({hasText: 'Add to cart'}).nth(index).click();
         
      //   let addtocart = page.getByRole('button', { name: 'Add to cart' });
      //    await addtocart.click();
         // return await page.locator('text=Add to Cart').nth(index).click();
         //return await page.getByText('Add to Cart').nth(index).click();
         // return await page.locator('#a-autoid-${`index`}-announce').click({timeout: 60000});
         // let addToCart = page.getByRole('button', { name: 'Add to cart' });
         //  return await addToCart.click();
      }

    static async addToCartMinWindow( page: Page) : Promise<void> {
      let addToCart = page.getByRole('button', { name: 'Add to cart' });
      return await addToCart.click();
      
      // while(true) {
      //    if( await addToCart.isVisible) {

      //     return await addToCart.click();
      //       break;
      //    }
         
      // }

   //    await addToCart.waitFor({ state: 'visible', timeout: 10000 });
   //   await addToCart.click();
       

   }

   static getTittle( page: Page) : Locator {
     return page.locator('.a-row a-size-base');
   }
    
}