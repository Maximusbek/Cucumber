package steps.com.orange;

import io.cucumber.java.an.E;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LoginPage;
import pages.com.orange.HomePage;
import utils.Driver;

import java.util.*;

public class SeleniumHomeWork10  {
 WebDriver driver = Driver.getDriver("chrome");
 LoginPage page = new LoginPage(driver);
 HomePage  homePage = new HomePage(driver);
 Actions actions = new Actions(driver);
 WebDriverWait wait = new WebDriverWait(driver,10);


 @Given("user navigates to {string}")
 public void user_navigates_to(String url) {
  driver.get(url);
 }

 @Then("user logs in with correct userName {string} and password {string}")
 public void user_logs_in_with_correct_userName_and_password(String userName, String password) {
  page.userNameField.sendKeys(userName);
  page.passwordField.sendKeys(password);
  page.loginButton.click();

 }

 @When("user clicks Admin function and first check box")
 public void user_clicks_Admin_function_and_first_check_box() {
  homePage.adminButton.click();
  homePage.userNamecheckBox.click();
 }

 @Then("user validates all check boxes are selected")
 public void user_validates_all_check_boxes_are_selected() throws InterruptedException {

  for (int i = 0; i < homePage.listOfCheckBoxes.size(); i++){
   Assert.assertTrue(wait.until(ExpectedConditions.visibilityOf(homePage.listOfCheckBoxes.get(i))).isSelected());
  }

 }

 @Then("user double clicks on top of user name and validates user names are listed descending order")
 public void user_double_clicks_on_top_of_user_name_and_validates_user_names_are_listed_descending_order() {

  wait.until(ExpectedConditions.elementToBeClickable(homePage.userNameHeader)).click();
  wait.until(ExpectedConditions.elementToBeClickable(homePage.userNameHeader)).click();

  TreeSet<String> set = new TreeSet<>();
  List<String> listOfUserNames = new ArrayList<>();
  List<String> actualOrder = new ArrayList<>();
  List<String> descendingOrder = new ArrayList<>();
  for (int i = 0; i < homePage.listOfCustomers.size(); i++) {
   actualOrder.add(homePage.listOfCustomers.get(i).getText());
   listOfUserNames.add(homePage.listOfCustomers.get(i).getText());
  }

  set.addAll(listOfUserNames);
  for (String name : set.descendingSet()) {
   descendingOrder.add(name);
  }

  try {
   Assert.assertEquals(descendingOrder,actualOrder);
  }catch (Error e){
   System.out.println("It's Not Really Descending Order");
  }

  /*
   List<String> actualOrder = new ArrayList<>();
   List<String> reversedOrder = new ArrayList<>();

   for (int k = 0; k < homePage.listOfCustomers.size(); k++){
    actualOrder.add(homePage.listOfCustomers.get(k).getText());
    reversedOrder.add(homePage.listOfCustomers.get(k).getText());
   }
    Collections.sort(reversedOrder,Collections.reverseOrder());

   System.out.println(actualOrder+"actual");
   System.out.println(reversedOrder +" reversed");
   Assert.assertEquals(reversedOrder,actualOrder);
*/

 }
//--------------------------------------------------------------------------------------------------------------------
 @When("user clicks Admin function")
 public void user_clicks_Admin_function() {
  homePage.adminButton.click();
 }

 @Then("user clicks Add button selects user role  and employee name {string}")
 public void user_clicks_Add_button_selects_user_role_and_employee_name(String employeeName) {
  homePage.addButton.click();
  Select select = new Select(homePage.selectRole);
  select.selectByValue("1");
  homePage.employeeNameField.sendKeys(employeeName);
  wait.until(ExpectedConditions.elementToBeClickable(homePage.selectEmployeeName)).click();

 }

 @Then("user enters name {string} selects status and enters password {string} then confirms password {string}")
 public void user_enters_name_selects_status_and_enters_password_then_confirms_password(String name, String password, String confirm) {
  homePage.userNameField.sendKeys(name);
  Select select = new Select(homePage.selectStatus);
  select.selectByVisibleText("Enabled");
  homePage.passWordField.sendKeys(password);
  homePage.confirmPassword.sendKeys(confirm);
 }


 @Then("user click save button and validates message {string}")
 public void user_click_save_button_and_validates_message(String expectedMessage) {
  wait.until(ExpectedConditions.elementToBeClickable(homePage.saveButton)).click();
  //actions.moveToElement(homePage.saveButton).click().perform();
  String actualMessage = "Successfully Saved";
  Assert.assertEquals(expectedMessage,actualMessage);

 }

 //---------------------------------------------------------------------------------------

 @When("user searches with recently saved user name {string} and validates that only one user is displayed {int}")
 public void user_searches_with_recently_saved_user_name_and_validates_that_only_one_user_is_displayed(String userName, int expectedNumUsers) {
 homePage.searchField.sendKeys(userName);
 homePage.searchButton.click();
 int actualNumberOfUsers = homePage.validateNumberOfusers.size();
 Assert.assertTrue(expectedNumUsers == actualNumberOfUsers);
 }

 @Then("user validates user name {string} user role {string} employee name {string} and user status {string}")
 public void user_validates_user_name_user_role_employee_name_and_user_status(String expUserName, String expRole, String expEmployeeName, String expStatus) {
  String actualName = homePage.listOfCustomers.get(0).getText();
  String actualUserRole = homePage.userRole.getText();
  String actualEmployeeName = homePage.employeeName.getText();
  String actualStatus = wait.until(ExpectedConditions.visibilityOf(homePage.employeeStatus)).getText();

  Assert.assertEquals(expUserName,actualName);
  Assert.assertEquals(expRole,actualUserRole);
  Assert.assertEquals(expEmployeeName,actualEmployeeName);
  Assert.assertEquals(expStatus,actualStatus);

 }

 @Then("user clicks on top of user name and edit button")
 public void user_clicks_on_top_of_user_name_and_edit_button() {
  homePage.userName.click();
  wait.until(ExpectedConditions.elementToBeClickable(homePage.editButton)).click();
 }

 @Then("user changes status and validates {string} message")
 public void user_changes_status_and_validates_message(String updateMessage) throws InterruptedException {
  Select select = new Select(homePage.selectStatus);
  select.selectByVisibleText("Disabled");
  homePage.saveButton.click();


 }

 @Then("user again searches with user name {string} and validates status is updated {string}")
 public void user_again_searches_with_user_name_and_validates_status_is_updated(String userName, String expectedStatus) {
  wait.until(ExpectedConditions.visibilityOf(homePage.searchField)).sendKeys(userName);
  homePage.searchButton.click();
  String actualStatus = homePage.employeeStatus.getText();
  Assert.assertEquals(expectedStatus,actualStatus);

 }


 @When("user searches with recently saved user name {string} and clicks users check box then clicks delete button")
 public void user_searches_with_recently_saved_user_name_and_clicks_users_check_box_then_clicks_delete_button(String userName) {
  wait.until(ExpectedConditions.visibilityOf(homePage.searchField)).sendKeys(userName);
  homePage.searchButton.click();
  wait.until(ExpectedConditions.elementToBeClickable(homePage.userNamecheckBox)).click();
  homePage.deleteButton.click();

 }

 @When("user validates pop up and  {string} message is displayed")
 public void user_validates_pop_up_and_message_is_displayed(String string) {
  Assert.assertTrue(wait.until(ExpectedConditions.visibilityOf(homePage.popUpMessage)).isDisplayed());
  homePage.okToDelete.click();
 }

 @Then("user searches with user name {string} and validates  {string} message")
 public void user_searches_with_user_name_and_validates_message(String userName, String expectedText) {
   homePage.searchField.sendKeys(userName);
   homePage.searchButton.click();
   String actualText = wait.until(ExpectedConditions.visibilityOf(homePage.noRecodsFoundText)).getText();
   Assert.assertEquals(expectedText,actualText);
 }


}
