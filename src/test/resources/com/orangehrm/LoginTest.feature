Feature: OrangeHrm Regression Test
  @login
  Scenario: Login and Admin Functionality Test
    Given user navigates to "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    Then user logs in with correct userName "Admin" and password "admin123"
    When user clicks Admin function and first check box
    Then user validates all check boxes are selected
    And  user double clicks on top of user name and validates user names are listed descending order

    @add
  Scenario: Add Employee Information Test
    Given user navigates to "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    Then user logs in with correct userName "Admin" and password "admin123"
    When user clicks Admin function
    Then user clicks Add button selects user role  and employee name "Fiona Grace"
    And  user enters name "Murat" selects status and enters password "Techtorial2020" then confirms password "Techtorial2020"
    Then user click save button and validates message "Successfully Saved"

  @search
  Scenario: Search Functionality Test
    Given user navigates to "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    Then user logs in with correct userName "Admin" and password "admin123"
    Then   user clicks Admin function
    When user searches with recently saved user name "Murat" and validates that only one user is displayed 1
    Then user validates user name "Murat" user role "Admin" employee name "Fiona Grace" and user status "Disabled"
    And  user clicks on top of user name and edit button
    And  user changes status and validates "Successfully Updated" message
    Then user again searches with user name "Murat" and validates status is updated "Disabled"

    @delete
    Scenario: Delete Functionality Test
      Given user navigates to "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
      Then user logs in with correct userName "Admin" and password "admin123"
      Then   user clicks Admin function
      When user searches with recently saved user name "Murat" and clicks users check box then clicks delete button
      And user validates pop up and  "Successfully Deleted" message is displayed
      Then user searches with user name "Murat" and validates  "No Records Found" message





