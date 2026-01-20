document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#journey');
  const track = document.querySelector('.journey-track');
  const DESKTOP_BREAKPOINT = 1350; // per la vista ipad in giù
  let horizontalEnabled = false;

  
function setSectionHeight() { //funzione che quando scrollo in verticale, fa lo scroll orizzontale
  const trackWidth = track.scrollWidth; //quanto è larga l'intera striscia delle card
  const viewportWidth = window.innerWidth;
  
  section.style.height = trackWidth - viewportWidth + window.innerHeight + 'px'; // altezza della sezione deve essere uguale a: lunghezza totale traccia della striscia - larghezza schermo) + altezza schermo
}

  function onScroll() {
    const rect = section.getBoundingClientRect(); //coordinate e dimensioni della sezione rispetto alla finestra visibile
  const scrollInside = -rect.top; // quanto ho scrollato DENTRO la sezione
    const maxScroll = track.scrollWidth - window.innerWidth; //lunghezza massima che può fare lo scroll orizzontale
  // progress parte solo dopo il delay
  const progress = Math.min(
    Math.max(scrollInside, 0),
    maxScroll +163 // 163px per il side-margin
  );
    track.style.transform = `translateX(-${progress}px)`;
     setSectionHeight(); // ricalcolo altezza se viene rimpicciolita la finestra
  }

 
//attiva e disattiva lo scroll orizzontale in base alla larghezza della finestra
  function enableHorizontalScroll() {
    if (horizontalEnabled) return; // se è già attivo, non fare nulla
    horizontalEnabled = true;

    setSectionHeight();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', setSectionHeight);
  }

  function disableHorizontalScroll() {
    if (!horizontalEnabled) return;
    horizontalEnabled = false;

    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', setSectionHeight);

    // reset layout
    section.style.height = 'auto';
    track.style.transform = 'translateX(0)';
  }

  function checkViewport() {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
      enableHorizontalScroll();
    } else {
      disableHorizontalScroll();
    }
  }


//array cards
const container = document.querySelector('.container-year-card');
const journeyData = [
  {
    image: 'assets/png/diploma_2019.png',
    title: 'diploma di perito informatico, ITIS Avogadro',
    year: '2019'
  },
  {
    image: 'assets/png/reply_2019.png',
    title: 'react developer/consulente est., Reply',
    year: '2019'
  },
  {
    image: 'assets/png/tilab_2020.png',
    title: 'react developer/consulente est., Tilab',
    year: '2020'
  },
  {
    image: 'assets/png/politecnico_2023.png',
    title: 'inizio LT in design, Polito',
    year: '2023'
  }
];

journeyData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'year-card d-flex flex-column';

  card.innerHTML = `
    <div style="
      width: 100%;
      height: 100%;
      background: url(${item.image}) no-repeat center;
      background-size: cover;
      flex: 1 1 0;
    "></div>

    <div style="flex: 0 1 0;">
      <p style="font-size: 24px; margin-bottom: 0;">
        ${item.title}
      </p>
      <p style="font-size: 24px; margin-bottom: 0;">
        ${item.year}
      </p>
    </div>
  `;

  container.appendChild(card);
});

  checkViewport();
  window.addEventListener('resize', checkViewport);
});