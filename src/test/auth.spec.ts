import { test, expect} from '@playwright/test';

import LoginForm from '../components/LoginForm';
import SideBar from '../components/Sidebar';

const home = 'http://localhost:3000';

const existingUser = {
  email: 'robert.isaev@gmail.com',
  password: 'helloWorld26'
}

test('login into existing account', async ({ page }) => {
  const {email, password} = existingUser;

  const loginForm = new LoginForm(page);
  const sideBar = new SideBar(page);

  await page.goto(home);

  await loginForm.login(email, password);

  expect(sideBar.avatar.isVisible).toBeTruthy();
});

test('login errors', async ({page}) => {
  const {email, password} = existingUser;

  const loginForm = new LoginForm(page);

  await page.goto(home);

  await loginForm.login(email, 'wrongPassword13');
  expect(loginForm.wrongPasswordError.isVisible).toBeTruthy();

  await loginForm.login('emailnotexists@wofooooo.com', password);
  expect(loginForm.userDoesNotExistError.isVisible).toBeTruthy();
});
