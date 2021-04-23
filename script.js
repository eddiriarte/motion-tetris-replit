const tetris = new Tetris();

/**
 * @TODO finde den Fehler
 */
tetris.beiGameOver = function () {
    if (!this.gestartet) {
        return;
    }

    this.gestartet = false;

    this.stopZeitSchleife();
    document.removeEventListener('keyup', this.tastenLauscher);
    gestenHandlerLoeschen();
};

tetris.starten();