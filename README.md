# Weather-Journal App Project

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Functionality](#functionality)
4. [Development](#development)

## Overview
This project is an asynchronous web app that uses a Web API called OpenWeatherMap and user data to dynamically update the UI. This web app acts as a basic Journal for the user that provides them with the current temperature for the area they provide in the form of a zipcode.

## Installation
Ensure you have node installed on your machine to be able to install the depedencies needed to run the server. Download the Weather-Journal-App folder and using your terminal navigate to the directory.
Run `npm i` for installing the dependencies documented in the package.json file
Now you can run `npm run start` to start up the application and view it on localhost: 8001 

<!-- fix the section below after adding new feature -->
## Functionality
The web app has a basic form that the user has to fill out. The users input is later used to make a GET request to the OpenWeatherMap API to retrive the temperature and post that information to the server-side. Finally a GET request is made to this web apps server to retrive the information that was previously posted to dynamically update the UI. 

## Development
The following technologies where used to build this web app: HTML, CSS, JavaScript and the Bootstrap framework.

Other dependencies are as follows:  body-parser, cors, and express. These were used to create the server-side code of the web app.