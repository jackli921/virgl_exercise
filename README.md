
<div align="center" >
    <img src="./public/demo.gif">
</div>

## Virgal Exercise 
A NextJS 13 application to display outdoor tempeature and timestamp at which the tempearture was last measured, and a 5-day forecast chart of tempeature values. (Location is defaulted to New York)

## Overview 
The application is separated into 4 parts:
1. Top section - information about the latest current tempeature data (last fetched time, last measured time, location, temperature, auto-update state)
2. Mid section - a line graph of tempeature values over the next 5 days  
2. Bottom section - a section that displays the values saved by you the user
4. Botton section - two buttons for user interaction, one to save current weather data & saved time and another to display the data

## Features
- Responsive line chart, buttons based on viewport size
- Auto-update current tempeature every 5 seconds with latest fetched time displayed at top
- buttons for user to save latest temperature reading and toggle the visibility of the saved data

## Installation
To run the project locally: 

1. clone this project locally
2. run `npm install`to install dependencies
3. run `npm run dev` to run the application locally
4. open [localhost](http://localhost:3000/)

## Improvements

Features ideas
- Manage app state using react-context 
- Improve UI and color choice
- Use NextJS Server-side rendering to load displayed data

