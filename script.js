const tetris = new Tetris();

/**
 * Tetromino auf `welt` ablegen/einfrieren
 *    - Das object `this` hat viele `Tetris` eigenschaften und ermöglicht unter andere den `welt` Raster.
 *    - Versuche die Werte im Raster durch Zahlen `> 0` zu ersetzen...
 *    -
 */
tetris.tetroEinfrieren = function () {
    const { spalte, zeile, muster } = this.tetro;

    this.welt = this.welt
        .map((spaltenList, y) => {

            const tetroZeile = (y - zeile);

            return spaltenList.map((weltZelle, x) => {

                const tetroSpalte = (x - spalte);

                if (tetroZeile < 0
                    || tetroZeile >= muster.length
                    || tetroSpalte < 0
                    || tetroSpalte >= muster.length) {

                    // ....
                    return weltZelle;
                    // ----
                }


                const tetroZelle = muster[tetroZeile][tetroSpalte];

                console.log(`👻🎯👻 Zellenwerte für [${y},${x}]'`, {weltZelle}, {tetroZelle});


                // ....
                return tetroSpalte !== 0 ? tetroZelle : weltZelle;
                // ----

            });

        });
}

tetris.starten();