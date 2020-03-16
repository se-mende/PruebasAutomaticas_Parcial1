Feature: Navigate and use config section
    As an user I want to authenticate myself within Todoist and navigate to config section

Scenario: Navigate to config
    Given I go to Todoist and authenticate
    When I click on config
    And I click on settings
    Then I expect to see the settings page

Scenario: Navigate to themes
    Given I go to Todoist and authenticate
    When I click on config
    And I click on themes
    Then I expect to see the themes page