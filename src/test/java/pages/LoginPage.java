package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }


    @FindBy(xpath = "//input[@id='txtUsername']")
    public WebElement userNameField;

    @FindBy(xpath = "//input[@id='txtPassword']")
    public WebElement passwordField;

    @FindBy(xpath = "//input[@id='btnLogin']")
    public WebElement loginButton;


}
