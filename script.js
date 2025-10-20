const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');
const themeToggle = document.querySelector('.theme-toggle');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Close mobile nav on link click
siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});


// Theme: apply saved preference or system preference on load
const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
document.body.setAttribute('data-theme', initialTheme);

const updateThemeIcon = (theme) => {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.title = themeToggle.getAttribute('aria-label');
};

updateThemeIcon(initialTheme);

themeToggle?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

// Typing animation for title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.getElementById('typing-title');
  if (titleElement) {
    const originalText = titleElement.textContent;
    titleElement.classList.add('typing');
    typeWriter(titleElement, originalText, 150);
  }
});


