# Cypress + Cucumber – ConFusion

UI and API automation testing of the ConFusion Bootstrap application using Cypress, TypeScript and Cucumber.

The project integrates BDD-style testing with browser automation to cover different application scenarios, including UI interactions, API requests, browser dialogs, file handling and window management.

# Features

- Cypress with Cucumber (BDD)
- Cross-browser testing (Chrome, Firefox and WebKit)
- UI testing of the ConFusion application
- API testing using cy.request() & API request interception using cy.intercept()
- Handling JavaScript Alerts, Confirms and Prompts
- File upload and download handling
- New Tab and Popup Window handling
- Allure HTML reporting with Browser-wise test environment reporting
- GitHub Actions CI/CD integration
- Automated report deployment to GitHub Pages

# Tech Stack

- Cypress
- TypeScript
- Cucumber (@badeball/cypress-cucumber-preprocessor)
- esbuild
- Allure Report
- GitHub Actions
- GitHub Pages

# Project Structure

```text
  confusion-cypress/
  │
  ├── .github/
  │ └── workflows/      # GitHub Actions workflows
  │
  ├── cypress/
  │ └── e2e/
  │ ├── common/         # Common step definitions
  │ │
  │ ├── features/       # Cucumber feature files
  │ │
  │ └── files/          # Files for Uplodad test
  │  └── download/      # Downloaded files
  │
  ├── allurerc.mjs      # Allure report configuration
  ├── cypress.config.ts # Cypress configuration
  ├── package.json      # Dependencies and npm scripts
  ├── package-lock.json
  ├── tsconfig.json     # TypeScript configuration
  └── README.md
```

# Getting Started

Prerequisites
Node.js and npm
Google Chrome
Mozilla Firefox
Git

# Clone the repository

```bash
git clone https://github.com/hegdes007/confusion-cypress.git

cd confusion-cypress
```

# Install dependencies

Install all project dependencies using the committed package-lock.json:

```bash
npm ci
```

Verify Cypress installation

Cypress is installed as a project dependency. Verify that its binary is available:

```bash
npx cypress verify
```

# Install WebKit

Install the WebKit browser required for Cypress WebKit testing:

```bash
npm run install-webkit
```

# Running Tests

Open Cypress Test Runner

Launch Cypress in interactive GUI mode:

```bash
npm run cypress
```

Run tests in individual browsers

Run the complete Cypress test suite in Chrome:

```bash
npm run cy:chrome
```

Run the complete Cypress test suite in Firefox:

```bash
npm run cy:firefox
```

Run the complete Cypress test suite in WebKit:

```bash
npm run cy:webkit
```

Run tests across all three browsers

Execute the complete test suite sequentially in Chrome, Firefox and WebKit:

```bash
npm run cy:run-all
```

The execution continues even if a browser test run fails, allowing the remaining browsers to execute.

# Allure Reporting

The project uses Allure for detailed HTML test reporting.

Allure reports include:

Test execution summary
Passed, failed and skipped test cases
Browser-wise test environments
Feature and scenario details
Step-by-step execution details
Test execution history
Generate Allure HTML Report

After executing the tests, generate the HTML report:

```bash
npm run allure-report
```

The generated report is available in:

```text
allure-report/
```

Allure History

The project maintains test execution history using:

```javascript
historyPath: "./allure-history/history.jsonl",
historyLimit: 10
```

The latest 10 report-history entries are retained across executions.

# GitHub Actions – CI/CD

The project uses GitHub Actions to automate cross-browser test execution.

The workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Installs WebKit dependencies.
5. Restores previous Allure history from the gh-pages branch.
6. Executes Cypress tests in Chrome, Firefox and WebKit sequentially.
7. Generates a consolidated Allure HTML report.
8. Updates the Allure execution history.
9. Deploys the generated report to the gh-pages branch.

No GitHub Actions artifacts are uploaded or retained. The report and its history are maintained directly in the gh-pages branch.

# Test Report

View the consolidated Allure HTML report: https://hegdes007.github.io/confusion-cypress/

The report provides browser-wise test results for Chrome, Firefox and WebKit, along with historical execution details.

# Repository

GitHub – confusion-cypress - https://github.com/hegdes007/confusion-cypress
