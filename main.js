
//header menu
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
  mobileMenu.classList.add('opacity-100');
  document.body.classList.add('overflow-hidden');
}

function closeMenu() {
  mobileMenu.classList.add('opacity-0', 'pointer-events-none');
  mobileMenu.classList.remove('opacity-100');
  document.body.classList.remove('overflow-hidden');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);


//slider
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    grabCursor: true
  });


// toggling bookmark icons
document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const icon = btn.querySelector('svg');
      if (!icon || !btn.hasAttribute('aria-pressed')) return;
  
      e.preventDefault();
  
      const isPressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!isPressed));
      icon.setAttribute('fill', isPressed ? 'none' : 'currentColor');
    });
  });
  



