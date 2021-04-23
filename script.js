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
 * @type Tetromino
 */
let tetro = [];


const tetroNachLinksBewegen = () => {
    // TODO: prüfen ob die Ränder erreicht wurden.
    //       alternativ kannst du die Prüfung direkt
    //       aus der Klasse Tetromino implementieren.
    tetro.nachLinks();
};

const tetroNachRechtsBewegen = () => {
    // TODO: prüfen ob die Ränder erreicht wurden.
    //       alternativ kannst du die Prüfung direkt
    //       aus der Klasse Tetromino implementieren.
    tetro.nachRechts();
};

const tetroNachUntenSchieben = () => {
    // TODO: prüfen ob die Ränder erreicht wurden.
    //       alternativ kannst du die Prüfung direkt
    //       aus der Klasse Tetromino implementieren.
    tetro.nachUnten();
};



/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */

document.addEventListener('keyup', (event) => {
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
});

    // Erzeugt die `welt` Matrix
const weltErzeugen = () => {
        welt = (new Array(hoehe)).fill((new Array(breite)).fill(0));
    };

// Generiert ein zufälligen Tetromino-Objekt
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);
    const zufaelligenStein = steine[Math.floor(Math.random() * steine.length)];

    tetro = new Tetromino(3, 3, Bausteine[zufaelligenStein]);
};

// aktualisiert die Darstellung auf dem Browser
const rasterAktualisieren = () => {
    const weltContainer = document.getElementById('welt');

    for (let zeile = 0; zeile < hoehe; zeile++) {
        for (let spalte = 0; spalte < breite; spalte++) {
            const zelle = document.getElementById(`welt_${zeile}-${spalte}`);
            zelle.classList.remove('gefuellt');

            if (tetro.istNichtAufZelle(zeile, spalte)) {
                continue;
            }

            const tetroZelle = tetro.zelle(zeile, spalte);
            if (tetroZelle > 0) {
                zelle.classList.add('gefuellt');
            }

        }
    }
};

// initialisiert den Weltraster
const weltContainerInitialisieren = () => {
    const weltContainer = document.getElementById('welt');
    weltContainer.innerHTML = welt
        .map(
            (zellen, y) => zellen.reduce(
                (spalten, _, x) => `${spalten}<div id="welt_${y}-${x}" class="tetro"></div>`, ''
            )
        )
        .join('<br>');
}

const positionZeigen = () => {
    document.querySelector('#tetro-zeile span').innerText = tetro.zeile;
    document.querySelector('#tetro-spalte span').innerText = tetro.spalte;
}

const reset = () => {
    naechstesBaustein();
    rasterAktualisieren();
    positionZeigen();
}

const starten = () => {
    tetro = null;
    weltErzeugen();
    weltContainerInitialisieren();
    reset();
}

starten();