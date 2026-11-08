// Toggle menu hamburger
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Smooth scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if(el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Tutup menu saat klik di luar
document.addEventListener('click', (e) => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (!nav.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Load features dari JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const featuresContainer = document.getElementById('fitur');
    data.features.forEach(feature => {
      const featureDiv = document.createElement('div');
      featureDiv.className = 'feature';
      featureDiv.innerHTML = `
        <h3>${feature.icon} ${feature.title}</h3>
        <p>${feature.description}</p>
      `;
      featuresContainer.appendChild(featureDiv);
    });
  })
  .catch(error => console.error('Error loading features:', error));