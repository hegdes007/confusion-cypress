///   <reference types="cypress" />

import { And, Then } from "@badeball/cypress-cucumber-preprocessor";

And("I click on Menu link in Navigation bar", () => {
  cy.get("#Navbar ul li").eq(2).click();
});

Then("I should navigate to Menu page", () => {
  cy.url().should("contains", "menu.html");
});

And("I should see breadcrumb in Menu page", () => {
  cy.get(".breadcrumb").should("be.visible");
});
