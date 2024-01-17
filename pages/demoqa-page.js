import('@playwright/test');

exports.DemoQaPage = class DemoQaPage {

    /**
     * Este construtor recebe o objeto PAGE do playwright, para interagir com os elementos do browser.
     * @param Page
     */
    constructor(page) {
        this.page = page;
        this.iptNome = page.locator('#firstName');
        this.iptSobrenome = page.locator('#lastName');
        this.iptEmail = page.locator('#userEmail');
        this.iptGenero = page.locator('#gender-radio-1');
        this.iptPhone = page.locator('#userNumber');
        this.iptEndereço = page.locator('#currentAddress');
        this.btnSubmit = page.locator('#submit');
        this.btnClose = page.locator('#closeLargeModal');
    }
}