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
        area.top >= 0 && 
        area.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav and add onclick command to scroll to corresponding section
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
    const navbar = document.querySelectorAll('.menu__link')
    for (let i=0; i < sections.length; i++){
        const main = sections[i].querySelector('h2');
        if (viewportdetect(sections[i])){
            main.style.cssText = 'border-bottom: 3px solid white';
            sections[i].classList.add("your-active-class");
            navbar[i].style.cssText = 'background: #333; color: #fff';
        }
        else {
            main.style.cssText = 'border-bottom: 1px solid white';
            sections[i].classList.remove("your-active-class");
            navbar[i].style.cssText = 'background: white; color: black';
        }
     }
}

// Scroll to anchor ID using scrollTO event
function scrollto(num) {
    sections[num].scrollIntoView({behavior: 'smooth'});
    document.addEventListener('scroll', function(event) {
        event.preventDefault()
    })
  } 

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createnavbar();

// Set sections as active
document.addEventListener('scroll', function(){
    activator();
});