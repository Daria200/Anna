const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log('click')
  }) 

const mainphoto = document.querySelector('.main-photo');
const headerText = document.querySelector('.header-text');
const button1 = document.querySelector('.button-1');
const tl = new TimelineMax();
tl.fromTo(mainphoto,1,{x:"-100%"},{x:"0%", ease:Power2.easeInOut})
.fromTo(headerText,0.5,{opacity:0, x:"30"},{opacity:1, x:"0", ease:Power2.easeInOut}, "-=0.5")
.fromTo(button1,0.5,{opacity:0, x:"30"},{opacity:1, x:"0", ease:Power2.easeInOut}, "-=0.5")