// store the resource URL of the JSON


let populateWeather = () => {

   // const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

    //Go fetch it and then wait for a response.
    fetch(weatherapiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        //Once it comes back, display it to the console.
        //console.log(weatherInfo);
        document.getElementById('description').innerHTML = weatherInfo.weather[0].description;
        document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
        document.getElementById('temp').innerHTML = (weatherInfo.main.temp).toFixed(0);
        document.getElementById('speed').innerHTML = (weatherInfo.wind.speed * 0.000621371 * 3600).toFixed(0);
        document.getElementById('chill').innerHTML = 
                updateWindChill( parseFloat(weatherInfo.main.temp), parseFloat(weatherInfo.wind.speed) );
        
    }); //end of "then" arrow function
}

//calculate windchill 
const updateWindChill = ( temp, windSpeed ) => {
    let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) 
    + (0.4275 * temp * Math.pow(windSpeed, 0.16));
    windchill = Math.round( windchill );
    if(temp <= 50 && windSpeed > 3) {
        return windchill;
    } else {
        return "N/A";
    }
}

// forecast for 7 days
    let populateForecast = () => {

    const d = new Date();

    const todayDayNumber = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

  //  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

    fetch(forecastURL)
    .then( (response) => response.json())
    .then( (forecastinfo) => {
   //console.log(forecastinfo);


    let mylist = forecastinfo.list;

                let forecastDayNumber = todayDayNumber;

                for (i=0; i < mylist.length; i++) {

                    let time = mylist[i].dt_txt;

                    if (time.includes('18:00:00')) {
                           //console.log("Found an entry with 18:00:00 in the time. It was report "+i+" from the mylist of 40");
                            forecastDayNumber += 1;
                            if (forecastDayNumber === 7){forecastDayNumber = 0;}
                            
                            let theDayName = document.createElement("h4");
                            theDayName.textContent = weekday[forecastDayNumber];

                            let theTemp = document.createElement("p");
                            theTemp.textContent = `${(forecastinfo.list[i].main.temp).toFixed(0)}°F`;

                            let iconcode = forecastinfo.list[i].weather[0].icon;
                            let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                            let theicon = document.createElement ('img');
                            theicon.src = iconPath;
                            theicon.alt = "weather icon";

                            let theDay = document.createElement ("div");
                            theDay.appendChild(theDayName);
                            theDay.appendChild(theTemp);
                            theDay.appendChild(theicon);

                            document.getElementById('fiveDayForecast').appendChild(theDay);

                            } //end if
                        
                            } //end for

    }); 
}  // end of "then" arrow function 