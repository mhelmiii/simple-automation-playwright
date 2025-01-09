import locators from '../locator/locators';
import { expect } from '@playwright/test';

export default class loginAction {
  constructor(page) {
    this.page = page;
    this.locators = new locators();

    // Login Action
    this.userName = page.locator(this.locators.inputUsername);
    this.password = page.locator(this.locators.inputPassword);
    this.buttonLogin = page.locator(this.locators.buttonLogin);

    // ATC action
    this.atcItem = page.locator(this.locators.atcBackpack);
    this.buttonCart = page.locator(this.locators.cartButton);

    // Checkout action
    this.buttonCheckout = page.locator(this.locators.checkoutButton);

    // Input buyer information action
    this.firstName = page.locator(this.locators.fieldFirstName);
    this.lastName = page.locator(this.locators.fieldLastName);
    this.postCode = page.locator(this.locators.fieldPostCode);

    // Finish order action
    this.buttonContinue = page.locator(this.locators.continueButton);
    this.buttonFinish = page.locator(this.locators.finishButton);
    this.wordingTYP = page.locator(this.locators.wordingTYP);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login() {
    await this.userName.fill('standard_user');
    await expect(this.userName).toHaveValue('standard_user');

    await this.password.fill('secret_sauce');
    await expect(this.password).toHaveValue('secret_sauce');

    await this.buttonLogin.click();
  }

  async atc() {
    await this.atcItem.click();
  }

  async clickCartButton() {
    await this.buttonCart.click();
  }

  async clickCheckoutButton() {
    await this.buttonCheckout.click();
  }

  async inputBuyerInformation() {
    await this.firstName.fill('test1');
    await expect(this.firstName).toHaveValue('test1');
    await this.lastName.fill('test2');
    await expect(this.lastName).toHaveValue('test2');
    await this.postCode.fill('11223');
    await expect(this.postCode).toHaveValue('11223');
  }

  async clickContinueButton() {
    await this.buttonContinue.click();
  }

  async clickFinishButton() {
    await this.buttonFinish.click();
  }

  async checkWordingTYP() {
    await expect(this.wordingTYP).toHaveText('Thank you for your order!');
  }
}
