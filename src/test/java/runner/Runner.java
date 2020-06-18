package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/com.espocrm/espocrm.feature",
        glue = "steps",
        dryRun = false
)

public class Runner {

}
