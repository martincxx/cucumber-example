import { Then } from "@wdio/cucumber-framework";

import SecurePage from "../pageobjects/secure.page";

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
