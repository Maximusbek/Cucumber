package steps.com.espocrm;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.com.espocrm.HomePage;
import utils.ConfigReader;
import utils.Driver;

import java.util.ArrayList;
import java.util.List;


public class SeleniumHomeWork11 {
    WebDriver driver = Driver.getDriver("chrome");
    HomePage homePage = new HomePage(driver);
    WebDriverWait wait = new WebDriverWait(driver,10);

    @Given("user navigates to EspoCrm home page")
    public void user_navigates_to_EspoCrm_home_page() {
        driver.get(ConfigReader.getProperty("espocrmUrl"));
        wait.until(ExpectedConditions.elementToBeClickable(homePage.loginButton)).click();

    }



    @Then("user validates all functions on home page")
    public void user_validates_all_functions_on_home_page(DataTable table) {
        List<String> expectedFunctions = table.asList();
        List<String> actualFunctions = new ArrayList<>();

       for (int i = 0; i < wait.until(ExpectedConditions.visibilityOfAllElements(homePage.homePageFunctions)).size()-1; i++){
          actualFunctions.add(wait.until(ExpectedConditions.visibilityOfAllElements(homePage.homePageFunctions)).get(i).getText());
       }
        Assert.assertEquals(expectedFunctions,actualFunctions);
    }

    @Given("user goes to Accounts and clicks create account button")
    public void user_goes_to_Accounts_and_clicks_create_account_button() {
          homePage.accountsOption.click();
          wait.until(ExpectedConditions.elementToBeClickable(homePage.createAccountButton)).click();
    }

    @Given("user provides customer info {string}, {string}, {string}, {string}")
    public void user_provides_customer_info(String name, String webSite, String email, String phone) {
    wait.until(ExpectedConditions.visibilityOf(homePage.nameField)).sendKeys(name);
     homePage.webSiteField.sendKeys(webSite);
     homePage.emailField.sendKeys(email);
     homePage.phoneField.sendKeys(phone);


    }

    @Then("user provides address info {string}, {string}, {string}, {string}, {string}")
    public void user_provides_address_info(String street, String city, String state, String zip, String country) {

      homePage.billStreet.sendKeys(street);
      homePage.shipStreet.sendKeys(street);
      homePage.billCity.sendKeys(city);
      homePage.shipCity.sendKeys(city);
      homePage.billState.sendKeys(state);
      homePage.shipState.sendKeys(state);
      homePage.billZip.sendKeys(zip);
      homePage.shipZip.sendKeys(zip);
      homePage.billCountry.sendKeys(country);
      homePage.shipCountry.sendKeys(country);
      Select select = new Select(homePage.selectType);
      select.selectByVisibleText("Customer");
      Select select1 = new Select(homePage.selectIndustry);
      select1.selectByValue("Computer");

    }

    @Then("user provides details")
    public void user_provides_details(String docString) {
      homePage.descriptionField.sendKeys(docString);
    }

    @Then("user creates four new accounts and clicks save button")
    public void user_creates_four_new_accounts_and_clicks_save_button() {

    }


    @Then("user validates that new users are created")
    public void user_validates_that_new_users_are_created() {
      system.out.println("Hello World")
    }

}
