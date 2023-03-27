///   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

And("I click on About link", () => {
  cy.get(".nav-link").eq(1).click();
});
Then("I should be in About Page", () => {
  cy.url().should("contain", "about");
});
