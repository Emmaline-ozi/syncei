const menuButton = document.getElementById('menu-button');
const navBar = document.getElementById('navbar')
const dropDown = document.getElementById('dropdown');
const hasSubMenu = document.querySelectorAll('#has-submenu');

const actions = document.querySelector('.action');
actions.addEventListener('click', () =>{
    actions.classList.toggle('hovered');
});

menuButton.addEventListener('click', () => {
    dropDown.classList.toggle('show-menu');
    menuButton.classList.toggle('rotate-icon');
    navBar.classList.toggle('darker');
   hasSubMenu.forEach((subContent) => {
    const subMenu = subContent.querySelector('#sub-menu');
        if(subContent.classList.contains('grow')){
            subMenu.removeAttribute('style');
            subContent.classList.remove('grow');
        }
   });
});

hasSubMenu.forEach((menu) => {
    const subMenu = menu.querySelector('#sub-menu');
    menu.addEventListener('click', () => {
        const showMenu = document.querySelector('.grow');
      
        toggleItem(menu);

        if(showMenu && showMenu!== menu){
            toggleItem(showMenu);
        }
    });
});

const toggleItem = (menu) => {
    const hasSub = menu.querySelector('#sub-menu');

    if(menu.classList.contains('grow')){
        hasSub.removeAttribute('style');
        menu.classList.remove('grow');
    }else{
        hasSub.style.height = hasSub.scrollHeight + 'px';
        menu.classList.add('grow');
    }
}

// // =========== DISAPPEAR ON SCROLL=======\\
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var triggerPoint = document.documentElement.scrollHeight * 0.2; // 20% of page height

  if (window.pageYOffset > triggerPoint) {
    // Only start hiding/showing navigation after scrolling down a percentage of the page
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("#navigate").style.top = "0";
    } else {
      document.querySelector("#navigate").style.top = "-100px";
    }
  } else {
    // Reset navigation position
    document.querySelector("#navigate").style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};

// preloader
const loaderContainer = document.querySelector('.loader-container');
const pageContent = document.querySelector('#page-content'); 
document.body.classList.add('no-scroll');
window.addEventListener('load', () => {
  setTimeout(() => {
    loaderContainer.classList.add('away');
      setTimeout(() => {
        pageContent.classList.add('shown');
        document.body.classList.remove('no-scroll');
      }, 500);
  }, 3000);
});

