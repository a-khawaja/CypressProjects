## Flink Automation Framework
The framework is for the Safety io GmbH-

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the software and how to install them
```
Nodejs
npm
Cypress
```

## Steps to execute the framework in your local


1. Checkout the code in your local using: 
    **https://github.com/a-khawaja/SafetyIOTask.git**
2. Once checked out, import the project in Cypress
3. Once import is successfully, you can run the cypress by running the command npx cypress open

<h3><b>Note:</b></h3>


<b>Note:</b> No special browser setup is needed as it will be taken care by Cypress automatically.</font>


## Project Structure
The project has followed 'standard' cypress page object model structure as below:

```
fixtures                    - Consists of Test data
integration/pageObjects     - Consists of page objects and methods   
integration/Tests           - Consists of tests to be executed
cypress.json                - Consists of basic settings of the framework

```

## IMPORTANT POINTS
1. The framework is platform and browser independent. But the tests have been run on Chrome and Windows.
2. There are many combinations of E2E test are possible that could be added to this suite, but only the asked one has been taken care of for the task purpose. 
3. In code, at few places hard coded sleep is used, because sometimes cypress does not handle the conditional waits smartly even if the timeout is increased.
