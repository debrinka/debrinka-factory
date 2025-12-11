const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

// --- FUNZIONE SVUOTATA (Disattivata per il nuovo layout) ---
// Non calcola più i margini perché il footer è gestito dal CSS.
window.adjustFooterReveal = function() {

};

// --- CARICAMENTO PAGINA ---
window.addEventListener('load', function() {
    
    // 1. INIEZIONE HEADER (IL TUO VERSIONE LIGHT)
    if(header) {
        header.innerHTML = `
        <div class="left-wrap">
            <div class="linknav" style="padding:0;">
                <a href="index.html" alt="debrinka portfolio">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="works.html" alt="my work">menu</a>
            </div>
        </div>`;

        // Avvisa il preloader che l'header è pronto (FONDAMENTALE per far alzare la tenda)
        document.dispatchEvent(new Event('headerLoaded'));
    }

    // 2. INIEZIONE FOOTER
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
    }
});