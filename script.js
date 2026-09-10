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

let currentIndex = 0;
let isDialogOpen = false;

/* GALLERY */

function init() {
  renderGallery();
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  for (let i = 0; i < clubImages.length; i++) {
    gallery.innerHTML += getThumbnailPreview(i);
  }
}

function getThumbnailPreview(index) {
  return `
    <button class="thumbnail" id="thumbnail-${index}" onclick="openDialog(${index})"
            aria-label="${clubImageTitles[index]} in Großansicht öffnen">
      <img src="./img/${clubImages[index]}" alt="${clubImageAlts[index]}">
    </button>`;
}

/* DIALOG */ 

function openDialog(index) {
  const overlay = document.getElementById("dialogOverlay");
  currentIndex = index;
  isDialogOpen = true;
  overlay.innerHTML = getDialogTemplate();
  overlay.classList.remove("d-none");
  document.getElementById("dialogClose").focus();
}

function closeDialog() {
  const overlay = document.getElementById("dialogOverlay");
  isDialogOpen = false;
  overlay.classList.add("d-none");
  overlay.innerHTML = "";
  document.getElementById("thumbnail-" + currentIndex).focus();
}

function getDialogTemplate() {
  return `
    <article class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialogTitle"
             onclick="event.stopPropagation()">
      <header class="dialog-header">
        <h2 class="dialog-title" id="dialogTitle">${clubImageTitles[currentIndex]}</h2>
        <button class="dialog-close" id="dialogClose" onclick="closeDialog()" aria-label="Ansicht schließen">
          <img src="./icon/close.svg" alt="close icon">
        </button>
      </header>
      <img class="dialog-image" id="dialogImage" src="./img/${clubImages[currentIndex]}"
           alt="${clubImageAlts[currentIndex]}">
      ${getDialogControlsTemplate()}
    </article>`;
}

function getDialogControlsTemplate() {
  return `
    <nav class="dialog-controls" aria-label="Bildnavigation">
      <button class="dialog-button dialog-button-previous" onclick="showPrevious()" aria-label="Vorheriges Bild">
        <img src="./icon/arrow.svg" alt="Pfeil nach links">
      </button>
      <span class="dialog-counter" id="dialogCounter">${getCounterText()}</span>
      <button class="dialog-button" onclick="showNext()" aria-label="Nächstes Bild">
        <img src="./icon/arrow.svg" alt="Pfeil nach rechts">
      </button>
    </nav>`;
}

function getCounterText() {
  return (currentIndex + 1) + "/" + clubImages.length;
}

function showNext() {
  currentIndex = currentIndex + 1;
  if (currentIndex > clubImages.length - 1) {
    currentIndex = 0;
  }
  updateDialog();
}

function showPrevious() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = clubImages.length - 1;
  }
  updateDialog();
}

function updateDialog() {
  const IMAGE = document.getElementById("dialogImage");
  document.getElementById("dialogTitle").innerHTML = clubImageTitles[currentIndex];
  IMAGE.setAttribute("src", "./img/" + clubImages[currentIndex]);
  IMAGE.setAttribute("alt", clubImageAlts[currentIndex]);
  document.getElementById("dialogCounter").innerHTML = getCounterText();
}

function handleKeyDown(event) {
  if (!isDialogOpen) {
    return;
  }
  if (event.key === "Escape") {
    closeDialog();
  } else if (event.key === "ArrowLeft") {
    showPrevious();
  } else if (event.key === "ArrowRight") {
    showNext();
  }
}
