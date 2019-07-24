$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:MyDemo_ddc2/MyFirstRegression.feature");
formatter.feature({
  "name": "My validations on American Express",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have an account",
  "keyword": "Given "
});
formatter.match({
  "location": "MyAmex.i_have_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will provide the data",
  "keyword": "And "
});
formatter.match({
  "location": "MyAmex.i_will_provide_the_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "My login success",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAmex.my_login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to view my membership",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression,"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "MyAmex.i_have_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on reward points",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAmex.i_click_on_reward_points()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will check for my rewards",
  "keyword": "And "
});
formatter.match({
  "location": "MyAmex.i_will_check_for_my_rewards()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to refer my friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I am offered with referal bonus",
  "keyword": "Given "
});
formatter.match({
  "location": "MyAmex.i_am_offered_with_referal_bonus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I shared the link with my friend",
  "keyword": "When "
});
formatter.match({
  "location": "MyAmex.i_shared_the_link_with_my_friend()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will get some zeda points",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAmex.i_will_get_some_zeda_points()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will enjoy my friday party",
  "keyword": "And "
});
formatter.match({
  "location": "MyAmex.i_will_enjoy_my_friday_party()"
});
formatter.result({
  "status": "passed"
});
});