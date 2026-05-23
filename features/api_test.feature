Feature: Justdial API Integration Tests

  Scenario: TC-01 Parse search suggestions API
    Given I send a request to search suggestion API
    Then I should get valid suggestion response

  Scenario: TC-02 Fetch car wash listings
    Given I request car wash service listings
    Then I should get valid car wash results

  Scenario: TC-03 Fetch gym subcategories
    Given I request gym subcategories
    Then I should get gym subcategory response