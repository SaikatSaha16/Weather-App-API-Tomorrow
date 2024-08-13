async function getWeather() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiKey = 'ija5J8RphZFbiA46qH5C1gketsDHSePu';
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`;
    
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((data) => {
        data.json().then((dt) => {
            console.log(JSON.stringify(dt));
            const tempDiv = document.getElementById('temp-div');
            const temperature = dt.data.values.temperature;
    
            if (temperature) {
                tempDiv.innerHTML = `Temperature: ${temperature}°C`;
            } else {
                tempDiv.innerHTML = 'Temperature data not available';
            }
        })

        
    })
    .catch(err => {
        console.error(err);
        alert('Error fetching weather data');
    });
}