const year = document.getElementById('yr');
if (year) year.textContent = new Date().getFullYear();

// Small covers provide the same disclosure as the keyboard-accessible summary.
document.querySelectorAll('.paper-cover[aria-controls]').forEach(cover => {
  const details = document.getElementById(cover.getAttribute('aria-controls'));
  if (!details) return;
  const title = cover.closest('article').querySelector('.paper-title').textContent;
  function syncDisclosure() {
    cover.setAttribute('aria-expanded', String(details.open));
    cover.setAttribute('aria-label', `${details.open ? 'Collapse' : 'Expand'} details for ${title}`);
  }
  cover.addEventListener('click', () => { details.open = !details.open; });
  details.addEventListener('toggle', syncDisclosure);
  syncDisclosure();
});

const button = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
function closeMenu() {
  menu.hidden = true;
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open navigation');
}
if (button && menu) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    menu.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      button.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const videos = document.querySelectorAll('video[autoplay]');
function updateMotionPreference() {
  videos.forEach(video => {
    if (reducedMotion.matches) {
      video.removeAttribute('autoplay');
      video.pause();
    }
  });
}
updateMotionPreference();
reducedMotion.addEventListener('change', updateMotionPreference);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !reducedMotion.matches) entry.target.play().catch(() => {});
      else entry.target.pause();
    });
  }, {threshold: 0.25});
  videos.forEach(video => observer.observe(video));
}
