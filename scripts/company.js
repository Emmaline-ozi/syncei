gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

//cards ani
document.addEventListener("DOMContentLoaded", () => {
    gsap.matchMedia().add("(max-width: 767px)", () => {
      gsap.utils.toArray(".about-wrapper").forEach((card) => {     
        gsap.fromTo(card, 
          {
            y: 60,
          },
          {
            y: 0, 
            scrollTrigger: {
              trigger: card,  
              start: "top 85%",  
              end: "top top",    
              scrub: true,   
              markers: false,      
            },
            ease: "ease-in-out",  
          });
      });     
    });

    gsap.matchMedia().add("(min-width: 768px)", () => {
        gsap.utils.toArray(".about-wrapper").forEach((card, index) => {     
          
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-wrapper",  
                    start: "top 100%",  
                    end: "top top",    
                    scrub: true,
                    markers:false,
                    toggleActions: "play none none none",        
                    onEnter: () => { card.style.transition = "transform 0.6s ease-out"; },
                    onLeave: () => { card.style.transition = "none"; },
                }     
            });

            tl.fromTo(card,   
            {
                y: 80,
            },
            {
                y:0,
                ease:"power3.out",
                delay: index * 0.3,
            }        
            );         
        });
    });

});
  
document.addEventListener("DOMContentLoaded", () => {
    const parentSection = document.querySelector('.flexer'); // Parent element
    const stickySidebar = document.querySelector('#stick'); // Sticky sidebar (child)
    const anchors = document.querySelectorAll('.anchor a');
    const contentSections = document.querySelectorAll('.stn');
    
    // Pin the sidebar inside the parent section
    ScrollTrigger.create({
      trigger: parentSection,    // The parent element is the trigger
      pin: stickySidebar,        // The child (sticky sidebar) gets pinned
      start: "top top",           // Pin the sidebar when the top of the parent reaches the top of the viewport
      endTrigger:".divider-middle",
      end: "bottom 95%", // End when the bottom of the parent reaches the bottom of the viewport
      scrub: true,                // Sync with the scroll position for smooth pinning
      markers: false,              // Show markers for debugging (optional)
      pinSpacing: true,

    });

    // sections
   contentSections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            end: "bottom top",
            scrub: true,
            markers: true,
            onEnter: () => {
                anchors.forEach(anchor => anchor.classList.remove('active'));
                contentSections.forEach(sec => sec.classList.remove('visible'));

                anchors[index].classList.add('active');
                section.classList.add('visible');
            },
            onLeave: () => {
                anchors[index].classList.remove('active');
                section.classList.remove('visible');
            }
        });
   });

});
  








// // Sticky Sidebar Functionality
// const anchors = document.querySelectorAll('.anchor a');
// const contentSections = document.querySelectorAll('.stn');

// // Function to create an observer with the desired threshold
// const createObserver = (threshold) => {
//     const removeActiveClasses = () => {
//         anchors.forEach(anchor => anchor.classList.remove('active'));
//         contentSections.forEach(section => section.classList.remove('visible'));
//     };

//     const handleIntersection = (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 removeActiveClasses();
//                 document.querySelector(`.side-text a[href='#${entry.target.id}']`).classList.add('active');
//                 entry.target.classList.add('visible');
//             }
//         });
//     };

//     const observerOptions = { threshold };
//     const observer = new IntersectionObserver(handleIntersection, observerOptions);

//     // Observe all sections
//     contentSections.forEach(section => observer.observe(section));
// };

// // Set up media query and initialize observer
// const mediaQuery = window.matchMedia('(max-width: 768px)');
// const initObserver = () => {
//     const threshold = mediaQuery.matches ? 0.5 : 0.8; // Change threshold based on screen size
//     createObserver(threshold);
// };

// // Listen for media query changes
// mediaQuery.addEventListener('change', initObserver);

// // Initialize observer on page load
// initObserver();
