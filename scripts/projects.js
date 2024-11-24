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

          gsap.fromTo( ".upper", 
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
                markers: false,   
              },
              ease: "ease-in-out",  
            });

          const content = document.querySelector(".pop");
          gsap.fromTo( content, 
            {
              y: 50,
            },
            {
              y: 0, 
              scrollTrigger: {
                trigger: content,  
                start: "top bottom",  
                end: "top 90%",    
                scrub: true,   
                markers: false,      
              },
              ease: "ease-in-out",  
            });

});
   