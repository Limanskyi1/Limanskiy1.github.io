var logo = document.querySelector('.header__items__burger');
var menu = document.querySelector('.header__items__menu');
var logoBig = document.querySelector('.logo__animation');
var body = document.querySelector('body')
var bodyHide = document.querySelector('.body-hide')
var main = document.querySelector('main')
var mainHide = document.querySelector('main.hide')
var footer = document.querySelector('footer')
var footerHide = document.querySelector('footer__hide')
var linkVideo = document.querySelector('.header__items__menu__link__video')
var linkRewiews = document.querySelector('.header__items__menu__link__rewiews')
var linkContacts = document.querySelector('.header__items__menu__link__contacts')

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
})
logo.addEventListener('click',function(){
    logoBig.classList.toggle('showlogo');
})
linkVideo.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkRewiews.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkContacts.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkVideo.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
linkRewiews.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
linkContacts.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
logo.addEventListener('click',function(){
  body.classList.toggle('body-hide');
})
linkVideo.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
linkRewiews.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
linkContacts.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
logo.addEventListener('click',function(){
  main.classList.toggle('main-hide');
})
linkVideo.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
linkRewiews.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
linkContacts.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
logo.addEventListener('click',function(){
  footer.classList.toggle('footer__hide');
})
linkVideo.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})
linkRewiews.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})
linkContacts.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const btnUp = {
    el: document.querySelector('.btn-up'),
    
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});


(function () {
  var toggle = document.querySelector('.header__items__burger');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    linkVideo.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
    linkRewiews.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
    linkContacts.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
  });
})();