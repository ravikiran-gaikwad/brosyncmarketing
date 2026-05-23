// ===== BROSYNC MAIN JS =====

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu?.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navMenu?.classList.remove('open');
  });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(update);
}
const counters = document.querySelectorAll('.count');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

// Tab system (service tabs, simplify tabs)
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.group || 'default';
    document.querySelectorAll(`.tab-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.tab-content[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = document.querySelector(`.tab-content[data-tab="${btn.dataset.tab}"][data-group="${group}"]`);
    target?.classList.add('active');
  });
});

// Service list tabs
document.querySelectorAll('.service-list-item').forEach(item => {
  item.addEventListener('click', () => {
    const panel = item.closest('.services-grid');
    panel.querySelectorAll('.service-list-item').forEach(i => i.classList.remove('active'));
    panel.querySelectorAll('.service-detail-content').forEach(c => c.classList.remove('active'));
    item.classList.add('active');
    const target = panel.querySelector(`.service-detail-content[data-service="${item.dataset.service}"]`);
    target?.classList.add('active');
  });
});

// Simplify tabs
document.querySelectorAll('.simplify-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const wrap = tab.closest('.simplify-tabs');
    wrap.querySelectorAll('.simplify-tab').forEach(t => t.classList.remove('active'));
    wrap.querySelectorAll('.simplify-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = wrap.querySelector(`.simplify-content[data-stab="${tab.dataset.stab}"]`);
    target?.classList.add('active');
  });
});

// Portfolio filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.portfolio-card').forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formSuccess')?.classList.add('show');
  contactForm.reset();
  setTimeout(() => document.getElementById('formSuccess')?.classList.remove('show'), 6000);
});

// Duplicate ticker for infinite scroll
const ticker = document.querySelector('.ticker');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

// Active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
