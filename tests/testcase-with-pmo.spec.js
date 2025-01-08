const { test, expect } = require('@playwright/test');
const { default: actions } = require('./spec/actions/actions');

test('login with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
});

test('atc and click cart button with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
});

test('click cart button with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
});

test('click checkout button on cart page with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
  await object.clickCheckoutButton();
});

test('input buyer information with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
  await object.clickCheckoutButton();
  await object.inputBuyerInformation();
});

test('click continue button with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
  await object.clickCheckoutButton();
  await object.inputBuyerInformation();
  await object.clickContinueButton();
});

test('click finish button with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
  await object.clickCheckoutButton();
  await object.inputBuyerInformation();
  await object.clickContinueButton();
  await object.clickFinishButton();
});

test('check wording thank you on typ with PMO', async ({ page }) => {
  const object = new actions(page);

  await object.goto();
  await object.login();
  await object.atc();
  await object.clickCartButton();
  await object.clickCheckoutButton();
  await object.inputBuyerInformation();
  await object.clickContinueButton();
  await object.clickFinishButton();
  await object.checkWordingTYP();
});
