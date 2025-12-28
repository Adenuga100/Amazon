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

     
    
}