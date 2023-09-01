window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollY = window.scrollY;
  // Change the background color when scrolling
  if (scrollY > 100) {
    header.style.backgroundColor = '#222';
  } else {
    header.style.backgroundColor = '#333';
  }

  // Highlight the active menu item based on the scroll position
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.clientHeight;
      const id = section.getAttribute('id');
      const menuItem = document.querySelector(`nav ul.menu li a[href="#${id}"]`);

      if (scrollY >= top && scrollY <= bottom) {
          menuItem.classList.add('active');
      } else {
          menuItem.classList.remove('active');
      }
  });
});
