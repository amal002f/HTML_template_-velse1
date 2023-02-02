const omMig = {
  navn: "Amalie",
  køn: "Kvinde",
  ynglingsfarve: "Beige",
};

const skabelon = document.querySelector("#minSkabelon").content;

const klon = skabelon.cloneNode(true);

klon.querySelector("h1").textContent = omMig.navn;
klon.querySelector("h2").textContent = omMig.køn;
klon.querySelector("p").textContent = omMig.ynglingsfarve;

const parentElement = document.querySelector("main");

parentElement.appendChild(klon);
