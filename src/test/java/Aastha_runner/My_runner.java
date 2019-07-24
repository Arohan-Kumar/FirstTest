package Aastha_runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber .class)
@CucumberOptions(features="MyDemo_ddc2",glue="DDC2_MyStepDefinitions",tags= {"@Smoke"},
plugin={"html:target/cucumber-htmlreport.html"})
public class My_runner {
	
}
