1. npm init (to create a package.json)
2. npm install --save-dev nightwatch (install nightwatch)
3. node_module folder will be added to the project.
4. add test folder
5. add reports and scenario folder inside test folder.
6. Copy "nightwatch.json" to the main folder.from node_module/nightwatch/bin
7. Edit nightwatch.json file.
8. add the test in the scenario folder.
9. edit package.json  and add "tests": "./node_modules/.bin/nightwatch -c nightwatch.json" inside scrip.
10. In the console nevigate to the folder.
11. java -jar selenium-server-standalone-3.7.1.jar
12. In the new tab nevigate to the folder "mynightwatch" run --- "npm run tests"


NOTE: In this project we are running test scenarios manually.


For Browserstack configuration I used below documants 
https://www.browserstack.com/automate/nightwatch


