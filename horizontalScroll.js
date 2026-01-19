document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#journey');
  const track = document.querySelector('.journey-track');
  const DESKTOP_BREAKPOINT = 1350;
  let horizontalEnabled = false;

function setSectionHeight() {
  const trackWidth = track.scrollWidth;
  const viewportWidth = window.innerWidth;
 const endPadding = viewportWidth * 0.4;
  section.style.height =
    trackWidth - viewportWidth + window.innerHeight + endPadding +'px';
}

  function onScroll() {
    const rect = section.getBoundingClientRect();
 // quanto ho scrollato DENTRO la sezione
  const scrollInside = -rect.top;

  // ritardo prima di partire
  const startOffset = 150;
    const maxScroll = track.scrollWidth - window.innerWidth + window.innerWidth * 0.4;
  // progress parte solo dopo il delay
  const progress = Math.min(
    Math.max(scrollInside - startOffset, 0),
    maxScroll
  );
    track.style.transform = `translateX(-${progress}px)`;
    updateJourneyBackground(progress);
     updateActiveYearCard();
     setSectionHeight();
  }

function updateJourneyBackground(progress) {
  const maxScroll = track.scrollWidth - window.innerWidth;
  const ratio = progress / maxScroll;

  if (ratio < 0.2) {
    document.body.style.backgroundColor = 'var(--white)';
  } else {
    document.body.style.backgroundColor = 'var(--black)';
  }
}

function updateActiveYearCard() {
  const cards = document.querySelectorAll('.year-card');
  const viewportWidth = window.innerWidth;

  const focusX = viewportWidth * 0.35; // punto orizzontale della card attiva, 35% dello schermo
  const range = viewportWidth * 0.6; // range di influenza delle trasformazioni, entro 

  cards.forEach((card, index) => {

    // PRIMA CARD: fissa
    if (index === 0) {
      card.style.transform = 'translateY(0%) scale(1)';
      return;
    }

    const rect = card.getBoundingClientRect(); //posizione della card nello schermo
    const distance = rect.left - focusX; // distanza orizzontale dal punto di focus (0 è esattamente sul punto, negativo a sinistra, positivo a destra)

    let t = 1 - Math.min(Math.max(distance / range, 0), 1);
    t = t * t * (3 - 2 * t); // smoothstep

    const scale = 0.85 + t * 0.15;
    const translateY = (1 - t) * 25;

    card.style.transform = `
      translateY(${translateY}%)
      scale(${scale})
    `;
  });
}

 /* --------------------
     ENABLE / DISABLE
  -------------------- */

  function enableHorizontalScroll() {
    if (horizontalEnabled) return;
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

  /* --------------------
     CHECK VIEWPORT
  -------------------- */

  function checkViewport() {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
      enableHorizontalScroll();
    } else {
      disableHorizontalScroll();
    }
  }

  /* --------------------
     INIT
  -------------------- */




const container = document.querySelector('.container-year-card');
const journeyData = [
  {
    image: 'assets/png/diploma_2019.png',
    title: 'diploma in IT expert at ITIS A. Avogadro',
    year: '2019'
  },
  {
    image: 'assets/png/reply_2019.png',
    title: 'first consulance at Reply',
    year: '2019'
  },
  {
    image: 'assets/png/tilab_2020.png',
    title: 'second consulance at TiLab',
    year: '2020'
  },
  {
    image: 'assets/png/politecnico_2023.png',
    title: 'starting design degree at poliTO',
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