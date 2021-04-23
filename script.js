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
        case 'ArrowUp':
            tetro.drehen(welt);
            break;
        default:
            console.log(event.code);
    }

    // ------
    rasterAktualisieren();
    positionZeigen();
};

/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */

const tetrisSchleife = () => {
    setTimeout(() => {
        if ((tetro.zeile + tetro.muster.length) < welt.length) {
            tetroNachUntenSchieben();
        } else {
            naechstesBaustein();
        }

        rasterAktualisieren();
        tetrisSchleife();
    }, 800);
};

tetrisSchleife();


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

const rasterAktualisieren = () => {
    weltRasterAktualisieren(welt, tetro);
    positionZeigen();
}

const starten = () => {
    welt = weltErzeugen(hoehe, breite);
    weltContainerInitialisieren(welt);
    naechstesBaustein();
    rasterAktualisieren();
}

starten();