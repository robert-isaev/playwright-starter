import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "src/features",
  timeout: 10000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    video: "off",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
};

export default config;
