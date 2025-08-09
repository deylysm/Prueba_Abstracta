import BasePage from './base.page.js';

class HomePage extends BasePage {
  get searchInput() { return $('#search input[name="search"]'); }
  get searchBtn()   { return $('#search button'); }

  async search(term) {
   await this.searchInput.setValue(term);
    await this.searchBtn.click();
  }
}

export default new HomePage();


