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

Choosing the app url to be https://nperon.github.io/overkill-todo/ the build can be performed with:

ng build --prod --base-href https://nperon.github.io/overkill-todo/

Then, app can be deployed with:

ngh --dir=dist/overkill-todo

# Overkill Todo - Project instructions
Our fantastic product owner has a wonderful, amazing and revolutionary idea... he wants to build a new Todo application. 
He has a pretty accurate vision of what he wants, and so comes with a backlog containing the following user stories:

## User stories

### 1: List my TODOs
#### Description:
As a user I would like to list my current todos
#### Acceptance criterias:
- Each todo has, at minimal, a related state and title
- Some hard-coded todos are initialized in this context for demonstration purpose 

### 2: Change a TODO state
#### Description:
As a user I would like to change a todo state by checking a "box"
#### Acceptance criteria:
- When I toggle a checkbox displayed beside todo's title, I toggle todo's state (done / undone)
- When a todo is done, it is placed at the bottom of the list, and displayed "crossed out"

### 3: Detail a TODO
#### Description:
As a user I would like to display one of my todo in a separate or dedicated view.
This todo will contain its title and a description (which is a new information not shown in the previous view).
#### Acceptance criteria:
- I can click on a todo (by any way) to access the "detail" view of corresponding todo
- The todo can be accessed via a unique URL

### 4: Add a new TODO
#### Description:
As a user I would like to add a new todo in my list
#### Acceptance criteria:
- The todo's title is required
- The todo's description can be empty
- The newly created todo is added on top of the todos list
- You are free to choose the design / interaction 

---

## Technical environment
You're working in the WebFactory team, which provides the following technical guidelines:
- The application should be based on Angular Framework
- The project should rely on NgRx for state management 
- To keep the UI simple, the use of Material components is highly recommended (material.angular.io)
- Code quality is very important, so all the code has to be covered by unit tests
- Each user story should be realized in its own commit on master
- The product owner is curious and likes to read the application code on Github and test it via Github Pages
- The application should have a mocked backend and store all todos on it (with in-memory-web-api for example)

## Bonus
You can add any new functionality in this wonderful project if you want to, in order to satisfy your PO 😉  
