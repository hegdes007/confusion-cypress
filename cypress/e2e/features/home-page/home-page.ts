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

Then(
  "I should see the list of the navigation links in the bottom of home page",
  () => {
    cy.get(".offset-1").should("be.visible");
  }
);

And("Its heading should be {string}", (name, val: string) => {
  cy.get(".offset-1 h5").should("have.text", name);
});

And("I should see {string} links in the list", (number, val: string) => {
  cy.get(".list-unstyled").children().should("have.length", number);
});

Then("I should see the dish in home page", () => {
  cy.get(".row").eq(6).should("be.visible");
});

And("I should see a {string} label in Red color", (label, val: string) => {
  cy.get(".row .badge-danger")
    .eq(2)
    .should("be.visible")
    .should("have.text", label)
    .should("have.css", "background-color", "rgb(220, 53, 69)");
});

And("I should see a {string} price tag in Grey color", (price, val: string) => {
  cy.get(".row .badge-secondary")
    .should("be.visible")
    .should("have.text", price)
    .should("have.css", "background-color", "rgb(108, 117, 125)");
});
