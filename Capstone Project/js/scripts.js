const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () =>{
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',},

      
      // enable auto play
      autoplay: {
        delay: 4000,
      },
    
});
