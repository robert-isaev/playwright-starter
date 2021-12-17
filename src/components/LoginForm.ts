import BaseComponent from "./Base";

export default class LoginForm extends BaseComponent{
  public root = ".form-login";

  get emailInput() {
    return this.fromRoot('#signup-field-email');
  }
  get passwordInput() {
    return this.fromRoot('#signup-field-password');
  }
  get submitButton() {
    return this.fromRoot('#signup-button-submit');
  }
  get wrongPasswordError() {
    return this.fromRoot('p >> text=Incorrect username or password')
  }
  get userDoesNotExistError() {
    return this.fromRoot('p >> text=User does not exist')
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
