
<p align="center">
  <h3 align="center">recipes-detail-app</h3>
</p>
  <p align="center">
    ReactJS application which shows the list of recipes and details.
    <br />
    </p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contact](#Contact)

## About The Project

![Demo](https://github.com/TanveerAliS/recipes-detail-app/blob/master/recipes-detail-app.gif)

I have used [create-react-app](https://github.com/facebook/create-react-app) (react hooks) and [Marley Spoon](https://marleyspoon.com) API's to develop this application. The purpose of the application is to correctly render the data from API as a list and also the details about the individual list item.

### Built With
This applicaiton has been devleoped with help of following stack
* [Font Awesome](https://fontawesome.com/)
* [Axios](https://github.com/axios/axios)
* [Node-sass](https://www.npmjs.com/package/node-sass)
* [Redux](https://redux.js.org)
* [React hooks](https://reactjs.org/docs/hooks-intro.html)

## Getting Started

In order to quick started with this application follow as below,

```sh
npx create-react-app recipes-detail-app
cd recipes-detail-app
npm start
```
Then open http://localhost:8000/ to see your app.

### Prerequisites

Required software and how to install.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/TanveerAliS/recipes-detail-app.git
```
2. Go to dir and Install NPM packages then start
```sh
cd recipes-detail-app
npm install
npm start
```
## Usage

```
├── .gitignore                      <- Files that should be ignored by git. 
├── README.md                       <- The top-level README for this project.
├── package.json                    <- This file contains all the devDependencies, dependencies and scripts to run app.
├── package-lock.json               <- It stores an exact, versioned dependency tree rather than using starred versioning like |                                      package.json itself      
└── src
    ├── actions                     <- Payloads of information that send data from application to store.
    ├── components                  <- Different genric componenent used for this app
    |   ├── Button                  
    |   ├── Card                    
    |   ├── CardBody                
    |   ├── CardDetails            
    |   ├── Cardheader              
    |   └── Title                   
    ├── Constans                    <- Constants which are used in this app
    ├── containers                  
    |   ├── RecipeDetails           <- Display the Details about the selected recipe
    |   ├── Recpies                 <- Display the list of all recipes
    ├── middlewares                 <- Handles action in the Async Actions
    ├── mockdata                    <- Mock data for testing and development
    ├── reducers                    <- Handle the multiple reducer function for application 
    ├── services                    <- Handle the fetch call
    ├── store                       <- A store holds the whole state tree of your application
    ├── index.js                    <- Init and place app in document
    ├── index.scss                  <- Created single style sheet for simplicty
    ├── Routes                      <- Handle the routing of application 
    └── Utils                       <- Simple function to get recipes details
```

In this application, we fetching the data from Marley Spoon's APT to get the different recipes and display list with details view.

It will render loading component while application fetching data from API.

This application is fully accessible with tabs and screen readers.

## Contact

Your Name - [@TanveerAli_S](https://twitter.com/TanveerAli_S)
