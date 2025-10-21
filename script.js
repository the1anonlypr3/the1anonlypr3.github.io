// this is all AI, i hate JS

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


themeToggle?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

// Typing animation for title with looping
function typeWriterLoop(element, text, speed = 100, pauseTime = 2000) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Wait for pause time, then start over
      setTimeout(() => {
        i = 0;
        element.innerHTML = '';
        type();
      }, pauseTime);
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
    typeWriterLoop(titleElement, originalText, 150, 2000);
  }
});


