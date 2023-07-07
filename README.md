# Weather-Journal App Project

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Functionality](#functionality)
4. [Development](#development)

## Overview
This project is an asynchronous web app that uses a Web API called OpenWeatherMap and user data to dynamically update the UI. This web app acts as a basic Journal for the user that provides them with the current temperature for the area they provide in the form of a zipcode.

## Installation
Download the Weather-Journal-App folder and Node.js. Then you will need to start running the server on its localhost. To do this you must run the following comand on the terminal 'node server.js'. This will start the server and provide you with the link to the web app that will be hosted locally.

## Functionality
The web app has a basic form that the user has to fill out. The users input is later used to make a GET request to the OpenWeatherMap API to retrive the temperature and post that information to the server-side. Finally a GET request is made to this web apps server to retrive the information that was previously posted to dynamically update the UI. 

## Development
The following technologies where used to build this web app: HTML, CSS, JavaScript and the Bootstrap framework.

Other dependencies are as follows:  body-parser, cors, and express. These were used to create the server-side code of the web app.