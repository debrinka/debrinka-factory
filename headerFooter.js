const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

// --- 1. FUNZIONE GLOBALE (Fuori da window.load) ---
// La definiamo qui con "window." così è visibile anche da preloader.js
window.adjustFooterReveal = function() {
    const footerEl = document.getElementById('sticky-footer');
    const main = document.querySelector('main'); // Rileggiamo il main perché potrebbe essere cambiato
    
    if(footerEl && main && window.innerWidth > 900) { 
        main.style.marginBottom = footerEl.offsetHeight + 'px';
    } else if (main) {
        main.style.marginBottom = '0px';
    }
};

// --- 2. CARICAMENTO PAGINA ---
window.addEventListener('load', function() {
    
    // GESTIONE HEADER
    if(header) {
        header.innerHTML = `
        <div class="left-wrap">
            <div class="linknav" style="padding:0;">
                <a href="index.html" alt="debrinka portfolio">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="works.html" alt="my work">my work</a>
            </div>
            <button class="button magenta">resume me</button>
        </div>`;

        // Diciamo al preloader che l'header è pronto
        document.dispatchEvent(new Event('headerLoaded'));
        console.log("Header inserito.");
    }

    // GESTIONE FOOTER
    if(footer) {
        footer.innerHTML = `
        <div class="footer-wrapper" id="sticky-footer">
            
            <div class="footer-grid-layout">
                
                <h1 class="footer-item-title">
                    nice to meet <span style="color: var(--magenta);">you</span>
                </h1>

                <div class="footer-item-address">
                    Based in Turin, Learn at Politecnico di Torino
                </div>

                <ul class="footer-item-socials">
                    <li><a href="#" style="text-decoration:none; color:white;">behance</a></li>
                    <li><a href="#" style="text-decoration:none; color:white;">linkedin</a></li>
                    <li><a href="mailto:erideba@gmail.com" style="text-decoration:none; color:white;">erideba@gmail.com</a></li>
                </ul>

                <div class="footer-item-map">
                    <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=torino,%20italy+(My%20Business%20palce)&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                </div>

            </div>

            <div class="copyright-bar">
                © 2025 debrinka factory. All rights reserved.
            </div>

        </div>`;

        // Chiamiamo la funzione globale per sistemare il margine subito
        setTimeout(window.adjustFooterReveal, 100);
    }

    // Ascoltiamo il resize della finestra
    window.addEventListener('resize', window.adjustFooterReveal);
});