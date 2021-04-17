/**
 * Breite des Weltrasters
 *
 * @type {number}
 */
const breite = 9;

/**
 * Höhe des Weltrasters
 *
 * @type {number}
 */
const hoehe = 15;

/**
 * Weltraster
 * @type {null}
 */
let welt =  [];

/**
 * Aktueller Baustein/Tetromino das auf dem Raster fällt.
 *
 * @type {Tetromino}
 */
let tetro = null;


// Hier kommt dein Code:
//    - alle 800 millisekunden soll der Baustein nach unten geschoben werden
//    - Recherchiere die Javascript funktionen (`setTimeout`, `setInterval`)
//    - wenn die Position des Tetrominos größer ist als die Höhe des
//      Spielfelds, dann soll ein neuer Tetromino ins Spiel gebracht werden









//----

/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */


const tetroNachLinksBewegen = () => {
    if (tetro.kannNachLinks(welt)) {
        tetro.nachLinks();
    }
};

const tetroNachRechtsBewegen = () => {
    if (tetro.kannNachRechts(welt)) {
        tetro.nachRechts();
    }
};

const tetroNachUntenSchieben = () => {
    if (tetro.kannNachUnten(welt)) {
        tetro.nachUnten();
    }
};

const tastenEventsBehandeln = (event) => {
    switch (event.code) {
        case 'ArrowLeft':
            tetroNachLinksBewegen();
            break;
        case 'ArrowRight':
            tetroNachRechtsBewegen();
            break;
        case 'ArrowDown':
            tetroNachUntenSchieben();
            break;
        default:
            console.log(event.code);
    }

    // ------
    rasterAktualisieren();
    positionZeigen();
};

document.addEventListener('keyup', tastenEventsBehandeln);

// Generiert ein zufälligen Tetromino-Objekt
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);
    const zufaelligenStein = steine[Math.floor(Math.random() * steine.length)];
    const tetromino = Bausteine[zufaelligenStein];

    tetro = new Tetromino(1 - tetromino.length, 3, tetromino);
};

const positionZeigen = () => {
    document.querySelector('#tetro-zeile span').innerText = tetro.zeile;
    document.querySelector('#tetro-spalte span').innerText = tetro.spalte;
}

const darstellungAktualisieren = () => {
    weltRasterAktualisieren(welt, tetro);
    positionZeigen();
}

const starten = () => {
    welt = weltErzeugen(hoehe, breite);
    weltContainerInitialisieren(welt);
    naechstesBaustein();
    darstellungAktualisieren();
}

starten();