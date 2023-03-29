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

Scenario: Verify the display of API Error message in Menu Page
    When I visit the Home Page
    When There is an API Error
    And I click on Menu link in Navigation bar
    Then I should see the Error Message in Menu Page

Scenario: Verify the display Dish and its Image in Menu Page
    When I visit the Menu Page
    Then I should see '11' dishes in Menu Page
    And I should see image for every dish in Menu Page
