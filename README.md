# Vivastreet Test

## Folder organisation

### Utils
- **functionHelper** - where we create some function to help us in our test and which can be reused elswhere later
- **test-data** - Store credentials for login and error message displayed

### page
- - **searchPage* - The heart of our scenarios with locator and logic to power our search tests
- - **adPage* - The heart of our scenarios with locator and logic to power our ad tests

### test
- - **searchTest* - Where we have all our automated scenario tests for search navigation/content
- - **adTest* - Where we have all our automated scenario tests for ad content

## Potential improvements

### On test scenarios
- - **Better selection management* - Adding better method or if condition for dealing with category name selection / switch case for making it more dynamic for each potential path taken
- - **Better accessibility/performance management* - Like better reporting or using artillery with playwright to get proper LCP time

### On utils
- - **Add a fixture for common axe configuration* - so it's easier to share config across tests
- - **Add a fixture for teardown and setup method instead of putting them directly in beforeeach method of each test* - better maintability
- - **Better data management* - Add data structure for radius / price.

### on page logic
- - **Split the logic into smaller batch for better visibility* 
- - **Random data selection* - Choose data by creating function who randomly choose a value from our test-data

### on configuration
- - **Test on smaller screen (mobile) not just in default browsers* 
- - **Add yaml file to execute our test on a pipeline automatically* 


### Observation during my testing
- - *Advanced Search on BMW* - Some ads results when clicking on it redirect me to the search result with the ad at the top instead of going to the ad itself (not happening everytime so can't automate)
- - *Multiple id element* - Some element id give me multiple elements to choose. Find it disturbing as id should match only one element. 
- - *Advanced Search access* - To access advanced search i need to do a normal search first. It's probably by design. I would like to get access to advanced search without searching first (only my persective of an one time user so far). 

## Automation Selection

### Chosen
- - *Search / Advanced Search* - Cover one of the most business-critical features because if you can't search then you can't find ad and get revenues / Easy to find a negative and positive outcomes
- - *Access Ad Page* - Primary user journey / no auth or data to change on production (nothing reversible) / stable / cover different important actions from hitting the homepage to ad looking
- - *Data* - Choose top category or location in my test where i know there is potential high traffic

### Left out
- - *Login* - Security reason, data creation on production / email dependencies
- - *Posting an ad* - Data creation = no go (even if fake one) / Risky in term of business on production