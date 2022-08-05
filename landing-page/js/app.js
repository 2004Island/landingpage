/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navigbar = document.getElementById('navbar__list');
const listelem = document.querySelectorAll('li');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function viewportdetect (tag){
    const area = tag.getBoundingClientRect();
    return (
        area.top >= 50
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createnavbar(){
    for (let i=0; i < sections.length; i++){
        navlistitem = document.createElement('li');
        sectname = sections[i].getAttribute('data-nav');
        sectlink = sections[i].getAttribute('id');
        navlistitem.innerHTML = `<a class ="menu__link" data-id="${sectlink}" onclick="scrollto(${i})">${sectname}</a>`;
        navigbar.appendChild(navlistitem);
    }
}
// Add class 'active' to section when near top of viewport and change css rule
function activator(){
    for (const section of sections){
        const main = section.querySelector('h2');
        if (viewportdetect(section)){
            main.style.cssText = 'border-bottom: 3px solid white';
            section.className = "your-active-class";
        }
        else {
            main.style.cssText = 'border-bottom: 1px solid white';
            section.className = "inactive-class";
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollto(num) {
    sections[num].scrollIntoView({behavior: 'smooth'})
  } 

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createnavbar();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', function(){
    activator();
});