// -------------- Go Top Button
const goTopBtn = document.querySelector('.goTopBtn');
goTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(
    {
      top: -16,
      behavior: 'smooth',
    }
  )
})