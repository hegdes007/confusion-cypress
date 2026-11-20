///   <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

// const visitWindowSection = () => {
//   cy.visit("https://playwrightlab.github.io/#frames", {
//     onBeforeLoad(win) {
//       // Intercept new tabs and popup windows
//       cy.stub(win, "open").as("windowOpen");
//     },
//   });
// };

When("I vist the Alert Page", () => {
  cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
});

Then("Handling JS Alert - Validate Alert Text and Click OK", () => {
  cy.contains("Click for JS Alert").click();
  cy.on("window:alert", (str) => {
    expect(str).to.equal("I am a JS Alert");
  });
  // cy.on("window:confirm", () => true); Alert is confirmed by default by Cypress
  cy.get("#result").should("have.text", "You successfully clicked an alert");
});

Then("Handling JS Confirm - Validate Confirm Text and Click OK", () => {
  cy.contains("Click for JS Confirm").click();
  cy.on("window:confirm", (str) => {
    expect(str).to.equal(`I am a JS Confirm`);
  });
  cy.on("window:confirm", () => true);
  cy.get("#result").should("have.text", "You clicked: Ok");
});

Then("Handling JS Confirm - Click Cancel", () => {
  cy.contains("Click for JS Confirm").click();
  cy.on("window:confirm", () => false);
  cy.get("#result").should("have.text", "You clicked: Cancel");
});

Then(
  "Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text",
  () => {
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns("This is a test text");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("have.text", "You entered: This is a test text");
  },
);

When("I vist the File Upload-Download Page", () => {
  cy.visit("https://playwrightlab.github.io/#uploads-downloads");
});

Then("I should be able to upload a file", () => {
  cy.get("#singleFileInput").selectFile(
    "cypress/e2e/files/Playwright_Cheat-Sheet.pdf",
    { force: true },
  );
  cy.get("[data-testid='file-item-Playwright_Cheat-Sheet.pdf']").should(
    "be.visible",
  );
  cy.get("#singleUploadBtn").click();
  cy.get("#singleUploadStatus").should("be.visible");
});

Then("I should be able to upload multiple files", () => {
  cy.get("#multiFileInput").selectFile(
    [
      "cypress/e2e/files/Playwright_Cheat-Sheet.pdf",
      "cypress/e2e/files/Playwright_Cheat-Sheet_copy.pdf",
    ],
    { force: true },
  );
  cy.get("[data-testid='file-item-Playwright_Cheat-Sheet.pdf']")
    .last()
    .should("be.visible");
  cy.get("[data-testid='file-item-Playwright_Cheat-Sheet_copy.pdf']").should(
    "be.visible",
  );
  cy.get("#multiUploadBtn").click();
  cy.get("#multiUploadStatus").should("be.visible");
});

Then("I should be able to download a file", () => {
  cy.get("#downloadPdfBtn").click();
  cy.readFile("cypress/e2e/files/download/Playwright-Cheat-Sheet.pdf", null, {
    timeout: 15000,
  }).should((file) => {
    expect(file.length).to.be.greaterThan(0);
  });
});

When("I vist the Window Handling Page", () => {
  // visitWindowSection();
  cy.visit("https://playwrightlab.github.io/#frames", {
    onBeforeLoad(win) {
      cy.stub(win, "open").as("windowOpen");
    },
  });
});

Then("I should be able to handle New Tab", () => {
  cy.get("#newTabBtn").click();
  cy.get("@windowOpen").should((openWindow) => {
    expect(openWindow).to.have.been.calledOnce;
    const [url, target] = openWindow.firstCall.args;
    expect(url).to.be.a("string").and.not.be.empty;
    expect(target).to.equal("_blank");
  });
});

Then("I should be able to handle Popup Window", () => {
  cy.get("#popupBtn").click();
  cy.get("@windowOpen").should((openWindow) => {
    expect(openWindow).to.have.been.calledTwice;
    const [url] = openWindow.secondCall.args;
    expect(url).to.be.a("string").and.not.be.empty;
  });
});
