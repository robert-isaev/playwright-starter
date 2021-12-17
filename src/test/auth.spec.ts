import { test, expect} from '@playwright/test';

import LoginForm from '../components/LoginForm';
import SideBar from '../components/Sidebar';
import SignupForm from '../components/SignupForm';

const home = 'http://localhost:3000';
const signup = `${home}/signUp`;

const newUser = {
  email: `testuser-${Date.now()}@nonexistingadress.com`,
  password: 'helloWorld13'
}

const existingUser = {
  email: 'robert.isaev@gmail.com',
  password: 'helloWorld26'
}

test('user can sign up', async ({page}) => {
  const signupForm = new SignupForm(page);
  const sidebar = new SideBar(page);

  await page.goto(signup);

  await signupForm.emailInput.fill(newUser.email);
  await signupForm.passwordInput.fill(newUser.password);
  await signupForm.submitButton.click();

  await page.waitForNavigation();

  await expect(sidebar.avatar).toBeVisible();
});

test('user can sign in', async ({ page }) => {
  const {email, password} = existingUser;

  const loginForm = new LoginForm(page);
  const sideBar = new SideBar(page);

  await page.goto(home);

  await loginForm.login(email, password);

  await expect(sideBar.avatar).toBeVisible();
});

test('login errors', async ({page}) => {
  const {email, password} = existingUser;

  const loginForm = new LoginForm(page);

  await page.goto(home);

  await loginForm.login(email, 'wrongPassword13');
  await expect(loginForm.wrongPasswordError).toBeVisible();

  await loginForm.login('emailnotexists@wofooooo.com', password);
  await expect(loginForm.userDoesNotExistError).toBeVisible();
});
