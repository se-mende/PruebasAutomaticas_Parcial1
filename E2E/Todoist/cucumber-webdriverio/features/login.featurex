Feature: Login into Todoist
    As an user I want to authenticate myself within Todoist

Scenario Outline: Login failed with wrong inputs
    Given I go to Todoist
    When I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
    | email                         | password      | error                      |
    | wrong@uniandes.edu.co         | WrongPassword | "Wrong email or password"  |

Scenario: Login works with right inputs
    Given I go to Todoist
    When I fill credentials correctly
    And I try to login
    Then I expect to enter the site