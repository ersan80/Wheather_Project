const button = document.querySelector("button");
const input = document.querySelector("input");
const cities = document.querySelector(".cities");
const container = document.querySelectorAll(".container")[1];

button.addEventListener("click", (e) => {
  getWeat(input.value);

  e.preventDefault();
});

 function getWeat(city) {
  const date = new Date();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87ccce29bc06866b28cb713954e0f333`
  )
    .then((res) => res.json())
    .then(
      (data) =>
        (container.innerHTML += `
                                           <div class="card" style="width: 15rem; margin: 5px;">
                                           <img src="https://media-cdn.t24.com.tr/media/library/2019/11/1572796338506-untitled-1.jpg" class="card-img-top" alt="...">
                                           <div class="card-body">
                                             <h5 class="card-title">City ${
                                               input.value
                                             } <br/> <hr> ${date.getDate()}/0${date.getMonth()}/${date.getFullYear()}<hr> <br/>Weather Forecast Report</h5>
                                             <hr>
                                             <p class="card-text"> Maks Temp ${Math.round(
                                               data.main.temp_max - 272
                                             )}°C <hr> Min Temp ${Math.round(
          data.main.temp_min - 272
        )}°C <hr> Sky Condition ${data.weather[0].description} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloudy" viewBox="0 0 16 16">
  <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973zM8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 5.5z"/>
</svg><hr> <br/>Wind Condition ${data.wind.speed} knot/h</p>
                                           </div> `)
    );
} 


