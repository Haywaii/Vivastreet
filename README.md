# Vivastreet Test

## ATTENTION 
- **test-datat.ts file** Inside replace the "?" by the password given in email so you can successfully login

## Folder organisation

### Utils
- **functionHelper** - where we create some function to help us in our test and which can be reused elswhere later
- **test-data** - Store credentials for login and error message displayed

### page
- - **loginPage* - The heart of our scenarios with locator and logic to power our tests

### test
- - **loginTest* - Where we have all our automated scenario tests (Positive, negative, performance and accessibility ones)

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