Feature: Home Page

Scenario: Verify the display of navigation bar in Home Page
    When I visit the Home Page
    Then I should see Navigation Bar and links associated with it
    And I should see Home link should be active

Scenario: Verify the display of Carousel Items on Home Page
    When I visit the Home Page
    Then I should see the moving Carousel Items
    And There should be '3' Carousel Items

Scenario: Verify the display of Executive Chef Row on Home Page
    When I visit the Home Page
    Then I should see the Executive Chef Row on Home Page
    And Executive Chef name should be 'Alberto Somayya'

Scenario: Verify the display of navigation links at bottom of Home Page
    When I visit the Home Page
    Then I should see the list of the navigation links in the bottom of home page
    And Its heading should be 'Links'
    And I should see '4' links in the list

Scenario: Verify the display of dish in Home Page
    When I visit the Home Page
    Then I should see the dish in home page
    And I should see a 'HOT' label in Red color
    And I should see a '$4.99' price tag in Grey color

Scenario: Verify the display of Login Modal in Home Page
    When I visit the Home Page
    Then I should see the Login Button in Home Page
    When I click on Login Button I should see Login Modal Open
    Then I type Username and Password
    |Username     |Password |
    |admin@xyz.com|admin@123|
    And Clicking on Sign In closes the Modal
