// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark/Light theme toggle
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '🌓';
  themeToggle.className = 'btn btn-outline-secondary theme-toggle';
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.right = '20px';
  themeToggle.style.zIndex = '1000';
  themeToggle.style.borderRadius = '50%';
  themeToggle.style.width = '50px';
  themeToggle.style.height = '50px';
  themeToggle.style.display = 'flex';
  themeToggle.style.alignItems = 'center';
  themeToggle.style.justifyContent = 'center';
    
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  // Check for saved theme preference
  if (localStorage.getItem('theme')) {
    document.querySelector('html').setAttribute('data-bs-theme', localStorage.getItem('theme'));
  }
  
  // Active nav link highlighting
  const sections = document.querySelectorAll('section, .hero-section, #hanging-icons');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 300)) {
        current = section.getAttribute('id') || 'home';
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || 
          (link.getAttribute('href') === '#' && current === 'home')) {
        link.classList.add('active');
      }
    });
  });