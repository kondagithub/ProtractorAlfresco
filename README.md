#Prerequisites
-Install Node.js
-Install chrome browser

Checkout the project to your local computer under any folder.
Open command prompt and change the directory to the previous folder.
Under this folder you can find 'ProtractorAlfresco' folder
Change the direcory to 'ProtractorAlfresco'
Issue the 'npm insatll' command. With this command all required modules will be installed under node_modules.
Issue 'webdriver-manager update' command. This will ensures that all browser drivers will be up to date.
Issue 'webdriver-manager start'  command. The webdrive manager will be started.
Open another command prompt under project root folder.
Issue 'npm test -- --userName=guest@example.com --passWord=Password' command.
With the above command test execution will be started.
Once the test execution completed you can open generated report under root folder with the name 'ProtractorTestReport.html' in any browser.
Then you can find test execution status.
