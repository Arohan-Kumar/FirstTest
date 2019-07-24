Feature: My validations on American Express
@Regression
Scenario: I want to login
Given I have an account
And I will provide the data
Then My login success
@Regression, @Smoke
Scenario: I want to view my membership
Given I have logged in 
Then I click on reward points
And I will check for my rewards
@Smoke  @Sanity
Scenario: I want to refer my friend
Given I am offered with referal bonus
When I shared the link with my friend
Then I will get some zeda points
And I will enjoy my friday party