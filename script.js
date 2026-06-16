// this script detects the page scrolling then hides or shows the header upon page scroll status.

const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Scrolling DOWN - hides the header in the window viewer
    header.classList.add('hidden');
  } else {
    // Scrolling UP - reveals the header in the window viewer
    header.classList.remove('hidden');
  }

  // Update the last scroll position when the user is done scrolling the page
  lastScrollY = currentScrollY;
});