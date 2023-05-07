const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '860df6c3eemsh3a3058d555c6f73p100c9ejsn35e346b55c1b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response =>{ 
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        feels_like.innerHTML = response.feels_like
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
    }
    
        )
    .catch(err => console.error(err));
}

submits.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response =>{ 
        console.log(response)

        dcloud_pct.innerHTML = response.cloud_pct
        dtemp.innerHTML = response.temp
        dhumidity.innerHTML = response.humidity
        dmin_temp.innerHTML = response.min_temp
        dmax_temp.innerHTML = response.max_temp
        dwind_speed.innerHTML = response.wind_speed
        dwind_degrees.innerHTML = response.wind_degrees
    }
    
        )
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response =>{ 
        console.log(response)

        ncloud_pct.innerHTML = response.cloud_pct
        ntemp.innerHTML = response.temp
        nhumidity.innerHTML = response.humidity
        nmin_temp.innerHTML = response.min_temp
        nmax_temp.innerHTML = response.max_temp
        nwind_speed.innerHTML = response.wind_speed
        nwind_degrees.innerHTML = response.wind_degrees
    }
    
        )
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response =>{ 
        console.log(response)

        scloud_pct.innerHTML = response.cloud_pct
        stemp.innerHTML = response.temp
        shumidity.innerHTML = response.humidity
        smin_temp.innerHTML = response.min_temp
        smax_temp.innerHTML = response.max_temp
        swind_speed.innerHTML = response.wind_speed
        swind_degrees.innerHTML = response.wind_degrees
    }
    
        )
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then(response =>{ 
        console.log(response)

        tcloud_pct.innerHTML = response.cloud_pct
        ttemp.innerHTML = response.temp
        thumidity.innerHTML = response.humidity
        tmin_temp.innerHTML = response.min_temp
        tmax_temp.innerHTML = response.max_temp
        twind_speed.innerHTML = response.wind_speed
        twind_degrees.innerHTML = response.wind_degrees
    }
    
        )
    .catch(err => console.error(err));