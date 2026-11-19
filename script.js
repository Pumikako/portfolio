document.body.classList.add("reveal-ready");

const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".navigation-links");
const navigationItems = document.querySelectorAll(".navigation-links a");

menuButton.addEventListener("click", function () {
    const menuIsOpen = navigationLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

navigationItems.forEach(function (navigationItem) {
    navigationItem.addEventListener("click", function () {
        navigationLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});

const currentYear = document.querySelector("#current-year");
currentYear.textContent = new Date().getFullYear();
