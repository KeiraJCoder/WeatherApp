# WeatherApp

Weather Dashboard Mini Project Instructions
Important Note for Students: Do not copy and paste the code provided below. Type out each line from scratch to improve your understanding of how it works.

Project Setup
1. Create an HTML File

Task: Create a new file named index.html.
Purpose: This file will serve as the front end of your weather dashboard.
Action:
Open your text editor or IDE.
Create a new file and save it as index.html.
2. Add Basic HTML Structure

Task: Type out the basic structure of an HTML document.
Purpose: Establishes the skeleton of your web page.
Action: Inside index.html, type:
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather Dashboard</title>
</head>
<body>
</body>
</html>
3. Insert User Input Elements

Task: Add HTML elements for user input.
Purpose: Allows users to enter a city name and submit it for a weather lookup.
Action: Inside the <body> tags, add:
html
Copy code
<input type="text" id="cityInput" placeholder="Enter city name">
<button id="searchButton">Get Weather</button>
<div id="weatherDisplay"></div>
JavaScript Integration
4. Create a JavaScript File

Task: Create a new file named script.js.
Purpose: This file will contain your JavaScript code to fetch and display weather data.
Action:
In the same directory as your HTML file, create a new file.
Save this file as script.js.
5. Link JavaScript to HTML

Task: Connect your JavaScript file to your HTML.
Purpose: Ensures your HTML page can run your JavaScript code.
Action: At the end of your <body> in index.html, add:
html
Copy code
<script src="script.js"></script>
Fetching Weather Data
6. Listen for Button Click

Task: Add an event listener to the "Get Weather" button.
Purpose: Triggers the weather fetch process when the button is clicked.
Action: In script.js, add:
javascript
Copy code
document.getElementById('searchButton').addEventListener("click", function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city); // We'll define this function next.
});
7. Define the getWeather Function

Task: Create a function to fetch weather data from an API.
Purpose: Retrieves weather data for the specified city.
Action: Below your event listener in script.js, start typing:
javascript
Copy code
async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Use your actual API key here
    // We'll continue this in the next step.
}
Note: You'll get the API key by signing up at OpenWeatherMap.
8. Fetch Weather Data

Task: Complete the getWeather function to make an API call.
Purpose: Fetches and processes the weather data.
Action: Continue in script.js:
javascript
Copy code
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Could not fetch the weather data");
    }
    const data = await response.json();
    displayWeather(data); // This function will display the data.
} catch (error) {
    console.error("Fetch error:", error);
}
9. Display Weather Data

Task: Create a function to display the fetched weather information.
Purpose: Shows weather details on the webpage.
Action: Define displayWeather in script.js:
javascript
Copy code
function displayWeather(data) {
    // This function will create and append HTML elements to show the weather.
    // Example:
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.textContent = `Temperature in ${data.name}: ${data.main.temp}°C`;
    // Add more details as needed.
}
By breaking down the
