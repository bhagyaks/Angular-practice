# VeriffAssignmentAngular
Verification engine is based on checks. Every verification session has a set of required checks that must be answered for the decision to be made.

# Tech Stack
● Angular

● Typescript

● Html

● scss

# Details
In api.js file you can see a simple implementation of mock API with 2 functions:

● fetchChecks – returns a list of checks in the format { id: string,
priority: number, description: string }[]

● submitCheckResults – intended to submit check results in the format of {
checkId: string, value: string }[]

I have fetched and display a list of checks, allow them to be answered as Yes /
No and display the Submit button. When Submit is clicked, check results will be
submitted and show a success screen.

Next checks should be disabled unless all checks above are answered. Submit
button becomes available when either:
1. All checks are answered as Yes
2. At least one check is answered as No

Checks can be answered by either mouse (click on Yes or No) or via keyboard
shortcuts. Keyboard shortcuts work as follows:

● Arrow Up and Arrow Down to move between checks

● 1 to answer check as Yes

● 2 to answer check as No

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
