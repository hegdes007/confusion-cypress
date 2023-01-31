Feature: Home Page

Scenario: Verify the display of navigation bar in Home Page
    When I visit the Home Page
    Then I should see Navigation Bar and links associated with it
    And I should see Home link should be active

Scenario: Verifythe display of Carousel Items on Home Page
    When I visit the Home Page
    Then I should see the moving Carousel Items
    And There should be '3' Carousel Items
