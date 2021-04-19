

const musikSchalter = document.getElementById('musik-schalter');

const songPlayer = document.getElementById('tetris-song');

let musikAn = false;

const musikSchalterGedruckt = () => {
    if (!musikAn) {
        musikAn = true;
        songPlayer.play();
        musikSchalter.classList.add('aktiv');
    } else {
        musikAn = false;
        songPlayer.pause();
        musikSchalter.classList.remove('aktiv');
    }
};



/**
 * =================================================================
 * IHR BRAUCH EUCH NICHT UM DIESEN TEIL ZU KÜMMERN(IM MOMENT)!
 * =================================================================
 */

const tetris = new Tetris();
tetris.starten();
