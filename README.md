# OverkillTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

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

# Deploying the project on github.io pages

Project can be deployed on github.io pages easily using angular-cli-ghpages library.
First, the latter library needs to be install globally with:

npm install -g angular-cli-ghpages

and then locally in the project with:

npm i angular-cli-ghpages --save-dev

Chosen the app url to be https://nperon.github.io/overkill-todo/ the build can be performed with:

ng build --prod --base-href https://nperon.github.io/overkill-todo/

Then, app can be deployed with:

ngh --dir=dist/overkill-todo
