// scripts.js
// This file provides basic interactivity for the VDS Law Firm website.
// It handles toggling the mobile navigation menu and intercepts the
// contact form submission to display a confirmation message instead of
// actually sending data (since back‑end processing is outside the scope
// of this prototype).

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Swap the hamburger icon to a close icon and back
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Contact form submission handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Provide a simple confirmation message to the user
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
    // Reset the form
    form.reset();
  });
});

