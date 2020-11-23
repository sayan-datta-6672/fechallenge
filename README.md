# fechallenge

Objective: Build a web app to display and update list of users.

Solution:

Use Angular version 10 to build a web app to help login, register, display, edit and delete a set of users.

Setup instructions:

1. Install Angular globally using npm install -g @angular/cli
2. Clone this repo using git clone https://github.com/sayan-datta-6672/fechallenge.git
3. Open terminal in cloned folder, execute command npm install to install the dependencies
4. Enter ng serve on terminal to serve it on http://localhost:4200
5. For building the app, run ng build --prod
6. The built app will be found in dist folder in the app directory

This app can be run on all platforms, viz., Windows, Linux, MacOS.

No paid software dependency has been used. Material UI has been used in the project.

For API needs https://reqres.in/ has been used, no database setup has been utilized.

Technical Requirements as outlined in the FE Coding Challenge manual has been fulfilled.

Design Principles mainly used is the concept of Observable which has been used for the User object for storing user data once it is fetched and using it across various services by subscription. The logged in user object is stored in local storage for ease of access from other modules.

Best Practices followed includes proper validation for forms, displaying alerts on execution of various operations, using Observables when needed and accessing them by subscription.

Limitations:
The avatars for the user fetched from https://reqres.in/ are not accessible as they are found to be forbidden hence placeholder images have been used if images are not available.
