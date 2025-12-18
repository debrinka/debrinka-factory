$(document).ready(function () {

    const $preloader = $('#magenta-preloader');
    const $body = $('body');
    const $heroSvg = $('.hero-content'); // Il contenitore del tuo SVG

    // FUNZIONE: Fa partire l'animazione SVG
    function playSvgAnim() {
        $heroSvg.addClass('is-visible');
    }

    // ==================================================
    // 0. GESTIONE ENTRATA PAGINA (Appena carica)
    // ==================================================
    
    // Controlliamo se arriviamo dal click del MENU
    if (sessionStorage.getItem('fromMenu') === 'true') {
        
        // CASO A: Arrivo dal Menu -> Niente Tenda, Animazione Subito
        $preloader.addClass('is-hidden').removeClass('is-active'); // Nascondi preloader immediato
        lenis.start();
        
        // Pulisci il promemoria
        sessionStorage.removeItem('fromMenu');

        // Fai partire l'SVG con un micro-ritardo per fluidità
        setTimeout(playSvgAnim, 100);

    } else {
        
        // CASO B: Arrivo normale -> Alza la tenda, POI animazione
        // (Assicurati che il preloader sia visibile nel CSS di base o qui)
        
        setTimeout(function() {
            // 1. Alza la tenda
            $preloader.addClass('is-hidden'); 
            lenis.start();

            // 2. Fai partire l'SVG mentre la tenda finisce di alzarsi
            setTimeout(playSvgAnim, 300); 
        }, 500); // Tempo di caricamento finto iniziale
    }


    // ==================================================
    // 1. LINK DEL MENU → NO PRELOADER (TUO CODICE + FIX)
    // ==================================================
    $(document).on('click', '#side-menu a', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        const href = $(this).attr('href');

        // >>> IMPORTANTE: Diciamo alla prossima pagina che arriviamo dal menu
        sessionStorage.setItem('fromMenu', 'true'); 

        $('#side-menu').hide('slide', { direction: 'up' }, 500, function () {
            window.location.href = href;
        });
    });

    // ==================================================
    // 2. ALTRI LINK → PRELOADER (TUO CODICE)
    // ==================================================
    $(document).on('click', 'a', function (e) {

        const href = $(this).attr('href');
        const target = $(this).attr('target');

        // Controlli di esclusione
        if (
            !href ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            target === '_blank' ||
            $(this).closest('#side-menu').length
        ) {
            return;
        }

        e.preventDefault();
        
        // Assicuriamoci di NON avere il flag del menu attivo
        sessionStorage.removeItem('fromMenu');

        // MOSTRA LA TENDA (USCITA)
        $preloader.removeClass('is-hidden');
       lenis.stop();

        setTimeout(function () {
            window.location.href = href;
        }, 1000); // 1000ms basta solitamente per la discesa
    });

    // Fix per il tasto "Indietro" del browser
    window.onpageshow = function(event) {
        if (event.persisted) {
            $preloader.addClass('is-hidden');
            playSvgAnim();
        }
    };

});

// ==================================================
// LENIS – SMOOTH SCROLL
// ==================================================

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
});

// RAF LOOP
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
