///   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

And("I click on Menu link in Navigation bar", () => {
  cy.get("#Navbar ul li").eq(2).click();
});

Then("I should navigate to Menu page", () => {
  cy.url().should("contains", "menu.html");
});

And("I should see breadcrumb in Menu page", () => {
  cy.get(".breadcrumb").should("be.visible");
});

When("There is an API Error", () => {
  cy.intercept(
    {
      method: "GET",
      url: "**/api/json/v1/**",
    },
    (req) => {
      req.destroy();
    }
  );
});

Then("I should see the Error Message in Menu Page", () => {
  cy.get("#error h3").should("be.visible").should("not.be.empty");
});

Then("I should see {string} dishes in Menu Page", (totalDishes: string) => {
  cy.get("#dish")
    .find(".dish")
    .then((dish) => {
      expect(dish).have.lengthOf(parseInt(totalDishes));
    });
});

And("I should see image for every dish in Menu Page", () => {
  cy.get(".dish").each((dish) => {
    cy.wrap(dish).find(".img-thumbnail").should("be.visible");
  });
});
