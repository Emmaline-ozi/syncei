document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".letters", 2, {
        top: "20",
        ease: "power3.inOut",
        delay: 2,
    });
    
    gsap.to(".top-left", 2, {
        left: "0",
        ease: "power3.inOut",
        delay: 4,
    });
    gsap.to(".bottom-right", 2, {
        y: 100,
        ease: "power3.inOut",
        delay: 3,
    });
    
    gsap.to(".go-right", 2, {
        right: "0",
        ease: "power3.inOut",
        delay: 4,
    });
    
    gsap.to(".block-left", 2, {
        left: "-50%",
        ease: "power3.inOut",
        delay: 4,
    });
    
    gsap.to(".block-right", 2, {
        right: "-50%",
        ease: "power3.inOut",
        delay: 4,
    });
    gsap.to(".slide-right", 2, {
        x: 0,
        ease: "power3.inOut",
        delay: 4,
    });
    
});
 
document.addEventListener("DOMContentLoaded", () => {
    if (isSafari()) {
        const video = document.querySelector("video");
        if (video) {
            video.setAttribute("controls", "controls");
        }
    }
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