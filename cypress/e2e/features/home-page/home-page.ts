///   <reference types="cypress" />

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

Then("I should see the moving Carousel Items", () => {
  cy.get("#mycarousel").should("be.visible");
});

And("There should be {string} Carousel Items", (length, val: string) => {
  cy.get(".carousel-item").should("have.length", length);
});

Then("I should see the Executive Chef Row on Home Page", () => {
  cy.get(".row").eq(8).should("be.visible");
});

And("Executive Chef name should be {string}", (name, val: string) => {
  cy.get(".row")
    .eq(8)
    .within(() => {
      cy.get(".media-body h2").should("have.text", name);
    });
});
