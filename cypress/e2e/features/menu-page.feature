Feature: Menu Page

Scenario: Verify the display of navigation bar in Menu Page
    When I visit the Menu Page
    Then I should see Navigation Bar and links associated with it
    And I should see 'Menu' link should be active

Scenario: Verify the navigation to Menu Page and display of breadcrumb in Menu Page
    When I visit the Home Page
    And I click on Menu link in Navigation bar
    Then I should navigate to Menu page
    And I should see breadcrumb in Menu page
