Feature: Home Screen links

  Scenario: As a an anonymous user I should be able to navigate to the Front Page
    Given I touch the "BE ANONYMOUS" text
    When I touch the "Front Page" text
    Then I wait for 3 seconds
    Then I see the text "Front Page"

    Scenario: As a an anonymous user I should be able to navigate to the All Subreddits page
    Given I touch the "Close" text
    When I touch the "All Subreddits" text
    Then I wait for 3 seconds
    Then I see the text "All Subreddits"

    Scenario: As a an anonymous user I should be able see divider Subscribed Subreddits
    Then I take a screenshot
    Then I see the text "Subscribed Subreddits"
