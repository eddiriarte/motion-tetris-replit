const tetris = new Tetris();

const neueLeereZeile = (breite, wert = 0) => (new Array(breite)).fill(wert);

tetris.zeileAbbauen = function () {
    let total = 0;

    for (let zeile = 0; zeile < this.welt.length; zeile++) {

        // prüft ob die Zeile vollstandig ist
        if (this.welt[zeile].some((spalte) => spalte === 0)) {
            continue;
        }

        // zählt die Anzahl an volle Zeilen
        total++;

        // 🔥🔥🔥 Splice kann Zeilen komplett ersetzen oder gar löschen!!!
        const volleZeile = neueLeereZeile(this.welt.length, 10);
        this.welt.splice(zeile, 1, volleZeile);
        this.aktualisieren();

        setTimeout(function (zeile) {
            // 1. benutze `splice` um die Zeile zu löschen.
            // 2. füge eine neue Zeile oben auf dem Welt raster.
            // 3. vergiss nicht die Anzeige zu aktualisieren





            // -----
        }.apply(this, [zeile]), 50 + (50 * total));

    }
};

tetris.starten();