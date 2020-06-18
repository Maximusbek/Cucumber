package pages.com.orange;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import java.util.List;

public class HomePage {
    public HomePage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//a[@id='menu_admin_viewAdminModule']")
    public WebElement adminButton;

    @FindBy(xpath = "//input[@id='ohrmList_chkSelectAll']")
    public WebElement userNamecheckBox;

    @FindBy(xpath = "//table[@id='resultTable']/thead/tr/th[2]")
    public WebElement userNameHeader;

    @FindBy(xpath = "//*[@id='resultTable']//input")
    public List<WebElement> listOfCheckBoxes;

    @FindBy(xpath = "//*[@id='resultTable']//tr/td[2]")
    public List<WebElement>listOfCustomers;

    //--------------------------------------------------------------------------------
    @FindBy(xpath = "//input[@id='btnAdd']")
    public WebElement addButton;

    @FindBy(xpath = "//select[@id='systemUser_userType']")
    public WebElement selectRole;

    @FindBy(xpath = "//input[@id='systemUser_employeeName_empName']")
    public WebElement employeeNameField;

    @FindBy(xpath = "//li[@class='ac_even ac_over']")
    public WebElement selectEmployeeName;

    @FindBy(xpath = "//input[@id='systemUser_userName']")
    public WebElement userNameField;

   @FindBy(xpath = "//select[@id='systemUser_status']")
    public WebElement selectStatus;

   @FindBy(xpath = "//input[@id='systemUser_password']")
    public WebElement passWordField;

   @FindBy(xpath = "//input[@id='systemUser_confirmPassword']")
    public WebElement confirmPassword;

   @FindBy(xpath = "//input[@id='btnSave']")
    public WebElement saveButton;

   @FindBy(xpath = "//div[@id='successBodyEdit']")
    public WebElement successfullySaved;
//-------------------------------------------------------------------------------------------
   @FindBy(xpath = "//input[@id='searchSystemUser_userName']")
   public WebElement searchField;

   @FindBy(xpath = "//input[@id='searchBtn']")
    public WebElement searchButton;

   @FindBy(xpath = "//a[.='Murat']")
    public List<WebElement> validateNumberOfusers;

    @FindBy(xpath = "//a[.='Murat']")
    public WebElement userName;


   @FindBy(xpath = "//td[.='Admin']")
    public WebElement userRole;

   @FindBy(xpath = "//td[.='Fiona Grace']")
    public WebElement employeeName;

   @FindBy(xpath = "//td[.='Disabled']")
    public WebElement employeeStatus;

   @FindBy(xpath = "//input[@id='btnSave']")
    public WebElement editButton;

   @FindBy(xpath = "//input[@id='btnDelete']")
    public WebElement deleteButton;

   @FindBy(xpath = "//p[.='Delete records?']")
   public WebElement popUpMessage;

   @FindBy(xpath = "//input[@id='dialogDeleteBtn']")
    public WebElement okToDelete;

   @FindBy(xpath = "//td[.='No Records Found']")
    public WebElement noRecodsFoundText;



}
