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

Scenario: Verify the display of Weekned Grand Buffet NEW on Home Page
     When I visit the Home Page
     Then I should see the Weekned Grand Buffet NEW on Home Page
     And Background Color for NEW should be "rgb(220, 53, 69)"
     
