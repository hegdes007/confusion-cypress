Feature: Miscellaneous Page

Scenario: Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress
    When I vist the Alert Page
    Then Handling JS Alert - Validate Alert Text and Click OK
    Then Handling JS Confirm - Validate Confirm Text and Click OK
    Then Handling JS Confirm - Click Cancel
    Then Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text

Scenario: Example to demonstrate handling of File Uploads/Downloads in Cypress
    When I vist the File Upload-Download Page
    Then I should be able to upload a file
    Then I should be able to upload multiple files
    Then I should be able to download a file

Scenario: Example to demonstrate Window handling in Cypress
    When I vist the Window Handling Page
    Then I should be able to handle New Tab
    Then I should be able to handle Popup Window
