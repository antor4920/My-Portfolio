document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for scroll and dark mode toggle
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 50) {
      section.classList.add("visible");
    }
  });
});

// Scroll to Contact Section
document.querySelector(".scroll-to-contact").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
  // Change button text based on mode
  darkModeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mood"
    : "Dark Mood";

  // Add dark mode class to all sections
  sections.forEach((section) => {
    section.classList.toggle("dark-mode");
  });
});

// JavaScript for hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
