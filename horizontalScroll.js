document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#journey');
  const track = document.querySelector('.journey-track');

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

  const focusX = viewportWidth * 0.35;
  const range = viewportWidth * 0.6;

  cards.forEach((card, index) => {

    // PRIMA CARD: fissa
    if (index === 0) {
      card.style.transform = 'translateY(0%) scale(1)';
      return;
    }

    const rect = card.getBoundingClientRect();
    const distance = rect.left - focusX;

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

  setSectionHeight();
  window.addEventListener('resize', setSectionHeight); 
  window.addEventListener('scroll', onScroll);
});