const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function closeMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach((link) => link.addEventListener("click", closeMobileMenu));

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY + 90;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (!sectionLink) return;

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionLink.classList.add("active-link");
        } else {
            sectionLink.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);
scrollActive();

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const phoneButton = document.getElementById("phone-button");

if (phoneButton) {
    const defaultLabel = "Call / Text Me";
    const phoneLabel = phoneButton.dataset.phone || "+63 917 517 0590";

    phoneButton.addEventListener("click", (event) => {
        event.preventDefault();
        phoneButton.textContent = phoneButton.textContent.trim() === defaultLabel ? phoneLabel : defaultLabel;
    });
}
