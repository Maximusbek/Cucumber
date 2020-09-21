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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[@class\u003d\u0027btn btn-default action\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button(SeleniumHomeWork11.java:49)\r\n\tat ✽.user goes to Accounts and clicks create account button(file:///C:/Users/milan/Desktop/cucumber/Cucumber/src/test/resources/com.espocrm/espocrm.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027btn btn-default action\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QLIMPV5Q\u0027, ip: \u002726.45.194.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\milan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 82a75d88562f373ffd19501d41bcc23e\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027btn btn-default action\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button(SeleniumHomeWork11.java:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user provides customer info \"Murat\", \"amazon.com\", \"murat@gmail.com\", \"3659854\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides address info \"6240 N bell\", \"Los Angelse\", \"IL\", \"60645\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#Account\" class\u003d\"nav-link\" style\u003d\"border-color: #edc755\"\u003e...\u003c/a\u003e is not clickable at point (100, 110). Other element would receive the click: \u003cdiv id\u003d\"dialog-98253\" class\u003d\"dialog-confirm modal in\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QLIMPV5Q\u0027, ip: \u002726.45.194.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\milan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 82a75d88562f373ffd19501d41bcc23e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button(SeleniumHomeWork11.java:48)\r\n\tat ✽.user goes to Accounts and clicks create account button(file:///C:/Users/milan/Desktop/cucumber/Cucumber/src/test/resources/com.espocrm/espocrm.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user provides customer info \"Makmo\", \"expedia.com\", \"makmo@yahoo.com\", \"65985125\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides address info \"5400 N Western\", \"Chicago\", \"IL\", \"60625\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#Account\" class\u003d\"nav-link\" style\u003d\"border-color: #edc755\"\u003e...\u003c/a\u003e is not clickable at point (100, 110). Other element would receive the click: \u003cdiv id\u003d\"dialog-98253\" class\u003d\"dialog-confirm modal in\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QLIMPV5Q\u0027, ip: \u002726.45.194.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\milan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 82a75d88562f373ffd19501d41bcc23e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button(SeleniumHomeWork11.java:48)\r\n\tat ✽.user goes to Accounts and clicks create account button(file:///C:/Users/milan/Desktop/cucumber/Cucumber/src/test/resources/com.espocrm/espocrm.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user provides customer info \"Patel\", \"kayak.com\", \"patel@gmail.com\", \"5564895\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides address info \"1 Ocean dr\", \"Miami\", \"FL\", \"56821\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#Account\" class\u003d\"nav-link\" style\u003d\"border-color: #edc755\"\u003e...\u003c/a\u003e is not clickable at point (100, 110). Other element would receive the click: \u003cdiv id\u003d\"dialog-98253\" class\u003d\"dialog-confirm modal in\" role\u003d\"dialog\" tabindex\u003d\"-1\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QLIMPV5Q\u0027, ip: \u002726.45.194.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\milan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 82a75d88562f373ffd19501d41bcc23e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat steps.com.espocrm.SeleniumHomeWork11.user_goes_to_Accounts_and_clicks_create_account_button(SeleniumHomeWork11.java:48)\r\n\tat ✽.user goes to Accounts and clicks create account button(file:///C:/Users/milan/Desktop/cucumber/Cucumber/src/test/resources/com.espocrm/espocrm.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user provides customer info \"Harsch\", \"apple.com\", \"harsch@gmail.com\", \"65489532\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_customer_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides address info \"1100 Wall St\", \"New York\", \"NY\", \"12356\", \"USA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_provides_address_info(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user creates four new accounts and clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_creates_four_new_accounts_and_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates that new users are created",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.com.espocrm.SeleniumHomeWork11.user_validates_that_new_users_are_created()"
});
formatter.result({
  "status": "skipped"
});
});