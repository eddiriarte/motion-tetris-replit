const O =  [
    [1, 1],
    [1, 1],
];

const I = [
    [0],
];

const L = [
    [0],
];

const J = [
    [0],
];

const S = [
    [0],
];

const Z = [
    [0],
];

const T = [
    [0],
];



/**
 * =================================================================
 * IHR BRAUCH EUCH NICHT UM DIESEN TEIL ZU KÜMMERN IM MOMENT!
 * =================================================================
 */

// Zeichnet einen Tetro in der Vorschaubox
const figurAnzeigen = (tetro) => {
  console.log('....', tetro)
    for (let zeile = 0; zeile < 4; zeile++) {
        const indexY = tetro.length - 1 - zeile;
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

// Globale Variablen/Funktionen werden an das `window` Objekt geknüpft
/*Object.assign(window, {
    O,
    I,
    L,
    J,
    S,
    Z,
    T,
    figurAnzeigen
});*/