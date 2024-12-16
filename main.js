const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function () {
  if (nav.classList.contains('sidebar')) {
    nav.classList.replace('sidebar', 'sidebaru'); // Ganti 'sidebar' dengan 'sidebaru'
  } else {
    nav.classList.replace('sidebaru', 'sidebar'); // Ganti 'sidebaru' kembali ke 'sidebar'
  }
});


