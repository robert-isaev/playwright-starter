import test from "../util/test";
import { expect } from "@playwright/test";
import { generateNewUser } from "../util/users";

test.describe("auth", () => {
  let { email, password } = generateNewUser();

  test("user can sign up", async ({ page, signupForm, sidebar, urls }) => {
    await page.goto(urls.signup);

    await signupForm.emailInput.fill(email);
    await signupForm.passwordInput.fill(password);
    await signupForm.submitButton.click();

    await page.waitForNavigation();

    await expect(sidebar.avatar).toBeVisible();
  });

  test("user can sign in", async ({ page, loginForm, sidebar, urls }) => {
    await page.goto(urls.home);

    await loginForm.login(email, password);

    await expect(sidebar.avatar).toBeVisible();
  });

  test("login negative test", async ({ page, loginForm, urls }) => {
    await page.goto(urls.home);

    await loginForm.login(email, "wrongPassword13");
    await expect(loginForm.wrongPasswordError).toBeVisible();

    await loginForm.login("emailnotexists@wofooooo.com", password);
    await expect(loginForm.userDoesNotExistError).toBeVisible();
  });
});
