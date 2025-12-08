document.addEventListener("DOMContentLoaded", function() {
    
    const preloader = document.getElementById('magenta-preloader');
    const body = document.body;

    // 1. STATO INIZIALE: BLOCCATO E BLU
    // Le colonne sono già giù grazie al CSS di base.
    body.classList.add('no-scroll');

    // Funzione che alza le colonne (Svela il sito)
    function revealSite() {
        console.log("Svelo il sito...");
        // Aggiungo la classe che porta le colonne a -100% (Su)
        preloader.classList.add('cascade-reveal');
        // Tolgo eventuali classi di discesa
        preloader.classList.remove('cascade-drop');
        
        // Sblocco scroll
        body.classList.remove('no-scroll');
    }

    // Ascolta segnale header
    document.addEventListener('headerLoaded', function() {
        // Piccolo ritardo per vedere il blu un istante
        setTimeout(revealSite, 300); 
    });

    // Fallback sicurezza
    setTimeout(() => {
        if (!preloader.classList.contains('cascade-reveal')) revealSite();
    }, 3000);


    // 2. GESTIONE CLICK (CASCATA VERSO IL BASSO)
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || link.target === '_blank') return;

        const targetUrl = link.getAttribute('href');
        if (!targetUrl || targetUrl.startsWith('#') || targetUrl.includes('mailto:')) return;
        if (targetUrl === window.location.pathname || targetUrl === window.location.href) return;

        e.preventDefault();
        
        console.log("Scendo le colonne...");

        // 1. Resetto lo stato: tolgo la classe che le teneva su
        preloader.classList.remove('cascade-reveal');
        // 2. Aggiungo la classe che le porta giù (opzionale se il default è giù, ma più sicuro)
        preloader.classList.add('cascade-drop');
        
        // Rendo visibile il PNG (togliendo la classe reveal che lo nascondeva)
        // Ma nel CSS è gestito dal contenitore padre, quindi tornerà visibile automaticamente.

        body.classList.add('no-scroll');

        // 3. Aspetto la fine dell'animazione
        // 1.0s durata + 0.4s ritardo = 1.4s
        // Mettiamo 1500ms per sicurezza
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 1500);
    });

    // Fix tasto indietro
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            preloader.classList.add('cascade-reveal');
            body.classList.remove('no-scroll');
        }
    });
});