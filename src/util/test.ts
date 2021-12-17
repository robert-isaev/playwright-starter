import { test as baseTest } from "@playwright/test";

import {home, signup} from './urls';

import LoginForm from '../components/LoginForm';
import SideBar from '../components/Sidebar';
import SignupForm from '../components/SignupForm';

export default baseTest.extend<{
  loginForm: LoginForm;
  signupForm: SignupForm;
  sidebar: SideBar;
  urls: {[key: string]: string}
}>({
  loginForm: async ({ page }, use) => {
    await use(new LoginForm(page));
  },
  signupForm: async ({ page }, use) => {
    await use(new SignupForm(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new SideBar(page));
  },
  urls: {
    home,
    signup
  }
});
