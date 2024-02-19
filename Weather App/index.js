// api.openweathermap.org/data/2.5/weather?q={city name}&appid=055cc3bc9e9a5385d884815e957c50f0
// var Key = "e4c70ce6a6821649a416cb9521d5f4f8";
var Key = "055cc3bc9e9a5385d884815e957c50f0";
// let city = "pune";

async function getWeatherData() {

    try {       
        let city = document.getElementById("city").value;
        // console.log(city);
        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${Key}&units=metric`);
        let res2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`);
        // console.log(res1);
        // console.log(res2);
    
        let data1 = await res1.json();
        let data2 = await res2.json();

        // console.log("data:", data1);
        // console.log("data:", data2);

        single(data2);
        seven(data1);

        document.getElementById("gmap_canvas").setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);

    }
    catch(err) {
        console.log(err);
    }
}

// getWeatherData();

function single(x) {
    // console.log(x, city);
    document.querySelector(".right").innerHTML = "";
    document.querySelector(".left").innerHTML = "";

    let div1 = document.createElement("div");
    div1.setAttribute("id", "punebox");

    let img1 = document.createElement("img");
    img1.setAttribute("src", "https://www.seekpng.com/png/full/11-114649_location-map-pin-icon-location-emoji-png.png");
    img1.setAttribute("id", "mark");

    var cityName = document.createElement("p");
    cityName.setAttribute("id", "pune");
    cityName.textContent = ` ${x.name}`;

    div1.append(img1, cityName);
    // document.getElementById("punebox").append(cityName);

    let date = new Date();
    // date.setAttribute("id", date);
    // date.toString
    // date.style.fontSize = "30px";
    // date.style.display = "block";


    let temp = document.createElement("p");
    temp.style.fontSize = "55px";
    temp.textContent = `Temp: ${x.main.temp} °C`;

    // if(x.main.temp <= 12 && x.main.temp > 0) {
    //     document.querySelector("#videoshow").setAttribute("src", "/videvostock009.mov");
    //     document.querySelector("body").style.color = "black";
    //     document.querySelector(".right").style.opacity = "0.8";
    //     document.querySelector(".left").style.opacity = "0.8";
    // }

    // else if(x.main.temp <= 0) {
    //     document.querySelector("#videoshow").setAttribute("src", "/4K_Real_Trees_Lighter_Colour_loop_Videvo.mp4");
    //     document.querySelector("body").style.color = "black";
    //     document.querySelector(".right").style.opacity = "0.8";
    //     document.querySelector(".left").style.opacity = "0.8";
    // }

    // else if(x.main.temp >= 18) {
    //     document.querySelector("#videoshow").setAttribute("src", "/Blue_Sky_and_Clouds_Timelapse_0892__Videvo.mov");
    //     document.querySelector("body").style.color = "black";
    //     document.querySelector(".right").style.opacity = "0.8";
    //     document.querySelector(".left").style.opacity = "0.8";
    // }

    // else if(x.main.temp >= 12 && x.main.temp < 18) {
    //     document.querySelector("#videoshow").setAttribute("src", "/Pexels Videos 2657691.mp4");
    //     document.querySelector("body").style.color = "white";
    //     document.querySelector(".right").style.opacity = "0.7";
    //     document.querySelector(".left").style.opacity = "0.7";
    // }


    // // 
    // else {
    //     document.querySelector("#videoshow").setAttribute("src", "/MoonandSeaHDFInalRenderH264.mov");
    //     document.querySelector("body").style.color = "white";
    //     document.querySelector(".right").style.opacity = "0.5";
    //     document.querySelector(".left").style.opacity = "0.5";
    // }

    let tempMax = document.createElement("p");
    tempMax.style.fontSize = "25px";
    tempMax.textContent = `Max. Temp: ${x.main.temp_max} °C`;

    let tempMin = document.createElement("p");
    tempMin.style.fontSize = "25px";
    tempMin.textContent = `Min. Temp: ${x.main.temp_min} °C`;

    let cloud = document.createElement("p");
    cloud.textContent = `Clouds: ${x.weather[0].description}`;
    cloud.style.fontSize = "20px";

    document.querySelector(".left").append(div1, date, temp, tempMax, tempMin, cloud);


    let hum = document.createElement("p");
    hum.textContent = `Humidity: ${x.main.humidity} %rh`;

    let pressure = document.createElement("p");
    pressure.textContent = `Pressure: ${x.main.pressure} millibars`;

    let seaLevel = document.createElement("p");
    seaLevel.textContent = `Sea Level: ${x.main.sea_level} millibars`;

    let wind = document.createElement("p");
    wind.textContent = `Wind Speed: ${x.wind.speed} km/h`;

    let cor = document.createElement("p");
    cor.textContent = "Coordinates :";
    cor.style.color = "red"
    cor.style.fontSize = "35px";
    cor.style.textDecoration = "underline"

    let lon = document.createElement("p");
    lon.textContent = `Longitude: ${x.coord.lon} ° E`;

    let lat = document.createElement("p");
    lat.textContent = `Latitute: ${x.coord.lat} ° N`;

    let visibility = document.createElement("p");
    visibility.textContent = `Visibility: ${x.visibility}`;

    document.querySelector(".right").append(hum, pressure, seaLevel, visibility,wind, cor, lon, lat);
}

function seven(y) {
    document.getElementById("down").innerHTML = "";
    // console.log(y);


    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekWeather = ["/cloud.png", "/cloudy (1).png", "/cloudy (2).png", "/cloudy-day.png", "/cloudy.png", "/sun.png", "/rainy-day.png"]

    let arr = y.list;
    // console.log(arr);

    arr.map(function(items, index) {
        // console.log(items);

        // const a = new Date();
        // let Day = weekday[a.getDay()];
        
        let  div= document.createElement('div');

        let Days = document.createElement('p');
        Days.innerHTML = weekday[index];
        Days.style.fontSize = "18px"

        let img = document.createElement("img");
        img.setAttribute("src", weekWeather[index]);
    
        let temp1 = document.createElement('p');
        temp1.innerText= `Min: ${items.main.temp_min}°C`;
    
        let tempmax1 = document.createElement('p');
        tempmax1.innerText= `Max: ${items.main.temp_max}°C`;
    
        
    
        div.append(Days, img, temp1, tempmax1, );

        document.getElementById("down").append(div);

    })
}


async function start() {

    try {
        let city1 = "pune";
        // console.log(city);
        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city1}&cnt=7&appid=${Key}&units=metric`);
        let res2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${Key}&units=metric`);
        // console.log(res1);
        // console.log(res2);
    
        let data1 = await res1.json();
        let data2 = await res2.json();

        // console.log("data:", data1);
        // console.log("data:", data2);

        singleStart(data2);
        sevenStart(data1);

        document.getElementById("gmap_canvas").setAttribute("src", `https://maps.google.com/maps?q=${city1}&t=&z=13&ie=UTF8&iwloc=&output=embed`);

    }
    catch(err) {
        console.log(err);
    }
}

function singleStart(x) {
    // console.log(x, city);

    let div1 = document.createElement("div");
    div1.setAttribute("id", "punebox");

    let img1 = document.createElement("img");
    img1.setAttribute("src", "https://www.seekpng.com/png/full/11-114649_location-map-pin-icon-location-emoji-png.png");
    img1.setAttribute("id", "mark");

    var cityName = document.createElement("p");
    cityName.setAttribute("id", "pune");
    cityName.textContent = ` ${x.name}`;

    div1.append(img1, cityName);
    // document.getElementById("pune").textContent = `${city}`;

    let date = new Date();
    // date.setAttribute("id", date);
    // date.toString
    // date.style.fontSize = "30px";
    // date.style.display = "block";


    let temp = document.createElement("p");
    temp.style.fontSize = "55px";
    temp.textContent = `Temp: ${x.main.temp} °C`;

    let tempMax = document.createElement("p");
    tempMax.style.fontSize = "25px";
    tempMax.textContent = `Max. Temp: ${x.main.temp_max} °C`;

    let tempMin = document.createElement("p");
    tempMin.style.fontSize = "25px";
    tempMin.textContent = `Min. Temp: ${x.main.temp_min} °C`;

    let cloud = document.createElement("p");
    cloud.textContent = `Clouds: ${x.weather[0].description}`;
    cloud.style.fontSize = "20px";

    document.querySelector(".left").append(div1, date, temp, tempMax, tempMin, cloud);


    let hum = document.createElement("p");
    hum.textContent = `Humidity: ${x.main.humidity} %rh`;

    let pressure = document.createElement("p");
    pressure.textContent = `Pressure: ${x.main.pressure} millibars`;

    let seaLevel = document.createElement("p");
    seaLevel.textContent = `Sea Level: ${x.main.sea_level} millibars`;

    let wind = document.createElement("p");
    wind.textContent = `Wind Speed: ${x.wind.speed} km/h`;

    let cor = document.createElement("p");
    cor.textContent = "Coordinates :";
    cor.style.color = "red"
    cor.style.fontSize = "35px";
    cor.style.textDecoration = "underline"

    let lon = document.createElement("p");
    lon.textContent = `Longitude: ${x.coord.lon} ° E`;

    let lat = document.createElement("p");
    lat.textContent = `Latitute: ${x.coord.lat} ° N`;

    let visibility = document.createElement("p");
    visibility.textContent = `Visibility: ${x.visibility}`;

    document.querySelector(".right").append(hum, pressure, seaLevel, visibility, wind, cor, lon, lat);
}

function sevenStart(y) {
    // console.log(y);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekWeather = ["/cloud.png", "/cloudy (1).png", "/cloudy (2).png", "/cloudy-day.png", "/cloudy.png", "/sun.png", "/rainy-day.png"]

    let arr = y.list;
    // console.log(arr);

    arr.map(function(items, index) {
        // console.log(items);

        // const a = new Date();
        // let Day = weekday[a.getDay()];
        
        let  div= document.createElement('div');

        let Days = document.createElement('p');
        Days.innerHTML = weekday[index];
        Days.style.fontSize = "18px"

        let img = document.createElement("img");
        img.setAttribute("src", weekWeather[index]);
    
        let temp1 = document.createElement('p');
        temp1.innerText= `Min: ${items.main.temp_min}°C`;
    
        let tempmax1 = document.createElement('p');
        tempmax1.innerText= `Max: ${items.main.temp_max}°C`;
    
        
    
        div.append(Days, img, temp1, tempmax1, );

        document.getElementById("down").append(div);

    });
}

start();
