// componenti header con apertura e chiusura del menù, footer
document.addEventListener("DOMContentLoaded", function () {

 const headerContainer = document.querySelector('#header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <div class="left-wrap">
            <div class="linknav">
                <a href="../debrinka-factory/index.html">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="#" id="menu-trigger">menu</a>
            </div>
        </div>`;
    }
if (header) header.classList.add('is-light');

const sections = document.querySelectorAll('.bg-section');
const pageBg = document.querySelector('#page-bg');
const bgObserver = new IntersectionObserver(entries => { // osservatore che controlla le sezioni quando entrano nella finestra
  entries.forEach(entry => { // per ogni sezione che è dentro la finesta
    if (entry.isIntersecting) { // se la sezione è visibile dentro la finestra
      const color = entry.target.dataset.bg; // prende il colore dato da data-bg
      pageBg.style.backgroundColor =
        getComputedStyle(document.documentElement)
          .getPropertyValue(`--${color}`);
    }
  });
}, {
  rootMargin: '-40% 0px -60% 0px', //delay prima di cambiare colore
  threshold: 0
});

// cambio colore dell'header in base alla sezione
sections.forEach(section => bgObserver.observe(section));

const darkSections = document.querySelectorAll('.magenta-section'); // sezioni scure (hero magenta, ecc.)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('is-dark');
      header.classList.remove('is-light');
    } else {
      header.classList.remove('is-dark');
      header.classList.add('is-light');
    }
  });
});
darkSections.forEach(section => observer.observe(section));

// footer
    const footer = document.querySelector('#footer');
    if (footer) {
        footer.innerHTML = `
          <div class="footer-wrapper" id="sticky-footer">
            <div class="footer-grid-layout">
                <h1 class="footer-item-title">
                    nice to meet <span style="color: var(--magenta);">you</span>
                </h1>
                <div class="footer-item-address">
                    studiando al Politecnico di Torino
                </div>
                <ul class="footer-item-socials">
                <li><a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:43f43489-7d6e-48b1-bf9c-fb2d05569ede" class="menu-link">
                        <span class="menu-text">my curriculum</span>
                        <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span></a>
                    </li>
                    <li><a href="https://www.behance.net/debrinka" class="menu-link">
                        <span class="menu-text">behance</span>
                        <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/erika-de-battisti/" class="menu-link">
                        <span class="menu-text">linkedin</span>
                        <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span></a></li>
                    <li><a href="mailto:erideba@gmail.com" class="menu-link">
                    <span class="menu-text">erideba@gmail.com</span>
                        <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span>
                    </a></li>
                </ul>
                <div class="footer-item-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5639.467019834511!2d7.616038076760058!3d45.03033496228162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47881340ef6330a1%3A0xa805d611f41e47ec!2sPolitecnico%20di%20Torino%20-%20Cittadella%20Politecnica%20del%20Design%20e%20della%20Mobilit%C3%A0%20Sostenibile!5e0!3m2!1sit!2sit!4v1768832068328!5m2!1sit!2sit"></iframe>
                </div>
            </div>
            <div class="copyright-bar">
                © 2025 debrinka factory. All rights reserved.
            </div>
        </div>`;
    }
});

// componente menù

$(document).ready(function () {

    // se menù non esiste allora lo crea
    if ($('#side-menu').length === 0) {
        const menuHTML = `
        <div id="side-menu" style="display:none; flex-direction: column; ">
        <div class="d-flex w-100 justify-content-between align-items-center" id="menu-header" style="font-size: 1.5rem; padding: 0 var(--side-margin); height: var(--topnav-h);">
            <div class="left-wrap">
            <div class="linknav">
                <a href="index.html" style="font-size: 1.5rem; color: var(--white)">debrinka portfolio</a>
            </div>
        </div><div class="right-wrap">
            <button id="close-menu">close</button> 
        </div></div>
             <div class="d-flex flex-fill justify-content-center align-items-center">
            <ul>
                <li><a href="index.html" class="menu-link">
                    <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span>
                    <span class="menu-text">home</span></a></li>
                <li><a href="works.html" class="menu-link">
                    <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span>
                    <span class="menu-text">works</span></a></li>
                <li><a id="footer-link" href="#footer" class="menu-link">
                    <span class="menu-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"/>
                        </svg>
                    </span>
                    <span class="menu-text">contact</span></a></li>
            </ul>
        </div>`;
        $('body').append(menuHTML);
    }

// effetto animazione apertura del menu
$(document).on('click', '#menu-trigger', function(e) {
    e.preventDefault();

    const $menu = $('#side-menu');
    const $menuheader = $('#menu-header');
    const $links = $menu.find('ul li');

    // resetta animazioni precedenti
    $links.removeClass('show');
    $menuheader.removeClass('show');

    // mostra il menu con slide
    $menu.css('display', 'flex').hide().show('slide', { direction: 'up' }, 500, function() {
        // mostra header
        setTimeout(() => {
            $menuheader.addClass('show');
        }, 50);

        // animazione link uno alla volta
        $links.each(function(index) {
            const $li = $(this);
            setTimeout(function() {
                $li.addClass('show');
            }, 100 + 150 * index); //ms
        });
    });
});

// chiusura del menu
$(document).on('click', '#close-menu', function(e) {
    e.preventDefault();
    const $menu = $('#side-menu');
    const $menuheader = $('#menu-header');
    const $links = $menu.find('ul li');

    $menuheader.removeClass('show');
    $links.removeClass('show');
    $menu.hide('slide', { direction: 'up' }, 500);
});

// clic su link del menu
$(document).on('click', '#side-menu a', function() {
    const $menu = $('#side-menu');
    const $menuheader = $('#menu-header');
    const $links = $menu.find('ul li');

    $menuheader.removeClass('show');
    $links.removeClass('show');
    $menu.hide('slide', { direction: 'up' }, 500);
});

// classe attiva di quando si trova in pagina
    const currentPage = window.location.pathname.split('/').pop();

$('#side-menu a').each(function () {
    const linkPage = $(this).attr('href');

    if (linkPage === currentPage) {
        $(this).addClass('is-active');
    }
});

});