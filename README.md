# Vivastreet Test

## How to run the tests 
1/ Clone the project on your local, open with your favourite coding tools and just launch test with one of the following command:
- **Run all tests at once** - npx playwright test
- **Run a specific test** - npx playwright test -g "your test name
- **Run a specific file** - npx playwright test yourtestfilename.ts
- **Run test with headed mode** - npx playwright test --headed (it's headless by default)

2/ Directly into github by re-running the last workflow executed after the last commit (you need to open it to re-run it). 
**Warning** - Run will fail as accessibility test are failing (in actions tab of the project)

## Folder organisation

### locators
- **adLocators** - Where all our ad page locators are stored to be used across tests
- **searchLocators** - Where all our search locators are stored to be used across tests

### page
- **searchPage** - The heart of our scenarios with logic to power our search tests
- **adPage** - The heart of our scenarios with logic to power our ad tests

### Utils
- **functionHelper** - where we create some function to help us in our test and which can be reused elswhere later
- **test-data** - Store credentials for login and error message displayed

### test
- **searchTest** - Where we have all our automated scenario tests for search navigation/content
- **adTest** - Where we have all our automated scenario tests for ad content

## Potential improvements

### On test scenarios
- **Better selection management** - Adding better method or if condition for dealing with category name selection / switch case for making it more dynamic for each potential path taken
- **Better accessibility/performance management** - Like better reporting or using artillery with playwright to get proper LCP time
- **More random journey for ad display** - Just go to different ads (random selection) everytime you check ad content

### On utils
- **Add a fixture for common axe configuration** - so it's easier to share config across tests
- **Use my fixture for teardown and setup method instead of putting them directly in beforeeach method of each test** - better maintability but for some reason doesn't work on Chrome (couldn't find a fix so far)
- **Better data management** - Add data structure for radius / price.

### on page logic
- **Split the logic into smaller batch for better visibility* 

### on configuration
- *Test on smaller screen (mobile) not just in default browsers* 
- *Add yaml file to execute our test on a pipeline automatically (so override the default one)* 

### Observation during my testing
- **Advanced Search on BMW** - Some ads results when clicking on it redirect me to the search result with the ad at the top instead of going to the ad itself (not happening everytime so can't automate)
- **Multiple id element** - Some element id give me multiple elements to choose. Find it disturbing as id should match only one element. 
- **Advanced Search access** - To access advanced search i need to do a normal search first. It's probably by design. I would like to get access to advanced search without searching first (only my persective of an one time user so far). 

## Automation Selection

### Chosen
- *Search / Advanced Search* - Cover one of the most business-critical features because if you can't search then you can't find ad and get revenues / Easy to find a negative and positive outcomes
- *Access Ad Page* - Primary user journey / no auth or data to change on production (nothing reversible) / stable / cover different important actions from hitting the homepage to ad looking
- *Data* - Choose top category or location in my test where i know there is potential high traffic

### Left out
- *Login* - Security reason, data creation on production / email dependencies
- *Posting an ad* - Data creation = no go (even if fake one) / Risky in term of business on production