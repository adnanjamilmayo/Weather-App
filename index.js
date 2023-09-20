const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openeathermap.org/data/2.5/weather?units=metric&q=lahore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;
}
checkWeather();

