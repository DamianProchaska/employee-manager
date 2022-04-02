## Installation
1. Make sure that you have Node 12.14 or newer installed. See instructions [here](https://nodejs.org/en/).

2. Make sure that you have the Angular CLI installed globally. Check details [here](https://angular.io/cli).
    ```
    npm install -g @angular/cli
    ```
3. Make sure that you have installed dependencies ('node_modules' folder) in 'workers-list-client' and 'workers-list-server' folders via command:
    ```
    npm install
    ```


### How can you Host Angular App?
* You need to be in library-client ("cd workers-list-client" in new terminal) folder, then just type:

    ```
    ng serve
    ```

### How can you Host Node JS Server?
* You need to be in library-server ("cd workers-list-server" in new terminal) folder, then just type:

    ```
    npm run start:server
    ```


# Useful tools to work with app for developers
- Code edit - Visual Studio Code: https://code.visualstudio.com/
- Development workflow - Github Desktop: https://desktop.github.com/
- Browse database - DataDB Browser: https://sqlitebrowser.org/dl/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Adding a new employee's place

You have to edit the office map, for example in 'Gimp', add web linking from filters - select a new place and then save the coordinate file. You copy coords from a file and paste them into the database.

