Feature: Justdial UI Component and CSS Validation

  Scenario: Validate page title, UI elements, and CSS properties
    Given I open the Justdial homepage
    Then I should see correct page title and logo

    When I validate search box UI properties
    Then search box CSS properties should be valid

    When I navigate to free listing form
    Then I should validate form input and error UI
