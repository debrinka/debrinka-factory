const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const main = document.querySelector('main');

// Usiamo 'load' così siamo sicuri che anche le immagini pesanti siano pronte prima di mostrare il sito
window.addEventListener('load', function() {
    
    // --- 1. GESTIONE HEADER ---
    if(header) {
        // Inseriamo l'HTML dell'header
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

        // *** PUNTO CRUCIALE PER IL PRELOADER ***
        // Questa riga dice allo script del caricamento: "Finito! Puoi togliere la schermata nera."
        document.dispatchEvent(new Event('headerLoaded'));
        console.log("Header inserito e segnale inviato."); // Questo ti serve per verifica nella console
    }

    // --- 2. GESTIONE FOOTER ---
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

        // Funzione per gestire l'altezza del footer fisso/sticky
        const adjustFooterReveal = () => {
            const footerEl = document.getElementById('sticky-footer');
            if(footerEl && main && window.innerWidth > 900) { 
                main.style.marginBottom = footerEl.offsetHeight + 'px';
            } else if (main) {
                main.style.marginBottom = '0px';
            }
        };

        // Lanciamo l'aggiustamento con un piccolo ritardo per sicurezza
        setTimeout(adjustFooterReveal, 100);
        window.addEventListener('resize', adjustFooterReveal);
    }
});