function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

api = "1ac4d22e01eeda543cf815afad893697";
fetch(`http://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&un
its=metric&APPID=${api}`)
  // Muunnetaan vastaus JSON muotoon
  .then(function (response) {
    return response.json();
  })
  // Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
    // kutsutaan saa-funktiota
    saa(responseJson);
  })
  // Jos tuli jokin virhe
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
  });
function saa(data) {
  var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
  // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
  let kuva = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  teksti = "<h1>" + data.name + "</h1>";
  teksti += "Sää" + data.weather[0].description + "<br>";
  teksti += `Lämpötila ${data.main.temp}&deg <br> Tuulen nopeus ${data.wind.speed} km/h`;
  teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";
  // tähän tulee muiden tietojen käsittely
  // teksti-muuttujan sisällön tulostus
  document.getElementById("vastaus").innerHTML = teksti;
}

//TAMPRERE
fetch(`http://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&un
its=metric&APPID=${api}`)
  // Muunnetaan vastaus JSON muotoon
  .then(function (response) {
    return response.json();
  })
  // Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
    // kutsutaan saa-funktiota
    tampere(responseJson);
  })
  // Jos tuli jokin virhe
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
  });
function tampere(data) {
  var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
  // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
  let kuva = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  teksti = "<h1>" + data.name + "</h1>";
  teksti += "Sää:" + data.weather[0].description + "<br>";
  teksti += ` Lämpötila ${data.main.temp}&deg <br> Tuulen nopeus ${data.wind.speed} km/h`;
  teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";
  // tähän tulee muiden tietojen käsittely
  // teksti-muuttujan sisällön tulostus
  document.getElementById("tampere").innerHTML = teksti;
}

