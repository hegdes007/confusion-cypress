///   <reference types="cypress" />

import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I click on About link", () => {
  cy.get(".nav-link").eq(1).click();
});

Then("I should be in About Page", () => {
  cy.url().should("contain", "about");
});

Then("I should see {string} heading", (heading: string) => {
  cy.get(".row-content h2")
    .eq(1)
    .should("be.visible")
    .should("have.text", heading);
});

Then("I should see {string} leaders name", (count: string) => {
  cy.get("#accordion .card").should("be.visible").should("have.length", count);
});
