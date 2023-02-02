///   <reference types="cypress" />

<<<<<<< Updated upstream
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
=======
import { And, DataTable, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";
>>>>>>> Stashed changes

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

Then("I should see the list of the links", () => {
  cy.get(".list-unstyled").should("be.visible");
});

And("I should see the name {string}", (name, val: string) => {
  cy.get(".row").eq(9).within(() => {
    cy.get(".col-4.offset-1.col-sm-2 h5").should("have.text", name);
  });
});

Then("I should see the Reserve Table Button in Home Page", () => {
  cy.get("#reserveButton").should("be.visible");
});

When("I click on Reserve Table Button I should see Reserve Modal Open", () => {
  cy.get("#reserveButton").click();
  cy.get(".modal-dialog").should("be.visible");
});

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

And("Clicking on Reserve closes the Modal", () => {
    cy.get(".btn-primary").eq(1).click();
    cy.get(".modal-dialog").should("not.be.visible");
  });