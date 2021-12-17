import { test, expect} from '@playwright/test';

import LoginForm from '../components/LoginForm';
import SideBar from '../components/Sidebar';

test('basic test', async ({ page }) => {
  const loginForm = new LoginForm(page);
  const sideBar = new SideBar(page);

  const user = {
    email: 'robert.isaev@gmail.com',
    password: 'helloWorld'
  }

  await page.goto('http://localhost:3000');

  await page.fill(loginForm.emailInput, user.email);
  await page.fill(loginForm.passwordInput, user.password);

  await page.click(loginForm.submitButton);

  expect(page.locator(sideBar.avatar).isVisible).toBeTruthy();
});