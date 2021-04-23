const tetris = new Tetris();

tetris.beiGestenSteuerungEreignis = function (geste) {
    console.log(geste.direction);

    // Hier kommt kein Code:

    switch(geste.direction) {
        case 'Long up':
        case 'Up':
            this.tetro.drehen(this.welt);
            break;
        case 'Long left':
        case 'Left':
            this.tetroNachLinksBewegen();
            break;
        case 'Long right':
        case 'Right':
            this.tetroNachRechtsBewegen();
            break;
        case 'Long down':
        case 'Down':
            this.tetroNachUntenSchieben();
            break;
        default:
            console.log(geste.direction);
    }

    this.aktualisieren();

    // ----
};

tetris.starten();