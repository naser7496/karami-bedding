// Full-screen menu overlay
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  menuOverlay.classList.add('open');
  menuOverlay.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}
function closeMenu() {
  menuOverlay.classList.remove('open');
  menuOverlay.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  menuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Contact form (static demo — replace action with real backend/service later)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = 'پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.';
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
