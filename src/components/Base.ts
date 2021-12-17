import { Locator, Page } from "@playwright/test";

export default abstract class BaseComponent {
  abstract root: string;
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  fromRoot(locator: string): Locator {
    return this.page.locator(`${this.root} ${locator}`);
  }
}
