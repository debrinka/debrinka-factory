$(document).ready(function () {

    const $preloader = $('#magenta-preloader');
    const $body = $('body');

    // ============================
    // ENTRATA PAGINA
    // ============================
    $(window).on('load', function () {

        // Caso: arrivo dal menu → niente tenda
        if (sessionStorage.getItem('fromMenu') === 'true') {
            $preloader.addClass('is-hidden');
            sessionStorage.removeItem('fromMenu');
            lenis.start();
            return;
        }

        // Caso normale → tenda che sale
        setTimeout(function () {
            $preloader.addClass('is-hidden');
            lenis.start();
        }, 100);
    });

    // ============================
    // LINK MENU → NO PRELOADER
    // ============================
    $(document).on('click', '#side-menu a', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        const href = $(this).attr('href');
        sessionStorage.setItem('fromMenu', 'true');

        $('#side-menu').hide('slide', { direction: 'up' }, 500, function () {
            window.location.href = href;
        });
    });

    // ============================
    // ALTRI LINK → PRELOADER
    // ============================
    $(document).on('click', 'a', function (e) {

        const href = $(this).attr('href');
        const target = $(this).attr('target');

        if (
            !href ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            target === '_blank' ||
            $(this).closest('#side-menu').length
        ) return;

        e.preventDefault();

        sessionStorage.removeItem('fromMenu');
        lenis.stop();

        $preloader.removeClass('is-hidden');
        $body.addClass('no-scroll');

        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    });

    // ============================
    // FIX BACK BUTTON
    // ============================
    window.onpageshow = function (event) {
        if (event.persisted) {
            $preloader.addClass('is-hidden');
            lenis.start();
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
