Feature: Navigate and create task
    As an user I want to authenticate myself within Todoist and see/insert/update/delete tasks

Scenario: Navigate to Today
    Given I go to Todoist and authenticate
    When I go to Today
    Then I expect to see Today section

Scenario: Create new task
    Given I go to Todoist and authenticate
    When I click on the plus button
    And I type a new task
    And I click on create new task
    And I navigate to Inbox
    Then I expect to see the new task