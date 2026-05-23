Feature: Justdial End-to-End Flow

  Scenario: Complete E2E flow with free listing, car services and gym data
    Given I launch the Justdial application
    When I perform free listing flow
    Then I validate mobile number error

    When I extract car service data
    Then I should get top car services

    When I extract gym dropdown data
    Then I should get gym submenu options
