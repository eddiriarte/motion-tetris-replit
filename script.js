const tetris = new Tetris();

tetris.loescheZeilen = function (volleZeilen) {
    for (let x = 0; x < volleZeilen.length; x++) {
        const zeile = volleZeilen[x];

        this.welt.splice(zeile, 1, (new Array(tetris.breite)).fill(10));

        // TODO: Addiere 100 Punkte zum aktuellen Punktestand und erhöhe den Zeilenzähler.

        this.aktualisieren();
        setTimeout(() => { loescheWeltZeile(zeile, this); }, 70 + (70 * x));
    }
};


tetris.starten();