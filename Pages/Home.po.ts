import { Locator, Page } from "@playwright/test";


export class HomePage {

      static async searchInputAs( page: Page, product: string,) : Promise<void> {
        let searchInput = page.locator('#twotabsearchtextbox',);
        return await searchInput.waitFor({ state: 'visible', timeout: 10000 }).then( async () => {
       return await searchInput.fill(product); });
      }
      

      // .then(async () => {
      //     return await searchInput.fill(product);
      //   }
      // await page.waitForSelector('#twotabsearchtextbox', { state: 'visible' });
      // return await page.locator('#twotabsearchtextbox').fill(product);
    //   static async pressEnter( page: Page) : Promise<void> {
    //    return await page.locator('#twotabsearchtextbox').press('Enter');
    //  }

      static async clickSearchButton( page: Page) : Promise<void> {
        return await page.locator('#nav-search-submit-button').click();
      }

     
    
}