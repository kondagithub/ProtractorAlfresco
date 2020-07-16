#Prerequisites<br/>
Install Node.js<br/>
Install chrome browser<br/>

Checkout the project to your local computer under any folder.<br/>
Open command prompt and change the directory to the previous folder.<br/>
Under this folder you can find 'ProtractorAlfresco' folder<br/>
Change the direcory to 'ProtractorAlfresco'<br/>
Issue the 'npm insatll' command. With this command all required modules will be installed under node_modules.<br/>
Issue 'webdriver-manager update' command. This will ensures that all browser drivers will be up to date.<br/>
Issue 'webdriver-manager start'  command. The webdrive manager will be started.<br/>
Open another command prompt under project root folder.<br/>
Issue 'npm test -- --userName=guest@example.com --passWord=Password' command.<br/>
With the above command test execution will be started.<br/>
Once the test execution completed you can open generated report under root folder with the name 'ProtractorTestReport.html' and open in any browser.<br/>
Then you can find test execution status.<br/>
