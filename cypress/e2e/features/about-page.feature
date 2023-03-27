Feature: About Page

Scenario: Verify the About link in home page and Navigation bar in About Page
    When I visit the Home Page
    And I click on About link
    Then I should be in About Page
    Then I should see Navigation Bar and links associated with it
    And I should see 'About' link should be active