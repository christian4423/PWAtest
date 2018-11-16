# PWA


## INSTALL Global Dependencies.

Run:

 * __npm install --global webpack@^4.18.0__
 * __npm install --global webpack-cli@3.1.0__
 * __npm install --global express@^4.16.3__
 * __npm install --global @babel/cli__
 * __npm install --global @babel/core__
 * __npm install --global @babel/node__

## Stack Server-Side

### Server
* This application will host an API built in NodeJS using ExpressJS. 

### View Engine
* The server uses a view engine known as PUG. 

## Stack Client-side
The Front end is built using React JS. 
The map is generated using Geomoose 3.

### All API calls will transfer JSON for communication. 
* All React code is bundled with Webpack
* All Styles are bundled with Webpack
* All client-side code is located in ./src

## ENV file
* __ENV__=**development** 
    * Webpack dev server is enabled
    * Webpack hot reload is enabled
    * Webpack is compiled automatically
    * CORS is disabled. 
    * __/Views/home.pug__ needs to point to the __layout.pug__ file.
* __ENV__=**production** 
    * Webpack dev server is disabled
    * Webpack hot reload is disabled
    * Expects build to be ran 
    * CORS is enabled. 
    * All bundled files get rendered to the /public directory. 
    * __/Views/home.pug__ needs to point to the __layout.production.pug__ file.





# Requirements
* NodeJS > v6
* expressjs v4.x
* webpack v3.10.0

# API

1. [Default](#default)

## Routes:

## Default

#### GET
* Returns status (__200__) and JSON of API saying welcome

https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12