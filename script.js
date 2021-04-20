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
 * @type {*[]}
 */
let tetro = [];

/**
 * Die Koordinaten/Position des Bausteins auf dem Raster.
 *
 * @type {{zeile: number, spalte: number}}
 */
const position = {
    zeile: 3,
    spalte: 3
};

/**
 * @TODO Vervöllständige diese Funktion
 */
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);

    // Zufällige Zahl zwischen "0 - Anzahl-Steine"
    const index = Math.floor(Math.random() * steine.length);

    // Name des Steins
    const key = steine[index];

    tetro = Bausteine[key];

    rasterAktualisieren();
};

/**
 * @TODO Finde den Fehler und behebe es
 */
const rasterAktualisieren = () => {
    const weltContainer = document.getElementById('welt');

    for (let zeile = 0; zeile < hoehe; zeile++) {
        for (let spalte = 0; spalte < breite; spalte++) {
            const zelle = document.getElementById(`welt_${zeile}-${spalte}`);
            zelle.classList.remove('gefuellt');

            const y = zeile - position.zeile;
            const x = spalte - position.spalte;
            if (x < 0 || x >= tetro.length || y < 0 || y >= tetro.length) {
                continue;
            }

            const tetroZelle = tetro[y][x];
            if (tetroZelle < 1) {
                zelle.classList.add('gefuellt');
            }

        }
    }
};

/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */

// Erzeugt die `welt` Matrix
const weltErzeugen = () => {
    welt = (new Array(hoehe)).fill((new Array(breite)).fill(0));
};

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

const zeileSetzen = (zeile) => {
    position.zeile = zeile;
    rasterAktualisieren();
}

const spalteSetzen = (spalte) => {
    position.spalte = spalte;
    rasterAktualisieren();
}

const starten = () => {
    tetro = null;
    weltErzeugen();
    weltContainerInitialisieren();
}

starten();