const { test, expect } = require('@playwright/test');
const { DemoQaPage } = require('../pages/demoqa-page');

exports.DemoQaActions = class DemoQaActions {

    constructor(page) {
        this.page = page;
    }

    /**
     * Instancia global da classe de elementos
     */
     demoqapage = new DemoQaPage();
    /**
     * Declaração de metodos que irão manipular a pagina.
     * O ideal é separar ações em metodos diferentes, mantendo o conceito de responsabilidade unica.
     */

    async gotoDemoPage() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async fillAllFields() {
        await this.demoqapage.iptNome.fill('Teste');
        await this.demoqapage.iptSobrenome.fill('TesteSobrenome');
        await this.demoqapage.iptEmail.fill('test@test.com.br');
        await this.demoqapage.iptEndereço.fill('AAAAAAAAAAAAAAAAAAAAaaaaAAAAAAA');
        await this.demoqapage.iptPhone.fill('5599988822');
        await this.demoqapage.iptGenero.click();
    }

    async checkSubmitButton() {
        await this.demoqapage.btnSubmit.click();
        expect(this.demoqapage.btnClose).toBeEnabled();
    }

}