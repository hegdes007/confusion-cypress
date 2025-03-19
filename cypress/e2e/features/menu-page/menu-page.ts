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

When("I hit the API I should see API resonse status as 200", () => {
  cy.request({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian",
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

And("Check the length of the meals array", () => {
  cy.request({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian",
  }).then((response) => {
    expect(response.body).to.have.property("meals");
    expect(response.body.meals).to.be.an("array");
    const mealsArrayLength = response.body.meals.length;
    expect(mealsArrayLength).to.be.greaterThan(0);
    cy.log(`The length of the meals array is: ${mealsArrayLength}`);
  });
});
