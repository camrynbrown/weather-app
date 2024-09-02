# Weather App

This is a simple Weather App built by following a tutorial on YouTube. The app fetches weather data from an API and displays current weather conditions for a user-specified location.

## Features

- Fetches current weather data based on city name
- Displays temperature, weather conditions, and an appropriate icon
- Easy-to-use interface

## Demo

You can see a live demo of the app [here](https://camrynbrown.github.io/weather-app/).

## Technologies Used

- HTML
- CSS
- JavaScript
- Open Weather Map API 

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git

2. Navigate to the project directory:

    ```bash
    cd weather-app

3. Open index.html in your browser to view the app.

## How to Use

1. Enter the name of a city in the input field.
2. Click the "Search" button to fetch the current weather for that city.
3. The weather information will be displayed, including temperature, weather conditions, and an icon.

## Toggling Between Imperial and Metric Measurements

This application allows users to switch between imperial (°F) and metric (°C) measurements by interacting with the temperature display.

### How It Works

- **Initial State**: The application defaults to displaying the temperature in imperial units (°F).
- **Toggle Functionality**: 
  - When you click on the temperature display (degrees), the app will switch to metric units (°C).
  - Clicking the temperature display again will revert it back to imperial units (°F).

This toggle functionality enables users to easily view weather data in their preferred measurement system with a simple click.

## API Reference
This app uses the Open Weather App API to fetch weather data. You can sign up for an API key on the [website](https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=997e4b3212f09748e142792819230fbd&units=imperial). 

## Credits 
- Tutorial by `GreatStack` on YouTube.