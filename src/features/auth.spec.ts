import test from "../util/test";
import { expect } from "@playwright/test";
import { generateNewUser, getExistingUser } from "../util/users";

test.describe("auth", () => {
  test("user can sign up", async ({ page, signupForm, sidebar, urls }) => {
    const { email, password } = generateNewUser();

    await page.goto(urls.signup);

    await signupForm.emailInput.fill(email);
    await signupForm.passwordInput.fill(password);
    await signupForm.submitButton.click();

    await page.waitForNavigation();

    await expect(sidebar.avatar).toBeVisible();
  });

  test("user can sign in", async ({ page, loginForm, sidebar, urls }) => {
    const { email, password } = getExistingUser();

    await page.goto(urls.home);

    await loginForm.login(email, password);

    await expect(sidebar.avatar).toBeVisible();
  });

  test("login errors", async ({ page, loginForm, urls }) => {
    const { email, password } = getExistingUser();

    await page.goto(urls.home);

    await loginForm.login(email, "wrongPassword13");
    await expect(loginForm.wrongPasswordError).toBeVisible();

    await loginForm.login("emailnotexists@wofooooo.com", password);
    await expect(loginForm.userDoesNotExistError).toBeVisible();
  });
});
