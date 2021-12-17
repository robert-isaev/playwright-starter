import { Page } from "@playwright/test";

export default abstract class BaseComponent {
    abstract root: string;
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    fromRoot(locator: string): string {
        return `${this.root} ${locator}`
    }
}