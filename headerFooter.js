const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

// --- 1. FUNZIONE INIT MENU (La logica del plugin) ---
function initAnimatedModal() {
    // Prima iniettiamo l'HTML del menu nascosto nel body
    if (!document.getElementById('animatedModal')) {
        const menuHTML = `
        <div id="animatedModal">
            <div class="close-animatedModal">CLOSE</div>
            
            <div class="modal-content">
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="works.html">works</a></li>
                    <li><a href="fanzine.html">fanzine</a></li>
                    <li><a href="mailto:erideba@gmail.com">contact</a></li>
                </ul>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', menuHTML);
    }

    // ORA ATTIVIAMO IL PLUGIN (Solo se jQuery esiste)
    if (window.jQuery && $.fn.animatedModal) {
        $("#menu-trigger").animatedModal({
            modalTarget: 'animatedModal',
            color: '#FF3D94',            // Magenta
            animatedIn: 'slideInRight',  // Entra da destra
            animatedOut: 'slideOutRight',// Esce a destra
            animationDuration: '.5s',
            overflow: 'hidden'
        });
        console.log("✅ PLUGIN ATTIVATO!");
    } else {
        console.error("❌ ERRORE: jQuery o Plugin non caricati.");
    }
}

// --- 2. CALCOLO MARGINE FOOTER ---
window.adjustFooterReveal = function() {
    const main = document.querySelector('main');
    const footerWrapper = document.querySelector('.footer-wrapper');
    if (main && footerWrapper) {
        if (window.innerWidth > 768) {
            main.style.marginBottom = footerWrapper.offsetHeight + 'px';
        } else {
            main.style.marginBottom = '0px';
        }
    }
};

// --- 3. CARICAMENTO PAGINA (Il Main Event) ---
window.addEventListener('load', function() {
    
    // A) INIEZIONE HEADER
    if(header) {
        header.innerHTML = `
        <div class="left-wrap">
            <div class="linknav" style="padding:0;">
                <a href="index.html" alt="debrinka portfolio">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="#animatedModal" id="menu-trigger">menu</a>
            </div>
        </div>`;
    }

    // B) INIEZIONE FOOTER
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
        
        setTimeout(window.adjustFooterReveal, 50);
        window.addEventListener('resize', window.adjustFooterReveal);
    }

    // C) ATTIVIAMO IL MENU (Subito dopo aver creato l'header)
    // Usiamo un piccolo timeout per dare tempo al browser di "digerire" l'HTML
    setTimeout(initAnimatedModal, 100);
});