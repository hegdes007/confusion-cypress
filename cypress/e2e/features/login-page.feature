Feature: Login Page

Scenario: Verify the display of Error Message
    When I visit the Login Page
    And I enter my Credentials
    Then I should see the Error Message
