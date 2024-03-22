let buttonClicked = false;

document.getElementById('searchButton').addEventListener("click", function(){
    const city= document.getElementById('cityInput').value;
    buttonClicked=true;
    if (city.trim() === ''){
        displayError('');
    } else {
        getWeather(city);
    }
    

});

async function getWeather(city){
    const apiKey = 'ac555f6bcb3f6fc21f14f22b13e7cca0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Could not fetch the weather data");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error){
        displayError(error.message);
    }

};

function displayWeather(data){
    const weatherDisplay = document.getElementById('weatherDisplay');


    weatherDisplay.textContent = '';

    const cityName = document.createElement("h2");
    cityName.textContent = `Weather in ${data.name}`;
    weatherDisplay.appendChild(cityName)

    const temperature = document.createElement("p");
    temperature.textContent = `Temperature is ${data.main.temp} °C`;
    weatherDisplay.appendChild(temperature)

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity is ${data.main.humidity}% `;
    weatherDisplay.appendChild(humidity)

    const conditions = document.createElement("p");
    conditions.textContent = `Conditions are ${data.weather[0].main} `;
    weatherDisplay.appendChild(conditions)

}

function displayError(message){
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.textContent = ''; // Clear previous content
    const errorMessage = document.createElement("p");

    // Check if the button has been clicked and the message indicates an empty input
    if(buttonClicked && (message === '' || message === 'Please enter a city')) {
        errorMessage.textContent = "Please enter a city";
    } else {
        errorMessage.textContent = `Error: ${message}`;
    }

    weatherDisplay.appendChild(errorMessage);
}