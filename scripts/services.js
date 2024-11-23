gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {

    gsap.matchMedia().add("(min-width: 769px)", () => {
        // Animation for larger screens
        entries.forEach(entry => {
          let entryText = entry.querySelector('.entry__left');
          let entryMedia = entry.querySelector('.entry__right'); 
      
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: entry, 
              start: 'top bottom',
              end: 'bottom 90%',
              scrub: true,
            }
          });
      
          // Default animation parameters for larger screens
          tl.fromTo(entryText, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 });
          tl.fromTo(entryMedia, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, '<');
        });
      });
     
});

// accordion
const acc = document.querySelectorAll(".accordion");
  
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        // Check if the clicked accordion is already active
        const isAlreadyActive = this.classList.contains("active");
  
        // Close all accordion panels and remove the active class from each
        acc.forEach((accordion) => {
          accordion.classList.remove("active");
          const panel = accordion.nextElementSibling;
          if (panel) {
            panel.style.display = "none"; // Hide all panels
          }
        });
  
        // If the clicked accordion is not already active
        if (!isAlreadyActive) {
          this.classList.add("active");
  
          let panel = this.nextElementSibling;
          if (panel) {
            panel.style.display = "block"; // Show the current panel
          }
  
          
        }
      });
    };
