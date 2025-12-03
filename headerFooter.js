const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const main = document.querySelector('main');

window.addEventListener('load', function() {
    
    // HEADER (Non toccare se già funziona, ma controlla z-index nel CSS)
    if(header) {
        header.innerHTML = `
        <div class="left-wrap">
            <div class="linknav" style="padding:0;">
                <a href="index.html" alt="debrinka portfolio">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="works.html" alt="my work" target="_blank" rel="noopener noreferrer">my work</a>
            </div>
            <button class="button magenta">resume me</button>
        </div>`;
    }

    // FOOTER (Struttura corretta Flex Verticale)
    if(footer) {
        footer.innerHTML = `
        <div class="footer-wrapper" id="sticky-footer">
            
            <div class="footer-cols-container">
                
                <div class="footer-col-left">
                    <h1 class="footer-title">
                        nice to meet <span style="color: var(--magenta);">you</span>
                    </h1>
                    
                    <ul class="footer-socials">
                      <li><a href="#" style="text-decoration:none; color:white;">behance</a></li>
                      <li><a href="#" style="text-decoration:none; color:white;">linkedin</a></li>
                      <li><a href="mailto:erideba@gmail.com" style="text-decoration:none; color:white;">erideba@gmail.com</a></li>
                    </ul>
                </div>

                <div class="footer-col-right">
                    <div class="footer-address">
                        Based in Turin, Learn at Politecnico di Torino
                    </div>
                    
                    <div class="map-container">
                        <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=torino,%20italy+(My%20Business%20palce)&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                    </div>
                </div>

            </div>

            <div class="copyright-bar">
                © 2025 Debrinka Portfolio
            </div>

        </div>`;

        // Funzione per calcolare margine inferiore del sito (Effetto Reveal)
        const adjustFooterReveal = () => {
            const footerEl = document.getElementById('sticky-footer');
            // Applichiamo solo su Desktop (>900px)
            if(footerEl && main && window.innerWidth > 900) { 
                main.style.marginBottom = footerEl.offsetHeight + 'px';
            } else if (main) {
                main.style.marginBottom = '0px';
            }
        };

        setTimeout(adjustFooterReveal, 100);
        window.addEventListener('resize', adjustFooterReveal);
    }
});