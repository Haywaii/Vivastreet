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
- - **Security test to add* - Like not giving hint in message if the email exists or not
- - **Generic test to add* - Navigate to forgot password link properly or creation of an account / responsive design test for small screen / special character handle or international one for login
- - **Better name for some tests* -
- - **Better accessibility/performance management* - Like better reporting or using artillery with playwright to get proper LCP time

### On utils
- - **Add a test fixture for common axe configuration* - so it's easier to share config across tests

### on page logic
- - **Split the logic into smaller batch for better visibility* 
- - **Move some function to utils in a Navigation or generic class* - like moving between submenu

### on configuration
- - **Test on smaller screen (mobile) not just in default browsers* 
- - **Add yaml file to execute our test on a pipeline automatically* 


### Observation during my testing
- - *Advanced Search on BMW* - Some ads results when clicking on it redirect me to the search result with the ad at the top instead of going to the ad itself (not happening everytime so can't automate)
- - *Advanced Search access* - For some reason to access advanced search i need to do a normal search first. Maybe it's by design. 
- - *Category selection* - As the option are not visibile within otpgroup, i can't select them. Tried different technique but none work so my scenario are very basic and doesn't cover change of category like i initially wanted. 

## Automation Selection

### Chosen
- - *Search / Advanced Search* - Cover one of the most business-critical features because if you can't search then you can't find ad and get revenues / Easy to find a negative and positive outcomes
- - *Access Ad Page* - Primary user journey / no auth or data to change on production (nothing reversible) / stable / cover different important actions from hitting the homepage to ad looking

### Left out
- - *Login* - Security reason, data creation on production / email dependencies
- - *Posting an ad* - Data creation = no go (even if fake one) / Risky in term of business on production