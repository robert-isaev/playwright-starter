import BaseComponent from "./Base";

export default class LoginForm extends BaseComponent{
  public root = ".MuiBox-root-16";

  get emailInput() {
    return this.fromRoot('#signup-field-email');
  }
  get passwordInput() {
    return this.fromRoot('#signup-field-password');
  }
  get submitButton() {
    return this.fromRoot(`#signup-button-submit`);
  }
}
