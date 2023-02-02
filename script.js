const omMig = {
  navn: "Amalie",
  køn: "Kvinde",
  ynglingsfarve: "Beige",
};

//Step 1: Vælg (select) <template> content fra HTML og gem den i en const
const skabelon = document.querySelector("#minSkabelon").content;

//Step 2: Lav en "clone" af templatens content
const klon = skabelon.cloneNode(true);

//Step 3: Ændr indholdet i clon'en til data i object'et ovenover
klon.querySelector("h1").textContent = omMig.navn;
klon.querySelector("h2").textContent = omMig.køn;
klon.querySelector("p").textContent = omMig.ynglingsfarve;

//Step 4: Vælg <main> fra HTML og gem den i en const
const parentElement = document.querySelector("main");

//Step 5: Tilføj (Append) den modificerede clon til DOM
parentElement.appendChild(klon);
