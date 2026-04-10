// Auto-update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Active nav link highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile nav when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
