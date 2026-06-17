/* Zachary White | CSD 340 | site.js
   Two small, independent behaviors for the header. Each is wrapped in its
   own block so either one can be deleted without touching the other. */

// this script detects the page scrolling then hides or 
// shows the header upon page scroll status.

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

/* 2) In the Link Portal dropdown, find whichever entry points to the page
   the visitor is already on, and turn it from a link into plain, greyed-out
   text labeled "current" instead of leaving it clickable. Works the same
   on every page without any per-page setup, since it just compares
   filenames rather than relying on a hand-added "this is page X" marker. */
(function () {
  var links = document.querySelectorAll('.dropdown-menu a[href]');
  var currentFile = location.pathname.split('/').pop();

  links.forEach(function (link) {
    var linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.classList.add('current-page');
      link.setAttribute('aria-current', 'page');
      link.removeAttribute('href');
    }
  });
})();