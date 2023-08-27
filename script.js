window.addEventListener('load', function() {
    var header = document.querySelector('.header');
    var hr = document.querySelector('.hrdiv1');
    var div1h1= document.querySelector('.div1h1');
    var img1= document.querySelector('.img1');
    var img2= document.querySelector('.img2');
    var img3= document.querySelector('.img3');
    header.classList.add('show');
    hr.classList.add('show');
    div1h1.classList.add('show');
    img1.classList.add('show');
    img2.classList.add('show');
    img3.classList.add('show');
  });
  /*--------------*/
  ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500,
    delay:400
  });
  ScrollReveal().reveal('.div2 h1', { delay: 500, origin:'top' });
  ScrollReveal().reveal('.text p', { delay: 500, origin:'left' });
  ScrollReveal().reveal('.div2left', { delay: 500, origin:'right' });
  ScrollReveal().reveal('.text button', { delay: 500, origin:'bottom' });
  ScrollReveal().reveal('.gauche h1', { delay: 500, origin:'top' });
  ScrollReveal().reveal('.form', { delay: 500, origin:'left' });
  ScrollReveal().reveal('.form button', { delay: 500, origin:'bottom' });
  ScrollReveal().reveal('.info p', { delay: 500, origin:'right' });
  ScrollReveal().reveal('.info p i', { delay: 500, origin:'left' });
  ScrollReveal().reveal('.droite h1', { delay: 500, origin:'right' });
  ScrollReveal().reveal('.last p', { delay: 500, origin:'top' });
  ScrollReveal().reveal('.technology i', { delay: 500, origin:'top' });
  /*--------------*/
  document.addEventListener("DOMContentLoaded", function() {
      var scrollButton = document.getElementById("scrollButton");
      var targetDiv = document.getElementById("div4");
      scrollButton.addEventListener("click", function() {
          targetDiv.scrollIntoView({ behavior: "smooth" });
      });
  });

