const { test, expect } = require('@playwright/test');
const { DemoQaActions } = require('../actions/demoqa-actions');

test.describe('Valida formulario', () => {

    test.beforeAll(async ({ page }) => {

        const demoQaActions = new DemoQaActions(page);

        await demoQaActions.gotoDemoPage();
    });

    test('Preenche campos e checa o submit', async ({ page }) => {

        const demoQaActions = new DemoQaActions(page)

        await demoQaActions.fillAllFields();
        await demoQaActions.checkSubmitButton();
    })

});