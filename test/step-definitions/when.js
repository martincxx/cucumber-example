import { When } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";

const pages = {
  login: LoginPage,
};

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
