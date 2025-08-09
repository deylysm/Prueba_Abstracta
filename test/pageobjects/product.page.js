
class ProductPage {
 get addToCartBtn() { return $('#button-cart'); }

  async addToCart() {
    await this.addToCartBtn.waitForExist();
    await this.addToCartBtn.click();
  }
}

export default new ProductPage();






