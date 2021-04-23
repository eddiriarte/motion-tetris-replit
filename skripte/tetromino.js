class Tetromino {

    constructor(zeile, spalte, muster) {
        this.zeile = zeile;
        this.spalte = spalte;
        this.muster = muster;
    }

    nachLinks() {
        this.spalte = (this.spalte - 1);
    }

    nachRechts() {
        this.spalte = (this.spalte + 1);
    }

    nachUnten() {
        this.zeile = (this.zeile + 1);
    }

    /**
     * @TODO Implementiere diese Methode zu Ende.
     *       - Keep it simple, aber du darfst auf kollisionen Prüfen, s. `kollidiert`
     */
    drehen(welt) {
        const laenge = this.muster.length;
        const neuerMuster = [];

        // ... hier kommt dein Code:



        this.muster = neuerMuster
    }

    /**git a
     * Prüft ob das Tetromino sich auf dem gegebenen Koordinaten befindet.
     *
     * @param zeile
     * @param spalte
     * @returns {boolean}
     */
    istAufZelle(zeile, spalte) {
        return !this.istNichtAufZelle(zeile, spalte);
    }

    /**
     * Prüft ob das Tetromino sich nicht auf dem gegebenen Koordinaten befindet.
     *
     * @param zeile
     * @param spalte
     * @returns {boolean}
     */
    istNichtAufZelle(zeile, spalte) {
        const y = zeile - this.zeile;
        const x = spalte - this.spalte;

        return y < 0
            || zeile >= (this.zeile + this.muster.length)
            || x < 0
            || spalte >=  (this.spalte + this.muster.length);
    }

    /**
     * Gibt die Zelle vom Tetromuster zurück welche sich auf dem gegebenen Koordinaten befindet.
     *
     * @param zeile
     * @param spalte
     * @returns {*}
     */
    zelle(zeile, spalte) {
        const y = zeile - this.zeile;
        const x = spalte - this.spalte;

        return this.muster[y][x];
    }

    kannNachLinks(welt) {
        return !kollidiertNachLinks(welt, this);
    }

    kannNachRechts(welt) {
        return !kollidiertNachRechts(welt, this);
    }

    kannNachUnten(welt) {
        return !kollidiertNachUnten(welt, this);
    }
}