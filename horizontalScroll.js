document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#journey');
  const track = document.querySelector('.journey-track');
  const DESKTOP_BREAKPOINT = 1350;
  let horizontalEnabled = false;

function setSectionHeight() {
  const trackWidth = track.scrollWidth;
  const viewportWidth = window.innerWidth;
  
  section.style.height = trackWidth - viewportWidth + window.innerHeight + 'px';
}

  function onScroll() {
    const rect = section.getBoundingClientRect();
 // quanto ho scrollato DENTRO la sezione
  const scrollInside = -rect.top;

  // ritardo prima di partire
  const startOffset = 150;
    const maxScroll = track.scrollWidth - window.innerWidth;
  // progress parte solo dopo il delay
  const progress = Math.min(
    Math.max(scrollInside, 0),
    maxScroll
  );
    track.style.transform = `translateX(-${progress}px)`;
     setSectionHeight();
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