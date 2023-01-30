// /   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Home Page", () => {
  cy.visit("/index.html");
});

Then("I should see Navigation Bar and links associated with it", () => {
  cy.get("#Navbar").should("be.visible");
});

And("I should see Home link should be active", () => {
  cy.get("#Navbar ul li").eq(0).should("have.class", "active");
});
