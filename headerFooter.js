// =========================================================
// HEADER + FOOTER + MENU LATERALE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

 const headerContainer = document.querySelector('#header');
    if (headerContainer) {
        headerContainer.innerHTML = `
        <div class="left-wrap">
            <div class="linknav">
                <a href="index.html">debrinka portfolio</a>
            </div>
        </div>
        <div class="right-wrap">
            <div class="linknav">
                <a href="#" id="menu-trigger">menu</a>
            </div>
        </div>`;
    }

    // ORA l'header esiste davvero nel DOM
   const header = document.querySelector('.topnav');

// default
header.classList.add('is-light');

// sezioni scure (hero magenta, ecc.)
const darkSections = document.querySelectorAll('.magenta-section');

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
}, {
  rootMargin: '-80px 0px -80% 0px'
});

darkSections.forEach(section => observer.observe(section));

    const footer = document.querySelector('#footer');
    if (footer) {
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
  // =====================================================
    // 3. FOOTER REVEAL (CALCOLO MARGINI)
    // =====================================================
    function adjustFooterReveal() {
        const main = document.querySelector('#main-content');
        const footerWrapper = document.querySelector('.footer-wrapper');

        if (main && footerWrapper) {
            if (window.innerWidth > 768) {
                main.style.marginBottom = footerWrapper.offsetHeight + 'px';
            } else {
                main.style.marginBottom = '0px';
            }
        }
    }

    setTimeout(adjustFooterReveal, 100);
    window.addEventListener('resize', adjustFooterReveal);

});


// =========================================================
// 4. MENU LATERALE (JQUERY)
// =========================================================

$(document).ready(function () {

    // CREA MENU SE NON ESISTE
    if ($('#side-menu').length === 0) {
        const menuHTML = `
        <div id="side-menu" style="display:none; flex-direction: column; justify-content: center; align-items: center;">
            <button id="close-menu">close</button>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="works.html">works</a></li>
                <li><a href="fanzine.html">fanzine</a></li>
                <li><a href="mailto:erideba@gmail.com">contact</a></li>
            </ul>
        </div>`;
        $('body').append(menuHTML);
    }

    // APERTURA MENU
$(document).on('click', '#menu-trigger', function (e) {
    e.preventDefault();

    const $menu = $('#side-menu');
    const $links = $menu.find('ul li');

    // Resetta animazioni precedenti
    $links.removeClass('show');

    // Mostra il menu (slide)
    $menu.css('display', 'flex').hide().show('slide', { direction: 'up' }, 500, function() {
        // Animazione link dopo apertura menu
        $links.each(function(index) {
            const $li = $(this);
            setTimeout(function() {
                $li.addClass('show');
            }, 100 * index); // delay progressivo
        });
    });
});
    // CHIUSURA MENU
    $(document).on('click', '#close-menu', function (e) {
        e.preventDefault();
        $('#side-menu').hide('slide', { direction: 'up' }, 500);
    });

});