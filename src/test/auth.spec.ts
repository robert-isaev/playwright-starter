import { test, expect} from '@playwright/test';

import LoginForm from '../components/LoginForm';
import SideBar from '../components/Sidebar';

test('login into existing account', async ({ page }) => {
  const loginForm = new LoginForm(page);
  const sideBar = new SideBar(page);

  const user = {
    email: 'robert.isaev@gmail.com',
    password: 'helloWorld26'
  }

  await page.goto('http://localhost:3000');

  await loginForm.emailInput.fill(user.email);
  await loginForm.passwordInput.fill(user.password);

  await loginForm.submitButton.click();

  expect(sideBar.avatar.isVisible).toBeTruthy();
});
