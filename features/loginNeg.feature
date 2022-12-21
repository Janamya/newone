Feature: Trello Application Website

Scenario Outline: As a user, I cannot login with invalid credentials

    Given I am on the login page
    When I login with email and <password>
    Then I should see error message

    Examples:
     |password|
     |"Avi"|