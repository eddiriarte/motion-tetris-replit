let welt =  [];

let breite = 0;

let hoehe = 0;

/**
 * 1. Erstelle ein leeres Array
 * 2. Erstelle zwei ineinander verschachtelte for-Schleifen
 * 3. Füge den Wert "0" für jede Zelle im Raster.
 */
const weltErzeugen = () => {
    // Liste wird zurükgesetzt
    welt = [];
    
    // Deine Schleifen kommen hier:
    
};


/**
 * Nimmt die hoehe und breite des Weltrasters und erzeugt
 * das HTML Code das angezeit werden soll.  
 */
const weltAusmalen = () => {
    const weltContainer = document.getElementById('welt');
    // Container wird zurükgesetzt
    weltContainer.innerHTML = '';

    const hoehe = weltHoehe();
    const breite = weltBreite();

    for (let zeile = 0; zeile < hoehe; zeile++) {
        let html = '';
        
        for (let spalte = 0; spalte < breite; spalte++) {
            html += `<div id="welt_${zeile}-${spalte}" class="tetro"></div>`;            
        }

        weltContainer.innerHTML += html + '<br>';
    }
}

/**
 * =================================================================
 * IHR BRAUCH EUCH NICHT UM DIESEN TEIL ZU KÜMMERN(IM MOMENT)!
 * =================================================================
 */

const darstellungGenerieren = () => {
    hoehe = Number.parseInt(document.getElementsByName('hoehe').item(0).value || 0);
    breite = Number.parseInt(document.getElementsByName('breite').item(0).value || 0);
    
    weltErzeugen();
    weltAusmalen();

    document.getElementById('roh-daten').innerHTML = '<pre><code>' + JSON.stringify(welt, null, 4) + '</code></pre>';
};


const weltHoehe = () => welt.length || 0;

const weltBreite = () => (welt[0] || []).length || 0;
