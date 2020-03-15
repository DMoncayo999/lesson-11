window.onload = init;

function init() {
    // Create a callback array at the begining of each page
    callbacks.forEach( f => f() );
}

//change message in banner
function banner() {
    messages = [
        "Saturday = Preston &#129374; Pancakes in the Park! 9 a.m. Saturday at the city park pavilion.",
        "Don't forget to go to Church this Sunday &#9962;"
        ]
    let today = new Date().getDay();
    let message = "";
    message = (today==5)? messages[0]: message;
    message = (today==6)? messages[1]: message;
    document.getElementById("alertBanner").innerHTML = message;

}

//toggle sandwiche menu
function toggleMenu () {    
    document.getElementById("primaryNav").classList.toggle("hide"); 
 }
 
//update day and time in webpage
 function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}

//rating storm slider
function adjustRating() {
    document.getElementById("ratingvalue").innerHTML = document.getElementById("rating").value;
}

let populateTowns = () => {
    // store the resource URL of the JSON
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    //use fetch() method to feed the required argument. First .then, returns a Promise. Second .then to work
    //with the converted response data in JS
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then( function (jsonObject) {
        // console.table(jsonObject);   ----checking for valid response and data parsing---
        //store the results of the converted response into an array
    const towns = jsonObject['towns'];
        //To produce the output. We create a loop
        for (let i = 0; i < towns.length; i++ ) {
          if (towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');      
            h2.textContent = towns[i].name; 
            card.appendChild(h2); 
            let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;
            card.appendChild(h3);
            let p = document.createElement('p');      
            p.innerHTML = 'Current Population: ' + towns[i].currentPopulation + '<br/><br/>Year Founded: ' 
            + towns[i].yearFounded + '<br/><br/>Average Rainfall: ' + towns[i].averageRainfall;
            card.appendChild(p);                                             
            let image = document.createElement('img');   
            image.setAttribute('src', 'images/' + towns[i].photo); 
            image.setAttribute('alt', towns[i].name); 
            card.appendChild(image);

            document.querySelector('.townsInfo').appendChild(card);
        
          }
        }
      })
      .catch( error => console.log(error) );
}

let eventsPreston = () => {
 
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then( function (jsonObject) {
      
  const towns = jsonObject['towns'];
      
      for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Preston") {
          let card = document.createElement('section');
          let p = document.createElement('p');      
          p.innerHTML = towns[i].events;
          card.appendChild(p);                                             
          let image = document.createElement('img');   
          image.setAttribute('src', 'images/' + towns[i].photo); 
          image.setAttribute('alt', towns[i].name); 
          card.appendChild(image);

          document.querySelector('.townsEvents').appendChild(card);
      
        }
      }
    })
    .catch( error => console.log(error) );
}

let eventsFishHaven = () => {
 
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then( function (jsonObject) {
      
  const towns = jsonObject['towns'];
      
      for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Fish Haven") {
          let card = document.createElement('section');
          let p = document.createElement('p');      
          p.innerHTML = towns[i].events;
          card.appendChild(p);                                             
          let image = document.createElement('img');   
          image.setAttribute('src', 'images/' + towns[i].photo); 
          image.setAttribute('alt', towns[i].name); 
          card.appendChild(image);

          document.querySelector('.townsEvents').appendChild(card);
      
        }
      }
    })
    .catch( error => console.log(error) );
}

let eventsSodaSp = () => {
 
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then( function (jsonObject) {
      
  const towns = jsonObject['towns'];
      
      for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Soda Springs") {
          let card = document.createElement('section');
          let p = document.createElement('p');      
          p.innerHTML = towns[i].events;
          card.appendChild(p);                                             
          let image = document.createElement('img');   
          image.setAttribute('src', 'images/' + towns[i].photo); 
          image.setAttribute('alt', towns[i].name); 
          card.appendChild(image);

          document.querySelector('.townsEvents').appendChild(card);
      
        }
      }
    })
    .catch( error => console.log(error) );
}