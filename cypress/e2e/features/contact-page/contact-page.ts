/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Conatct Page", () => {
  cy.visit("/contactus.html");
});

Then(
  "I should see the heading {string} in Contact Page",
  (heading, val: string) => {
    cy.get("h3").eq(0).should("be.visible").should("have.text", heading);
  }
);
