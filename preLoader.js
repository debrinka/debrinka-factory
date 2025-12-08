$(document).ready(function() {
    'use strict';

    const $preloader = $('#magenta-preloader');
    const $body = $('body');

    // --- FUNZIONI TENDA ---

    function openCurtain() {
        // Togliamo la classe -> il CSS la tira SU
        $preloader.removeClass('is-active');
        $body.removeClass('no-scroll');
    }

    function closeCurtain() {
        // Reset browser (fix per scatti)
        if ($preloader.length) void $preloader[0].offsetWidth; 
        
        // Mettiamo la classe -> il CSS la tira GIÙ
        $preloader.addClass('is-active');
        $body.addClass('no-scroll');
    }

    // --- 1. PRIMO CARICAMENTO ---
    // La pagina parte col magenta (grazie all'HTML). Dopo 0.5s alziamo il sipario.
    setTimeout(openCurtain, 500);


    // --- 2. GESTIONE CLICK (NAVIGAZIONE) ---
    $(document).on('click', 'a', function(e) {
        
        const link = $(this);
        const href = link.attr('href');
        const target = link.attr('target');

        // Ignora link vuoti, ancore, mail o aperture in nuova scheda
        if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0 || target === '_blank') {
            return;
        }

        // Ignora se clicchi sulla pagina stessa
        if (href === window.location.pathname || href === window.location.href) {
            return;
        }

        // BLOCCA IL CARICAMENTO STANDARD
        e.preventDefault();

        // Fai scendere la tenda
        closeCurtain();

        // Aspetta 1 secondo (tempo dell'animazione CSS) e poi cambia pagina
        setTimeout(function() {
            window.location.href = href;
        }, 1000); 
    });

    // --- 3. FIX TASTO INDIETRO (Safari/Chrome Cache) ---
    // Se l'utente torna indietro col browser, riapri la tenda se era rimasta chiusa
    window.onpageshow = function(event) {
        if (event.persisted) {
            openCurtain();
        }
    };

});