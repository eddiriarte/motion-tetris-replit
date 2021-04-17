const tetris = new Tetris();

/**
 * Tetromino auf `welt` ablegen/einfrieren
 *    - Das object `this` hat viele `Tetris` eigenschaften und ermöglicht unter andere den `welt` Raster.
 *    - Versuche die Werte im Raster durch Zahlen `> 0` zu ersetzen...
 *    -
 */
tetris.tetroEinfrieren = function () {
    const { spalte, zeile, muster } = this.tetro;

    const neueWelt = this.welt;

    for (let y = 0; y < this.welt.length; y++) {

        for (let x = 0; x < this.welt[0].length; x++) {

            if (y < 0 || y >= muster.length || x < 0 || x >= muster.length) {
                //
            }

            const weltZelle = this.welt[y][x];
            const tetroZelle = this.tetro.zelle(y, x);

            console.log(`👻🎯👻 Zellenwerte für [${y},${x}]'`, {weltZelle}, {tetroZelle});

        }
    }

    this.welt = neueWelt;

    this.aktualisieren();
};

tetris.starten();