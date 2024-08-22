let navBar = document.querySelector('.navlinks');
let menuBar = document.querySelector('#menuBtn');
menuBar.onclick = ()=>{
    navBar.classList.toggle('active')
}






var swiper = new Swiper(".myhome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });






// Scroll Section and Sticky Nabbar=========================================\\
window .scroll = () =>{
  let header = document.querySelector('.header')

  header .classList.toggle('sticky',window.scrollY > 100);
}