window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#002a80';
    } else {
      header.style.backgroundColor = '#0044cc';
    }
  });
  