import { Locator, Page } from "@playwright/test";


export class SearchPage {


      static async clickAddToCartByIndex( page: Page, index: number) : Promise<void> {
       return await page.locator('[type="button"][id*="a-autoid"]').filter({hasText: 'Add to cart'}).nth(index).click();
         
      //   let addtocart = page.getByRole('button', { name: 'Add to cart' });
      //    await addtocart.click();
         // return await page.locator('text=Add to Cart').nth(index).click();
         //return await page.getByText('Add to Cart').nth(index).click();
         // return await page.locator('#a-autoid-${`index`}-announce').click({timeout: 60000});
         // let addToCart = page.getByRole('button', { name: 'Add to cart' });
         //  return await addToCart.click();
      }

    static async clickAddToCartOnPopUpWindow( page: Page) : Promise<void> {
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