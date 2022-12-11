fetch(
  "https://rata.digitraffic.fi/api/v1/live-trains/station/tpe?departing_trains=10&include_nonstopping=false"
)
  .then((response) => response.json())
  .then((data) => tapahtumat(data))
  .catch(
    (error) =>
      (document.getElementById("junat").innerHTML =
        "<p>Tietoa ei pystytä hakemaan</p>")
  );

tapahtumat = (data) => {
  let teksti = "";
  teksti = `<h2>Tampereen Tapahtumia</h2> <br>`;
  teksti += "Tampereella tänään pysähtyvät Lähi & Kaukojunat:" + "<br>"+"<br>"
  for(let i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].timeTableRows.length; j++) {
        if (data[i].timeTableRows[j].stationShortCode=="TPE") {
            if (data[i].trainCategory == "Long-distance") 
            teksti += "<p>Kaukojuna</p>"
            else 
            teksti += "<p>Lähijuna</p>"
            teksti += `<ul><li> ${data[i].timeTableRows[j].scheduledTime.slice(0,10)} Kello: ${data[i].timeTableRows[j].scheduledTime.slice(11,16)}</li></ul> <br>`
        }
    }
  }
  document.getElementById("junat").innerHTML = teksti;
  console.log(data);
};
