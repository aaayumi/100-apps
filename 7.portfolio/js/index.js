const fixednav = document.querySelector("#fixednav");
const sectionTwo = document.querySelector("#section2");

let topOfNav = fixednav.offsetTop;
let topSectionTwo = sectionTwo.offsetTop;
console.log(topOfNav);
console.log(topSectionTwo);

function fixedNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = fixednav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    
 /*if (window.scrollY >= topSectionTwo ) {
      document.body.style.paddingTop = topSectionTwo.offsetHeight + 'px';
  document.body.classList.add('title');
 } */
  } 
};


window.addEventListener('scroll', fixedNav);