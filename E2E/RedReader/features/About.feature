Feature: Setup menu works

  Scenario: As a an anonymous user I should be able to navigate to the Accounts Menu
    Given I touch the "BE ANONYMOUS" text
    When I touch the menu button
    And I touch the "Settings" text
    And I touch the "About" text
    And I take a screenshot
    And I touch the "What\'s New" text
    Then I see the text "1.9.10"