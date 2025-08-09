import Base from './base.page.js';

class ResultsPage extends Base {
  
  get items() { return $$('div.product-thumb h4 a'); }

  async openFirstProduct() {
   
    await browser.waitUntil(
     async () => (await this.items).length > 0,
     { timeout: 10000, timeoutMsg: 'No aparecieron resultados' }
    );

    const list = await this.items;
    try {
     await list[0].scrollIntoView();
      await list[0].click();
   } catch (e) {
     
      const iphoneLink = await $('=iPhone');      
      await iphoneLink.waitForExist({ timeout: 5000 });
      await iphoneLink.click();
   }
  }
}
export default new ResultsPage();




