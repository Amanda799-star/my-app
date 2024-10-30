
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let d =new Date();
    let days=day[d.getDay()];
    let hours= d.getHours();
    let minutes= d.getMinutes();
    let date=document.querySelector("#time");
    date.innerHTML=`${days} ${hours}:${minutes}`;


    function searchEngine(response){
      let temp=Math.round(response.data.temperature.current);
      let getCity=document.querySelector("h1")
      let weather=document.querySelector("#number")
      let humidity = response.data.temperature.humidity
      let cold=document.querySelector("#humid");
      getCity.innerHTML=response.data.city;
      weather.innerHTML=`${temp}  ℃`;
      cold.innerHTML=`${humidity}%`;
    
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