// Sticky navbar
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#overview
// TODO: Profile performance versus 'old-fashioned' way (scroll events)
const HEADER = document.querySelector("header");
const OBSERVER = new IntersectionObserver(((entries) => {
    $(".navbar-container").toggleClass("navbar-stickifier", !entries[0].isIntersecting);
}));

OBSERVER.observe(HEADER);