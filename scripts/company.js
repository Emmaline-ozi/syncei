gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

//cards ani
document.addEventListener("DOMContentLoaded", () => {
    gsap.matchMedia().add("(max-width: 980px)", () => {
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

});
  
// sidebar & sections
document.addEventListener("DOMContentLoaded", () => {
    const parentSection = document.querySelector('.more'); // Parent element
    const stickySidebar = document.querySelector('#stick'); // Sticky sidebar (child)
    const anchors = document.querySelectorAll('.anchor a');
    const contentSections = document.querySelectorAll('.stn');
    
    // Pin the sidebar inside the parent section
    gsap.matchMedia().add("(max-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: parentSection,    
      pin: stickySidebar,        
      start: "top 20%",           
      end: "bottom 95%", 
      scrub: true,              
      markers: false,            
      pinSpacing: true,

        });
    });
    gsap.matchMedia().add("(min-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: parentSection,    
      pin: stickySidebar,        
      start: "top top",           
      end: "bottom 95%",
      endTrigger:"#steps", 
      scrub: true,              
      markers: false,            
      pinSpacing: true,

        });
    });
    

    // sections
   contentSections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 95%",
            end: "bottom 50%",
            scrub: true,
            markers: false,
            onEnter: () => {
                anchors.forEach(anchor => anchor.classList.remove('active'));
                contentSections.forEach(sec => sec.classList.remove('visible'));

                anchors[index].classList.add('active');
                section.classList.add('visible');
            },
            onEnterBack: () => {
                anchors.forEach(anchor => anchor.classList.remove('active'));
                contentSections.forEach(sec => sec.classList.remove('visible'));

                anchors[index].classList.add('active');
                section.classList.add('visible');
            },
            onLeave: () => {
                anchors[index].classList.remove('active');
                section.classList.remove('visible');
            },
            onLeaveBack: () => {
                anchors[index].classList.remove('active');
                section.classList.remove('visible');
            }
        });
   });

});
  
    // team
document.addEventListener("DOMContentLoaded", () => {
   
    const cards = gsap.utils.toArray(".team-flex-wrap .card");

    gsap.matchMedia().add("(max-width: 1023px)", () => {
        gsap.to(cards, {
            xPercent: -100 * (cards.length) ,
            scrollTrigger:{
                trigger:".team-flex-wrap",
                start:"top 5%",
                pin:true,
                ease: "ease-in-out",
                scrub: true,
                markers: true,
            }
        })
    });
    gsap.matchMedia().add("(min-width: 1024px)", () => {
        gsap.to(cards, {
            xPercent:-100 * (cards.length - 1.5),
            scrollTrigger:{
                trigger:".team-flex-wrap",
                start:"top 5%",
                pin: true,
                ease: "none",
                scrub: true,
                markers: false,
            }
        })
    });
         
});
 
// testimonials
const container = document.querySelector('#slider');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    // container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    // container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    // container.classList.remove('active');
});

// Prevent default text selection behavior
container.addEventListener('dragstart', (e) => {
    e.preventDefault(); // Prevent default drag behavior
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the fn from running
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for smoother drag speed
    container.scrollLeft = scrollLeft - walk;
});

// Add touch support for mobile devices
container.addEventListener('touchstart', (e) => {
    isDown = true;
    // container.classList.add('active');
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
    isDown = false;
    // container.classList.remove('active');
});

container.addEventListener('touchmove', (e) => {
    if (!isDown) return; // Stop the fn from running
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for smoother drag speed
    container.scrollLeft = scrollLeft - walk;
});

// FAQS

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
  
          // Display the target image
          const dataId = this.getAttribute("data-id");
          const targetImg = entry.querySelector(`#${dataId}`); // Scoped to the current entry
  
          
        }
      });
    };










