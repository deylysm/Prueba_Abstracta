import HomePage from '../pageobjects/home.page.js';
import ResultsPage from '../pageobjects/results.page.js';
import ProductPage from '../pageobjects/product.page.js';
import CartPage from '../pageobjects/cart.page.js';
import Header from '../pageobjects/header.component.js';



describe('UI Automation - OpenCart', () => {
  it('Buscar iPhone, agregar al carrito, validar, remover y validar vacío', async () => {
    // 1. Abrir web
    await HomePage.open('/');

    // 2. Buscar "iPhone"
    await HomePage.search('iPhone');

    // 3. Seleccionar la primera opción que aparezca
    /*await ResultsPage.openFirstProduct();*/
    // Debug: abrir el iPhone por texto de enlace (parcial)
await $('a*=iPhone').waitForExist({ timeout: 15000 });
console.log('➡️  Resultados cargaron, abriendo iPhone…');
await $('a*=iPhone').click();


    // 4. Agregar el producto al carrito
    await ProductPage.addToCart();

    // 5. Ir al botón del carrito
    await Header.openCartDropdown();

    // 6. Presionar "View Cart"
    await Header.clickViewCart();

    // (Opcional) screenshot informativo
    await browser.saveScreenshot('./screenshots/cart_view.png');

    // 7. Validar que el iPhone esté en el carrito
    const name = await CartPage.firstProductNameText();
    await expect(name).toContain('iPhone');

    // 8. Remover el iPhone del carrito
    await CartPage.removeFirstItem();

    // 9. Validar que el carrito ya no contiene el iPhone (está vacío)
    await browser.waitUntil(async () => await CartPage.isEmpty(), {
      timeout: 10000,
      timeoutMsg: 'El carrito no quedó vacío a tiempo',
    });
    await expect(await CartPage.isEmpty()).toBe(true);

    // (Opcional) screenshot final
    await browser.saveScreenshot('./screenshots/cart_empty.png');
  });
});


