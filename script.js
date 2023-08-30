const parallax = () => {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
  
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset;
  
      // Parallax effect for the home section
      homeSection.style.backgroundPositionY = scrollPos * 0.5 + 'px';
  
      // Parallax effect for the about section
      aboutSection.style.backgroundPositionY = scrollPos * -0.3 + 'px';
    });
  };
  
  parallax();
  