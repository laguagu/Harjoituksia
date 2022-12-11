fetch("https://tie.digitraffic.fi/api/v1/data/camera-data")
  .then((response) => response.json())
  .then((data) => kamera(data))
  .catch(
    (error) =>
      (document.getElementById("kamera").innerHTML =
        "<p>Tietoa ei pystytä hakemaan</p>")
  );

kamera = (data) => {
  let teksti = "";
  teksti = `<h2>Kamera</h2> <br>`;
  for (let i = 0; i < data.cameraStations.length; i++) {
    for (let j = 0; j < data.cameraStations[i].cameraPresets.length; j++) {
      if (
        data.cameraStations[i].cameraPresets[j].presentationName ==
          "Tie 3 Tampereelle" ||
        data.cameraStations[i].cameraPresets[j].presentationName == "Tie 3"
      ) {
        teksti += `<h1>${data.cameraStations[i].cameraPresets[j].presentationName}</h1>`;
        teksti += `<p>${data.cameraStations[i].cameraPresets[j].imageUrl}</p>`;
        teksti += `<p>${data.cameraStations[i].cameraPresets[j].measuredTime}</p>`;
        kuva = `${data.cameraStations[i].cameraPresets[j].imageUrl}`;
        teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";
      }
    }
  }
  document.getElementById("kamera").innerHTML = teksti;
  console.log(data);
};
