




  //  document.getElementById('place').innerHTML= weatherInfo.city.name;
  //  document.getElementById('currentTemp').innerHTML= weatherInfo.list[0].main.temp;
  //  document.getElementById('windSpeed').innerHTML= weatherInfo.list[0].wind.speed;

 //   const iconcode = weatherInfo.list[0].weather[0].icon;
  //  console.log(iconcode);

   // const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
  //  console.log(icon_path);

  //  document.getElementById('weather_icon').src = icon_path


    const d = new Date();
    console.log(d);

    const todayDayNumber = d.getDay();
   
    const weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=84057&appid=b088607253889469afa8ea43feff6187&units=imperial"

    fetch (apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("townName").textContent =
        weatherInfo.city.name;

        let mylist = weatherInfo.list;
            
        let forecastDayNumber = todayDayNumber;
        
        for (i = 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;

            if (time.includes('21:00:00')) {
                console.log("Found an entry with 21:00:00 in the time. It was report "+i+" from the mylist of 40");

                forecastDayNumber += 1;
                if (forecastDayNumber === 7){forecastDayNumber = 0;}
                console.log("forecast Day Number" + forecastDayNumber + "which is" + weekday[forecastDayNumber]);

                let theDayName = document.createElement("span");
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent= weatherInfo.list[i].main.temp + "\xB0";

                console.log("TEMPERATURE>"+ weatherInfo.list[i].main.temp);

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src=iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('weatherforecast').appendChild(theDay);
            }
         }

}); // end of .then
