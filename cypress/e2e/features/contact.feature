Feature: Contact page

Scenario: Verify the Contact option in Home page Navigation bar
    When I Visit the Home page
    And I click on Contact link
    Then I am in Contact page

Scenario: Verify if the user is able to send feedback
    When I was in Contact page
    And I am able to see 'Send us your Feedback' text
    Then I fill the details
    |First Name|Last Name|Area code|Tel.Number|Email           |Your Feedback|
    |Anand     |Sagar    |345      |345432769 |sample@gmail.com|Food is good |
    And I click on Send Feedback

Scenario: Verify Carousel Play and Pause
    When I visit the Home page
    And I click on pause button
    Then Carousel stops moving
    And I click on play button
    Then Carousel starts moving
    