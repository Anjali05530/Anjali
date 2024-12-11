document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  });
