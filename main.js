
// selecting elements from DOM 
const hamMenuIcon = document.querySelector( ".fa-bars" );
const mobileNav = document.querySelector( ".mobile-nav" );

// a function to toggle the ham menu 
hamMenuIcon.addEventListener( "click", () =>
{
    hamMenuIcon.classList.toggle( "fa-times" );
    mobileNav.classList.toggle( "active" );
} )








