class CartPage {
  get productNames() { return $$('table tbody tr td:nth-child(2) a'); }
 
  get firstRemoveBtn() { return $('table tbody tr button.btn-danger'); }
 
  get emptyMsg() { return $('//div[@id="content"]//p[contains(.,"Your shopping cart is empty")]'); }

  async firstProductNameText() {
   const items = await this.productNames;
   if (items.length === 0) return '';
   await items[0].waitForExist({ timeout: 5000 });
   return await items[0].getText();

  
  }

  async removeFirstItem() {
   const btn = await this.firstRemoveBtn;
   await btn.waitForExist({ timeout: 10000 });
   await btn.scrollIntoView();
   await browser.pause(100);
   await browser.execute(el => el.click(), btn); 

   
  }


  async isEmpty() {
    return (await this.emptyMsg.isExisting()) && (await this.emptyMsg.isDisplayedInViewport());
  }
}

export default new CartPage();

