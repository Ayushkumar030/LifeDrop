
// =================================
// LIFEDROP - JAVASCRIPT
// =================================


// 1. NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// 2. SECTION REVEAL ANIMATION

const sections = document.querySelectorAll(
    ".section, .hero-content, .cta-section"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    section.classList.add("reveal");
    observer.observe(section);
});


// 3. BACK TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.classList.add("back-to-top");

topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);


// Show button while scrolling

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});


// Scroll to homepage

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 4. CONSOLE MESSAGE

console.log("LifeDrop Website Loaded Successfully!");
