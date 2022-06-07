// -------------- Swiper

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      enable: true,
      slidesPerView: 1,
      spaceBetween: 16 //slide之間的距離 (單位px)
    },
    768: {
      enable: true,
      slidesPerView: 2,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16
    },
  },
});


// -------------- 首頁視窗高度太小下方區塊字會和100vh區塊重疊，這邊做監聽
const body = document.querySelector('body');
const  layout100vh= document.querySelector('.layout-100vh');

window.addEventListener('resize', (e) => {
  if ( (document.body.clientWidth <= 896) && (document.documentElement.clientHeight <= 414)){
    layout100vh.setAttribute('style', 'height: auto;')
    console.log('hello');
  } else {
    layout100vh.setAttribute('style', 'height: 100vh;')
  }
})


