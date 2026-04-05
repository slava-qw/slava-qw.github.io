// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 56;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Lazy video play when in view
if ('IntersectionObserver' in window) {
  const videos = document.querySelectorAll('video[autoplay]');
  const vo = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.play().catch(() => {});
      else en.target.pause();
    });
  }, { threshold: 0.3 });
  videos.forEach(v => { v.pause(); vo.observe(v); });
}
