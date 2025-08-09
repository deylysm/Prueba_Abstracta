

class Header {
  get cartBtn() { return $('#cart > button'); }
  get viewCartLink() { return $('#cart a[href*="route=checkout/cart"]'); }

  async openCartDropdown() {
    const btn = await this.cartBtn;                         
    const id = btn.elementId || btn[ELEMENT_KEY];           
    await browser.elementClick(id);                         
  }

  async clickViewCart() {
    await this.viewCartLink.waitForExist();
    await this.viewCartLink.click();
 }

}

export default new Header();


