const tetris = new Tetris();

tetris.berechneAktuellenLevel = function () {

    // TODO: Erhöhe den Level um eins alle 5000 Punkte.
    return this.level;

};


tetris.levelGeschwindigkeit = function () {

    // TODO: Ersetze die festgelegte 800ms durch folgende mathematische Funktion:
    // f(x) = 1300ms / ( x * 0.95 ) + 70ms , wobei 'x' das aktuelle level ist.
    return 800;

};


tetris.starten();