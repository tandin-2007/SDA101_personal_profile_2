// ===================== MENU TOGGLE =====================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
};

// ===================== DARK MODE TOGGLE =====================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDark
    ? "<i class='bx bx-sun'></i>"
    : "<i class='bx bx-moon'></i>";

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

