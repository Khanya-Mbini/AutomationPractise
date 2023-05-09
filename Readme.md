# Automation Assessment

This is my submission for the test automation part of my technical assessment.

## About this project

This project implements automated test for a page using [cypress](https://www.cypress.io/).

### Getting started

This project has been tested against node v18.12.1. To run it you will need to have [nodejs](https://nodejs.org/en) installed. If you have [nvm](https://github.com/nvm-sh/nvm) installed,
you can install and choose the appropriate node version by running `nvm install` from the project root.

When you have installed nodejs, install required dependencies by running `npm install` from the project root.

### Running tests

The tests are executed from within the cypress web UI. To get this started, run `npx cypress open`. At this point you will
interact with the web UI. Choose E2E in the testing types screen. The tests work on both Electron and Chrome, so you may choose
either on the browser select screen. Click on the spec to get the test run started.