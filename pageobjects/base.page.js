
export default class BasePage {
  async open(path = '/') {
    await browser.url(path);
    await browser.setWindowSize(1366, 800);
  }
}



