Feature: Espocrm Acceptance Criteria


  Scenario: Validation of Home Page functions
    Given user navigates to EspoCrm home page
    Then user validates all functions on home page
      | Home          |
      | Accounts      |
      | Contacts      |
      | Leads         |
      | Opportunities |
      | Reports       |
      | Quotes        |
      | Sales Orders  |
      | Invoices      |
      | Products      |
      | Emails        |
      | Cases         |
      | Calendar      |
      | Tasks         |


    Scenario Outline: Account Creation
      Given user goes to Accounts and clicks create account button
      And   user provides customer info "<name>", "<webSite>", "<email>", "<phone>"
      Then  user provides address info "<street>", "<city>", "<state>", "<zip>", "<country>"
      And   user provides details
      """
      At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.
      Our boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions
      in reputed organizations.
      """
      And   user creates four new accounts and clicks save button
      Then  user validates that new users are created
      Examples:
        | name   | webSite     | email            | phone    | street         | city        | state | zip   | country |
        | David  | google.com  | david@gmail.com  | 1234567  | 2200 e devon   | Des Plains  | IL    | 60018 | USA     |
        | Murat  | amazon.com  | murat@gmail.com  | 3659854  | 6240 N bell    | Los Angelse | IL    | 60645 | USA     |
        | Makmo  | expedia.com | makmo@yahoo.com  | 65985125 | 5400 N Western | Chicago     | IL    | 60625 | USA     |
        | Patel  | kayak.com   | patel@gmail.com  | 5564895  | 1 Ocean dr     | Miami       | FL    | 56821 | USA     |
        | Harsch | apple.com   | harsch@gmail.com | 65489532 | 1100 Wall St   | New York    | NY    | 12356 | USA     |

