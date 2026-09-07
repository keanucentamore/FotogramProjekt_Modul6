/* Die drei Arrays gehoeren zeilenweise zusammen: 
   gleicher Index = gleiches Foto. */

const clubImages = [
  "a_snrs_eingang-baustelle.webp",
  "b_snrs_aussenbereich-baustelle_eins.webp",
  "c_snrs_innenbereich_baustelle_eins.webp",
  "d_snrs_aussenbereich_baustelle_zwei.webp",
  "e_snrs_innenbereich_baustelle_zwei.webp",
  "f_snrs_aussenbereich_baustelle_drei.webp",
  "g_snrs_innenbereich_baustelle_drei.webp",
  "h_snrs_innenbereich_baustelle_vier.webp",
  "i_snrs_eingang_fertig.webp",
  "j_snrs_aussenbereich_fertig_2025.webp"
];

const clubImageTitles = [
  "Eingang in der Bauphase",
  "Außenbereich Bauphase 1",
  "Innenbereich Bauphase 1",
  "Außenbereich Bauphase 2",
  "Innenbereich Bauphase 2",
  "Außenbereich Bauphase 3",
  "Innenbereich Bauphase 3",
  "Innenbereich Bauphase 4",
  "Eingang nach der Fertigstellung",
  "Außenbereich nach der Fertigstellung 2025"
];

const clubImageAlts = [
  "Eingangsbereich während der Bauarbeiten",
  "Außenbereich während der ersten Bauphase",
  "Innenbereich während der ersten Bauphase",
  "Außenbereich während der zweiten Bauphase",
  "Innenbereich während der zweiten Bauphase",
  "Außenbereich während der dritten Bauphase",
  "Innenbereich während der dritten Bauphase",
  "Innenbereich während der vierten Bauphase",
  "Fertiggestellter Eingangsbereich",
  "Fertiggestellter Außenbereich im Jahr 2025"
];

/* Startet die Seite, sobald das HTML geladen ist. */
function init() {
  renderGallery();
}

/* Schreibt alle Vorschaubilder in den Galerie-Container. */
function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  for (let i = 0; i < clubImages.length; i++) {
    gallery.innerHTML += getThumbnailPreview(i);
  }
}

/* Liefert das HTML eines einzelnen Vorschaubildes. */
function getThumbnailPreview(index) {
  return `
    <button class="thumbnail" id="thumbnail-${index}" onclick=""
            aria-label="${clubImageTitles[index]} in Großansicht öffnen">
      <img src="./img/${clubImages[index]}" alt="${clubImageAlts[index]}">
    </button>`;
}