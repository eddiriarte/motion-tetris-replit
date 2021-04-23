/**
 * Die Bausteine im Tetris werden Tetrominos benannt. 
 * In der original Variante des Spiels wurden sieben Tetrominos definiert. 
 * Die Tetrominos werden Aufgrund ihrer Ähnlichkeit mit den lateinischen Buchstaben (T, I, O, L, J, S, Z) angesprochen.
 */

/**
 * ███ ███
 * ███ ███
 *
 * @type {number[][]}
 */
const O = [
    [1, 1],
    [1, 1],
];

/**
 * ███
 * ███
 * ███
 * ███
 *
 * @type {number[][]}
 */
const I = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
];

/**
 * ███
 * ███
 * ███ ███
 *
 * @type {number[][]}
 */
const L = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
];

/**
 *     ███
 *     ███
 * ███ ███
 *
 * @type {number[][]}
 */
const J = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1],
];

/**
 *     ███ ███
 * ███ ███
 *
 * @type {number[][]}
 */
const S = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
];

/**
 * ███ ███
 *     ███ ███
 *
 * @type {number[][]}
 */
const Z = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]
];

/**
 * ███ ███ ███
 *     ███
 *
 * @type {number[][]}
 */
const T = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];



/**
 * =================================================================
 * IHR BRAUCH EUCH NICHT UM DIESEN TEIL ZU KÜMMERN(IM MOMENT)!
 * =================================================================
 */

// Zeichnet einen Tetro im Vorschaukasten
const figurAnzeigen = (tetro) => {

    // Diese Schleife ist für die Zeilen im Raster
    for (let zeile = 0; zeile < 4; zeile++) {
        const indexY = tetro.length - 1 - zeile;

        // Diese Schleife ist für die Spalten im Raster
        for (let spalte = 0; spalte < 4; spalte++) {
            const id = 'vorschau_' + (3 - zeile) + '-' + spalte;
            const zelle = document.getElementById(id);

            if (zeile >= tetro.length || spalte >= tetro.length) {
                zelle.className = 'tetro';
                continue;
            }

            const wert = tetro[tetro.length - 1 - zeile][spalte];
            zelle.className = (wert < 1) ? 'tetro' : 'tetro gefuellt';
        }

    }

};