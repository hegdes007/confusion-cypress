import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { activeLink, link } from "../../support/pageObjects/commonObjects";

When("I visit the Home Page", () => {
  cy.visit("/");
});

When("I visit the Menu Page", () => {
  cy.visit("/menu.html");
  cy.url().should("contain", "menu.html");
});

Then("I should see Navigation Bar and links associated with it", () => {
  cy.get("#Navbar").should("be.visible");
});

And("I should see {string} link should be active", (navLink: string) => {
  activeLink(navLink);
  cy.get("#Navbar ul li").eq(link).should("have.class", "active");
});
