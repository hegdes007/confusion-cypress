/// <reference types="cypress" />

import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the Login Page", () => {
  cy.visit("https://mernappbrad.herokuapp.com/login");
});

And("I enter my Credentials", () => {
  cy.get("#email").type("cypress@email.com");
  cy.get("#password").type("cypress");
});
Then("I should see the Error Message", () => {
  cy.intercept(
    {
      method: "POST",
      url: "**/api/users/login",
    },
    (req) => {
      req.destroy();
    }
  );
  cy.get("button").click();
  cy.get(".Toastify__toast--error")
    .should("be.visible")
    .should("have.text", "Network Error");
});
