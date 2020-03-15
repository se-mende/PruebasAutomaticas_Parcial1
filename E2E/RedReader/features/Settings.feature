Feature: Setup menu works

  Scenario: As a an anonymous user I should be able to navigate to the Accounts Menu
    Given I touch the "BE ANONYMOUS" text
    When I touch the menu button
    And I wait
    And I touch the "Account" text
    Then I see the text "Reddit Accounts"

  Scenario: As a an anonymous user I should be able to navigate to the Themes Menu
    Given I touch the "Close" text
    When I touch the menu button
    And I wait
    And I touch the "Themes" text
    Then I see the text "Ultra Black"