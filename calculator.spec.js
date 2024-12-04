const { test, expect } = require('@playwright/test');

test.describe('Calculator Functionality Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('file:/C:/Users/alann/AlanTesting/index.html');
    });
   //Basic operations scenario (+, -, /, *)
    test('Basic arithmetic operations', async ({ page }) => {
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '×' }).click();
        await page.getByRole('button', { name: '3' }).click();
        await page.getByRole('button', { name: '÷' }).click();
        await page.getByRole('button', { name: '2' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '3' }).click();
        await page.getByRole('button', { name: '+' }).click();
        await page.getByRole('button', { name: '5' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const resultBasicOperation = await page.locator('#result').textContent();
        expect(resultBasicOperation).toEqual('17');
    });

    // Test complex calculations with parentheses scenario
    test('Complex calculations with parentheses', async ({ page }) => {
        await page.getByRole('button', { name: '(' }).click();
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '3' }).click();
        await page.getByRole('button', { name: ')' }).click();
        await page.getByRole('button', { name: '×' }).click();
        await page.getByRole('button', { name: '(' }).click();
        await page.getByRole('button', { name: '2' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '-' }).click();
        await page.getByRole('button', { name: '9' }).click();
        await page.getByRole('button', { name: ')' }).click();
        await page.getByRole('button', { name: '=' }).click();;

        const resultComplex = await page.locator('#result').textContent();
        expect(resultComplex).toEqual('77');
    });

    // division by zero scenario
    test('Division by zero', async ({ page }) => {
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '÷' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const divbyZero = await page.locator('#result').textContent();
        expect(divbyZero).toContain('Invalid Expression');
    });

    // invalid expression test scenario

    test('Invalid expression', async ({ page }) => {
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '+' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const invalidExpResult = await page.locator('#result').textContent();
        expect(invalidExpResult).toContain('Invalid Expression');
    });

    // Test UI interactions and history functionality scenarios
    test('UI interactions and history functionality', async ({ page }) => {
        // Initial calculation scenario
        await page.getByRole('button', { name: '1' }).click();
        await page.getByRole('button', { name: '0' }).click();
        await page.getByRole('button', { name: '÷' }).click();
        await page.getByRole('button', { name: '2' }).click();
        await page.getByRole('button', { name: '=' }).click();

        const initResult = await page.locator('#result').textContent();
        expect(initResult).toEqual('5');

        // Check history scenario
        const historyItem = await page.locator('.history-item').first();
        const historyText = await historyItem.textContent();
        expect(historyText).toContain('10/2 = 5');

        // Select history item scenario
        await historyItem.click();
        const expressionFromHistory = await page.locator('#expression').textContent();
        expect(expressionFromHistory).toEqual('10/2');
    });
});
