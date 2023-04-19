// console.log(20-12);

const tabs = document.querySelectorAll('.tabheader__item');
const tabsparent = document.querySelector('.tabheader__items')
const tabcontent = document.querySelectorAll('.tabcontent')


const handlHideTabcontent = () =>{
   tabcontent.forEach( (item) => {
      item.style.display = 'none';
   })
   tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
   })
}



const handleShowtabContent =(i = 0) => {
   tabcontent[i].style.display = 'block';
   tabs[i].classList.add('tabheader__item_active')
}
handlHideTabcontent()
handleShowtabContent()

tabsparent.addEventListener('click', (e) => {
   const target = e.target;

   if(target.classList.contains ('tabheader__item')){
      console.log(target);
      tabs.forEach((item,i) => {
         if(item === target){
         // console.log(i)
         handlHideTabcontent();
         handleShowtabContent(i)
         }
      })
   }

})

const modalOpen = document.querySelector('.btn_white');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');

const openModal = () => {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
};

const clickOutsideModal = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};
document.addEventListener('scroll', () => {
     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
       openModal();
     }
   })

modalOpen.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', clickOutsideModal);




let slideIndex = 0; 
const slides = document.querySelectorAll('.offer__slide'); 
const totalSlides = slides.length; 
const sliderWrapper = document.querySelector('.offer__slider-wrapper');
const prevSlide = document.querySelector('.offer__slider-prev');
const nextSlide = document.querySelector('.offer__slider-next'); 
const currentSlide = document.querySelector('#current');
const totalSlide = document.querySelector('#total'); 
function next() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 3;
  }
  showSlide();
}
function prev() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 4;}
  showSlide();
}

function showSlide() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
  currentSlide.textContent = `0${slideIndex + 1}`.slice(-2);
}

let interval = setInterval(next, 5000);

prevSlide.addEventListener('click', function() {
  clearInterval(interval);
  prev();
  interval = setInterval(next, 5000);
});

nextSlide.addEventListener('click', function() {
  clearInterval(interval);
  next();
  interval = setInterval(next, 5000);
});

showSlide();

totalSlide.textContent = `0${totalSlides}`.slice(-2);