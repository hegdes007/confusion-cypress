///   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the moving Carousel Items", () => {
  cy.get("#mycarousel").should("be.visible");
});

And("There should be {string} Carousel Items", (length: string) => {
  cy.get(".carousel-item").should("have.length", length);
});

Then("I should see the Executive Chef Row on Home Page", () => {
  cy.get(".row").eq(8).should("be.visible");
});

And("Executive Chef name should be {string}", (name: string) => {
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

And("Its heading should be {string}", (links: string) => {
  cy.get(".offset-1 h5").should("have.text", links);
});

And("I should see {string} links in the list", (number: string) => {
  cy.get(".list-unstyled").children().should("have.length", number);
});

Then("I should see the dish in home page", () => {
  cy.get(".row").eq(6).should("be.visible");
});

And("I should see a {string} label in Red color", (label: string) => {
  cy.get(".row .badge-danger")
    .eq(2)
    .should("be.visible")
    .should("have.text", label)
    .should("have.css", "background-color", "rgb(220, 53, 69)");
});

And("I should see a {string} price tag in Grey color", (price: string) => {
  cy.get(".row .badge-secondary")
    .should("be.visible")
    .should("have.text", price)
    .should("have.css", "background-color", "rgb(108, 117, 125)");
});

Then("I should see the Login Button in Home Page", () => {
  cy.get("#loginButton").should("be.visible");
});

When("I click on Login Button I should see Login Modal Open", () => {
  cy.get("#loginButton").click();
  cy.get(".modal-dialog").should("be.visible");
});

Then("I type Username and Password", (dataTable: any) => {
  cy.get("#exampleInputEmail3").type(dataTable.rawTable[1][0]);
  cy.get("#exampleInputPassword3").type(dataTable.rawTable[1][1]);
});

And("Clicking on Sign In closes the Modal", () => {
  cy.get(".btn-primary").eq(0).click();
  cy.get(".modal-dialog").should("not.be.visible");
});

Then("I should see the Reserve Table Button in Home Page", () => {
  cy.get("#reserveButton").should("be.visible");
});

When(
  "I click on Reserve Table Button I should see Reserve Table Modal Open",
  () => {
    cy.get("#reserveButton").click();
    cy.get(".modal-dialog").should("be.visible");
  }
);

Then("I should click to choose the Number Of Guests", () => {
  cy.get(".row")
    .eq(1)
    .within(() => {
      cy.get(".form-group").should("be.visible");
      cy.get("#1").click();
    });
});

And("I should type the Date and Time", (dataTable: any) => {
  cy.get("#date.form-control").type(dataTable.rawTable[1][0]);
  cy.get("#time.form-control").type(dataTable.rawTable[1][1]);
});

And("Clicking on Reserve closes the Reserve Table Modal", () => {
  cy.get(".btn-primary").eq(1).click();
  cy.get(".modal-dialog").should("not.be.visible");
});
