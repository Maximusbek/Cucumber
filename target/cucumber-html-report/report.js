$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.espocrm/espocrm.feature");
formatter.feature({
  "name": "Espocrm Acceptance Criteria",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of Home Page functions",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user navigates to EspoCrm home page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_navigates_to_EspoCrm_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates all functions on home page",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_all_functions_on_home_page(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.step({
  "name": "user provides customer info \"\u003cname\u003e\", \"\u003cwebSite\u003e\", \"\u003cemail\u003e\", \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides address info \"\u003cstreet\u003e\", \"\u003ccity\u003e\", \"\u003cstate\u003e\", \"\u003czip\u003e\", \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "webSite",
        "email",
        "phone",
        "street",
        "city",
        "state",
        "zip",
        "country"
      ]
    },
    {
      "cells": [
        "David",
        "google.com",
        "david@gmail.com",
        "1234567",
        "2200 e devon",
        "Des Plains",
        "IL",
        "60018",
        "USA"
      ]
    },
    {
      "cells": [
        "Murat",
        "amazon.com",
        "murat@gmail.com",
        "3659854",
        "6240 N bell",
        "Los Angelse",
        "IL",
        "60645",
        "USA"
      ]
    },
    {
      "cells": [
        "Makmo",
        "expedia.com",
        "makmo@yahoo.com",
        "65985125",
        "5400 N Western",
        "Chicago",
        "IL",
        "60625",
        "USA"
      ]
    },
    {
      "cells": [
        "Patel",
        "kayak.com",
        "patel@gmail.com",
        "5564895",
        "1 Ocean dr",
        "Miami",
        "FL",
        "56821",
        "USA"
      ]
    },
    {
      "cells": [
        "Harsch",
        "apple.com",
        "harsch@gmail.com",
        "65489532",
        "1100 Wall St",
        "New York",
        "NY",
        "12356",
        "USA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides customer info \"David\", \"google.com\", \"david@gmail.com\", \"1234567\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address info \"2200 e devon\", \"Des Plains\", \"IL\", \"60018\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides customer info \"Murat\", \"amazon.com\", \"murat@gmail.com\", \"3659854\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address info \"6240 N bell\", \"Los Angelse\", \"IL\", \"60645\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides customer info \"Makmo\", \"expedia.com\", \"makmo@yahoo.com\", \"65985125\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address info \"5400 N Western\", \"Chicago\", \"IL\", \"60625\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides customer info \"Patel\", \"kayak.com\", \"patel@gmail.com\", \"5564895\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address info \"1 Ocean dr\", \"Miami\", \"FL\", \"56821\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to Accounts and clicks create account button",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides customer info \"Harsch\", \"apple.com\", \"harsch@gmail.com\", \"65489532\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides address info \"1100 Wall St\", \"New York\", \"NY\", \"12356\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides details",
  "keyword": "And ",
  "doc_string": {
    "value": "At Techtorial, we assist students to get intensive and comprehensive software coding learning in a short period of time.\nOur boot camp courses are designed to polish coding proficiency skills in novice developers to help them secure positions\nin reputed organizations."
  }
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "passed"
});
});