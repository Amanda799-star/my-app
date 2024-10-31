function formatDate(date) {
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let days = day[d.getDay()];
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if (minutes < 10) {
        minutes=`0${minutes}`
    }
    return`${days}${hours}:${minutes}`
}


    function searchEngine(response){
    let temp=Math.round(response.data.temperature.current);
    let getCity=document.querySelector("h1")
    let weather=document.querySelector("#number")
    let humidity = response.data.temperature.humidity
    let windspeed = response.data.wind.speed
    let date = new Date(response.data.time * 1000);
    let time = document.querySelector("#time");
    let wind=document.querySelector("#wind")
        let cold = document.querySelector("#humid");
        let weatherIcon = document.querySelector("#icon");
        let condition = response.data.condition.description
        let tempCondition = document.querySelector("#cloud-condition");
        tempCondition.innerHTML = condition;
        weatherIcon.innerHTML=`<img src="${response.data.condition.icon_url}" id="icon" />`;

    time.innerHTML = formatDate(date);
    getCity.innerHTML=response.data.city;
    weather.innerHTML=`${temp}  ℃`;
    cold.innerHTML = `${humidity}%`;
    wind.innerHTML = `${windspeed}KM/hr`;
    
console.log(response.data)
    }

function myForm(event){
    event.preventDefault();
let searchForm=document.querySelector("#input")
let city=searchForm.value



let apiurl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=3adfat7038a3b8f55f4do5846b4c6a7d&units=metric`;
 axios.get(apiurl).then(searchEngine);
}

let form =document.querySelector("#form");
form.addEventListener("submit",myForm);