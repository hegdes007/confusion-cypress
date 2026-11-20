import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure report for conFusion Cypress-Cucumber Project",
  historyPath: "./allure-history/history.jsonl",
  historyLimit: 10,

  environments: {
    chrome: {
      name: "Chrome",
      matcher: ({ labels }) =>
        labels.some((l) => l.name === "browser" && l.value === "Chrome"),
    },

    firefox: {
      name: "Firefox",
      matcher: ({ labels }) =>
        labels.some((l) => l.name === "browser" && l.value === "Firefox"),
    },

    webkit: {
      name: "WebKit",
      matcher: ({ labels }) =>
        labels.some((l) => l.name === "browser" && l.value === "WebKit"),
    },
  },
  plugins: {
    awesome: {
      options: {
        groupBy: ["parentSuite"],
      },
    },
  },
});
