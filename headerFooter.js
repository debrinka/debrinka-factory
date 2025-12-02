const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function() {
    header.innerHTML = `
     
   <div class="left-wrap">
   <div class="linknav">
    <a href="index.html" alt="debrinka porftolio">debrinka portfolio</a>
    </div>
    </div>
    <div class="right-wrap">
    <div class="linknav"><a href="works.html" alt="my work" target="_blank" rel="noopener noreferrer">my work</a>
      </div>
    <button class="button magenta">resume me</button>
    </div>
    `;
    footer.innerHTML = `
    <section class="hero dark row" style="min-height: 100vh; padding-top: 2rem;">
      <div class="hero-content double-column contact"> 
        <div>
        <h1 style="font-size: 128px;">nice to meet <span style="color: var(--magenta);">you</span></h1>
      </div>
      <div>
        <ul class="text-biography">
          <li>behance</li>
          <li>linkedin</li>
          <li>erideba@gmail.com</li>
        </ul>
        <p>c 2025</p>
      </div>
  </div>
  <div class="column maps">
    <span>Based in Turin, Learn at Politecnico di Torino</span>
    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=torino,%20italy+(My%20Business%20palce)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
  </section>`;
        });