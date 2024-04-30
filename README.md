# WeatherApp

This is a simple weather application built with Angular that allows users to search for the current weather and forecast for a location.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/bishalakajiren/vintagecircle_weatherapp.git
   
2.   Navigate to the project directory:
     ```bash
     cd vintagecircle_weatherapp

3.   Install dependencies:
     ```bash
     npm install

4.   Add your WeatherAPI API key in weatherapi.service.ts:
     ```bash
     private apiKey = 'YOUR_API_KEY';

5.   Start the development server:
     ```bash
     ng serve;

## Architecture

This project follows a basic Angular architecture, consisting of components, services, and modules.

1.   `AppComponents`:Main component that serves as the container for other components.

2.   `SearchComponents`:Main component that serves as the container for other components.

3.   `CurrentWeatherComponents`:Main component that serves as the container for other components.

4.   `ForecastComponents`:Main component that serves as the container for other components.


# Services

1.   `WeatherapiService`:Service for fetching weather data from the WeatherAPI.
    
# Modules

1.   `AppModule`:Root module that declares and imports all components and services used in the app.


## Key Angular Features

1. `Components`: Angular components are used to build the UI of the application, providing a modular and reusable way to organize the interface.

2. `Services`: Angular services are used to encapsulate the logic for fetching weather data from the API. This promotes separation of concerns and reusability.

3. `Data Binding`: Angular's data binding features are used for displaying dynamic content in the UI, such as weather data fetched from the API.

4. `Event Emitters`: Event emitters are used for communication between components. For example, the SearchComponent emits a search event that is caught by the AppComponent.

5. `HTTP Client`: Angular's HttpClient module is used for making HTTP requests to the WeatherAPI to fetch weather data.

6. `NgModel Directive`: NgModel directive is used for two-way data binding to bind input fields to component properties.

7. `NgIf Directive`: NgIf directive is used for conditionally rendering elements in the UI based on certain conditions.

8. `NgFor Directive`: NgFor directive is used for iterating over forecast data to display multiple forecast items.

9. `Styling`: Styling is done using SCSS to enhance the visual appeal of the application and google fonts too.

10. `CSS Frameworks`: framework it is been used Bootstrap.