let btn = document.querySelector('button')
let input = document.querySelector('input')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let weather = document.querySelector('.weather')



btn.addEventListener('click',(e)=>{
    e.preventDefault()
    weather.innerHTML=''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5867d88ceb8b86174a687db068ee442a`)
    .then((res)=>res.json())
    .then((data)=>{
       
        weather.innerHTML = `
        <div class="weather__top">
        <div class="weather__left">
            <h3>Current</h3>
            <h3 class="city">${data.name}</h3>
        </div>
        <h2 class="temp">${Math.round(data.main.temp - 273.15)} C</h2>
    </div>
    <h1 class="desc">${data.weather[0].description}</h1>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <div class="weather__bottom">
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
        <div class="weather__card">
            <p>Wind:${data.wind.speed}</p>
            <p>mph E</p>
        </div>
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
    </div>
        `

    })
})
