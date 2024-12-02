gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis with faster settings
const lenis = new Lenis({
  smooth: true,
  lerp: 0.2, // Make scrolling faster (default is 0.1, closer to 1 is faster)
});

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Sync Lenis with GSAP's ticker
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Handle anchor links for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor link behavior

    const targetId = anchor.getAttribute('href').substring(1); // Get target ID
    const targetElement = document.getElementById(targetId); // Find target element

    if (targetElement) {
      // Use Lenis to scroll to the target
      lenis.scrollTo(targetElement, {
        duration: 0.8, // Faster smooth scroll (reduce for quicker scroll)
        easing: (t) => t, // Linear easing for snappier scrolling
      });
    }
  });
});


// hero
document.addEventListener("DOMContentLoaded", () => {
    ScrollTrigger.create({
            trigger: ".hero",
            start:  "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            markers: false,
        });

        gsap.to(".first",{
            x: () => -innerWidth * 3,
            scale: 5,
            ease: "power2.inOut",
            scrollTrigger:{
                endTrigger: ".hero",
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true,
                markers: false,
            }
        });
        gsap.to(".second",{
            x: () => innerWidth * 3,
            scale: 5,
            ease: "power2.inOut",
            scrollTrigger:{
                endTrigger: ".hero",
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true,
                markers: false,
            }
        });

        gsap.to(".img-holder", {
            rotation: 0,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: "power2.inOut",
            scrollTrigger:{
                endTrigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                markers: false,
            }
        });
          gsap.to(".img-holder img", {
              scale: 1,
              ease: "power2.inOut",
              scrollTrigger:{
                  endTrigger: ".hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  pin: true,
                  markers: false,
              }
          });
          gsap.to(".scroll", {
              scale: 0,
              ease: "power2.inOut",
              scrollTrigger:{
                  endTrigger: ".hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  markers: false,
              }
          });
          gsap.to(".scroll", {
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger:{
                  endTrigger: ".hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  markers: false,
              }
          });
          gsap.to(".record", {
              xPercent: 550,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger:{
                  endTrigger: ".hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  markers: false,
              }
          });

            gsap.matchMedia().add("(max-width: 1113px)", () => {
              gsap.fromTo( ".upper-hero", 
                {
                  xPercent: -100,
                  opacity: 0,
                },
                {
                  xPercent: 0,
                  opacity: 1,
                  scrollTrigger: {
                    endTrigger: ".content",
                    start: "top top",
                    end: "top 90%",
                    scrub: true,
                    pin: true,
                    markers: false,   
                  },
                  ease: "ease-in-out",  
                });
            });
            gsap.matchMedia().add("(min-width: 1114px)", () => {
              gsap.fromTo( ".upper-hero", 
                {
                  xPercent: 200,
                },
                {
                  xPercent: 0,
                  scrollTrigger: {
                    endTrigger: ".hero",
                    start: "10% top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                    markers: false,   
                  },
                  ease: "ease-in-out",  
                });
            });

            gsap.matchMedia().add("(min-width: 1114px)", () => {
              const content = document.querySelectorAll(".pop");
              content.forEach((slider) => {
                gsap.fromTo( content, 
                  {
                    y: 25,
                  },
                  {
                    y: 0, 
                    scrollTrigger: {
                      trigger: slider,  
                      start: "top bottom",  
                      end: "top 80%",    
                      scrub: true,   
                      markers: false,      
                    },
                    ease: "power2.inOut",  
                  });   
              });   

              
             const uppercard = document.querySelectorAll(".img");
             uppercard.forEach((card) =>{
               gsap.fromTo( card, 
                 {
                   y: 35,
                 },
                 {
                   y: 0, 
                   scrollTrigger: {
                     trigger: card,  
                     start: "top bottom",  
                     end: "top 90%",    
                     scrub: true,   
                     markers: false,      
                   },
                   ease: "power2.inOut",  
                 });
              });                        
            });

            gsap.matchMedia().add("(max-width: 1024px)", () => {
              const content = document.querySelectorAll(".pop");
              content.forEach((slider) => {
                gsap.fromTo( content, 
                  {
                    y: 50,
                  },
                  {
                    y: 0, 
                    scrollTrigger: {
                      trigger: slider,  
                      start: "top bottom",  
                      end: "top 80%",    
                      scrub: true,   
                      markers: false,      
                    },
                    ease: "ease-in-out",  
                  });   
              });   

              
             const uppercard = document.querySelectorAll(".img");
             uppercard.forEach((card) =>{
               gsap.fromTo( card, 
                 {
                   y: 40,
                 },
                 {
                   y: 0, 
                   scrollTrigger: {
                     trigger: card,  
                     start: "top bottom",  
                     end: "top 90%",    
                     scrub: true,   
                     markers: false,      
                   },
                   ease: "ease-in-out",  
                 });
             });   
                          
            });
          
});

// filterbuttons
const filterButtons = document.querySelectorAll(".filter");
const galleryItem = document.querySelectorAll(".gallery-item");
// picModal
const picModal = document.getElementById("picModal");
const modalImage = document.getElementById("modal-image");
const picDsp = document.getElementById("modal-image-description");
// video
const vidModal = document.getElementById("vidModal");
const vidDsp = document.getElementById("modal-video-description");
const modalVideo = document.getElementById("modal-video");
// close buttons
const picClose = document.getElementById("modal-pic-close");
const vidClose = document.getElementById("modal-vid-close");


filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => {
          btn.classList.remove('active')
        });
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');

        galleryItem.forEach((item) => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        });
    });
});

// modal display

galleryItem.forEach((item) => {
  const videoElement = item.querySelector('video');

    item.addEventListener('click', () => {
      const dsp = item.getAttribute('data-description');
      const imgElement = item.querySelector('img');
      
      if(imgElement){      
        const imgScr = imgElement.src;
        modalImage.src = imgScr;
        picDsp.textContent = dsp;
        picModal.style.display = "grid";
        picModal.style.pointerEvents = "all";
        document.body.classList.add('modal-open');  

      }else if(videoElement){
        document.body.classList.add('modal-open');  
        const srcElement = videoElement.querySelector("source");
        const vidSrc = srcElement.src;
        modalVideo.src = vidSrc;
        vidDsp.textContent = dsp;
        vidModal.style.display = "grid";
        modalVideo.requestFullscreen();
        modalVideo.play();       
      }
    });

    item.addEventListener('mouseenter', () => {
      if(videoElement)
        {
        videoElement.play();
      }
    });
    item.addEventListener('mouseleave', () => {
      if(videoElement)
        {
        videoElement.pause();
      }
    });
});


picClose.addEventListener('click', () => {
  picModal.style.display = "none";
  modalImage.src = "";
});
vidClose.addEventListener('click', () => {
  vidModal.style.display = "none";
  modalVideo.pause(); 
  modalVideo.currentTime = 0; 
  modalVideo.src = "";
});


