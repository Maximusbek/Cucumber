package pages.com.espocrm;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage {
    public HomePage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

   @FindBy(xpath = "//button[@id='btn-login']")
    public WebElement loginButton;

   @FindBy(xpath = "//ul[@class='nav navbar-nav tabs']/li")
    public List<WebElement> homePageFunctions;

   @FindBy(xpath = "//a[@href='#Account']")
    public WebElement accountsOption;

   @FindBy(xpath = "//a[@class='btn btn-default action']")
    public WebElement createAccountButton;

   @FindBy(xpath = "//input[@autocomplete='espo-name']")
    public WebElement nameField;

   @FindBy(xpath = "//input[@autocomplete='espo-website']")
    public WebElement webSiteField;

   @FindBy(xpath = "//input[@autocomplete='espo-emailAddress']")
    public WebElement emailField;

   @FindBy(xpath = "//input[@autocomplete='espo-phoneNumber']")
    public WebElement phoneField;

   @FindBy(xpath = "//textarea[@data-name='billingAddressStreet']")
    public WebElement billStreet;

   @FindBy(xpath = "//textarea[@data-name='shippingAddressStreet']")
    public WebElement shipStreet;

   @FindBy(xpath = "//input[@data-name='billingAddressCity']")
    public WebElement billCity;

   @FindBy(xpath = "//input[@data-name='shippingAddressCity']")
    public WebElement shipCity;

   @FindBy(xpath = "//input[@data-name='billingAddressState']")
    public WebElement billState;

   @FindBy(xpath = "//input[@data-name='shippingAddressState']")
    public WebElement shipState;

   @FindBy(xpath = "//input[@data-name='billingAddressPostalCode']")
    public WebElement billZip;

   @FindBy(xpath = "//input[@data-name='shippingAddressPostalCode']")
    public WebElement shipZip;

   @FindBy(xpath = "//input[@data-name='billingAddressCountry']")
    public WebElement billCountry;

   @FindBy(xpath = "//input[@data-name='shippingAddressCountry']")
    public WebElement shipCountry;

   @FindBy(xpath = "//textarea[@data-name='description']")
    public WebElement descriptionField;

   @FindBy(xpath = "//select[@data-name='type']")
    public WebElement selectType;

   @FindBy(xpath = "//select[@data-name='industry']")
    public WebElement selectIndustry;

   @FindBy(xpath = "//button[@data-action='save']")
    public WebElement saveButton;



}
