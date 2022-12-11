// //TAMPRERE
// fetch(`https://visittampere.fi/api/v1/location`)
//   // Muunnetaan vastaus JSON muotoon
//   .then(function (response) {
//     return response.json();
//   })
//   // Käsitellään muunnettu (eli JSON muotoinen) vastaus
//   .then(function (responseJson) {
//     // kutsutaan saa-funktiota
//     tampere(responseJson);
//   })
//   // Jos tuli jokin virhe
//   .catch(function (error) {
//     document.getElementById("tapahtumat").innerHTML =
//       "<p>Tietoa ei pystytä hakemaan</p>";
//   });
// function tampere(data) {
//   var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään
//   // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiins
//   teksti = "<h1>" + data[0].id + "</h1>";
//   // tähän tulee muiden tietojen käsittely
//   // teksti-muuttujan sisällön tulostus
//   document.getElementById("tapahtumat").innerHTML = teksti;
// }

fetch("https://visittampere.fi/api/v1/event")
  .then((response) => response.json())
  .then((data) => tapahtumat(data))
  .catch(
    (error) =>
      (document.getElementById("tapahtumat").innerHTML =
        "<p>Tietoa ei pystytä hakemaan</p>")
  );

tapahtumat = (data) => {
  let teksti = "";
  teksti = `<h2>Tampereen Tapahtumia</h2> <br>`;
  for (let i = 0; i < 3; i++) {
    teksti += "<h2>" + data[i].title + "</h2>";
    teksti += ` <p>${data[i].title}</p>`;
    teksti += ` <p>${data[i].description}</p>`;
    if (data[i].contact_info.address !== null) {
      teksti += `<p> ${data[i].contact_info.address} </p>`;
    }
  }
  document.getElementById("tapahtumat").innerHTML = teksti;
  console.log(data);
};
