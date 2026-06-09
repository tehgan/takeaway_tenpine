// Sticky navbar
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#overview
const HEADER = document.querySelector("header");
const OBSERVER = new IntersectionObserver(((entries) => {
    $(".navbar-container").toggleClass("navbar-stickifier", !entries[0].isIntersecting);
}));

OBSERVER.observe(HEADER);