// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// JavaScript for toggling the mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");
  const navbarExtra = document.querySelector(".navbar-extra");

  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
    navbarExtra.classList.toggle("active");
  });

  // Hide menu when clicking on a link
  navbarNav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navbarNav.classList.remove("active");
      navbarExtra.classList.remove("active");
    }
  });
});

// menampilkan pesan peringatan pada form kontak
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = form.querySelector('input[placeholder="name"]');
  const emailInput = form.querySelector('input[placeholder="email"]');
  const messageInput = form.querySelector(
    'input[placeholder="saran & masukan"]'
  );

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      valid = false;
      alert("Name is required");
    }

    // Validate email
    if (!validateEmail(emailInput.value.trim())) {
      valid = false;
      alert("Please enter a valid email address");
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      valid = false;
      alert("Message is required");
    }

    if (valid) {
      alert("Form submitted successfully");
      form.reset();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
