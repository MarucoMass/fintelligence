document.addEventListener('DOMContentLoaded', function () {
  loadIframes(); // Cargar iframes al hacer scroll
  animateNumbers(); // Animar números al hacer scroll
});

function showIframe(button) {
    var iframe = button.nextElementSibling; 
    var iframeSrc = iframe.getAttribute("src");
    window.open(iframeSrc, "_blank")
  }

   // Función para cargar dinámicamente los iframes al hacer scroll
   function loadIframes() {
     const videoContainers = document.querySelectorAll('.video__container');

     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const iframe = document.createElement('iframe');
           const iframeSrc = entry.target.getAttribute('data-src');

           iframe.src = iframeSrc;
           entry.target.appendChild(iframe);
           observer.unobserve(entry.target);
         }
       });
     });

     videoContainers.forEach(videoContainer => {
       observer.observe(videoContainer);
     });
   }

   // Función para animar los números al hacer scroll
   function animateNumbers() {
     const counters = document.querySelectorAll('.hero__counters article');

     const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           const targetNumber = entry.target.getAttribute('data-target');
           const counterElement = entry.target.querySelector('span');
           const startNumber = 0;
           const duration = 6000; // Milliseconds for the animation

           animateCount(startNumber, targetNumber, counterElement, duration);
           observer.unobserve(entry.target);
         }
       });
     });

     counters.forEach(counter => {
       observer.observe(counter);
     });
   }

   function animateCount(start, target, element, duration) {
     let startTime = null;

     function updateNumber(currentTime) {
       if (!startTime) startTime = currentTime;
       const progress = currentTime - startTime;
       const percentage = Math.min(progress / duration, 1);
       const easedPercentage = easeOutQuad(percentage);
       const currentNumber = Math.floor(easedPercentage * (target - start) + start);
       element.textContent = currentNumber;

       if (percentage < 1) {
         requestAnimationFrame(updateNumber);
       }
     }

     requestAnimationFrame(updateNumber);
   }

   function easeOutQuad(t) {
     return t * (2 - t);
   }


   
