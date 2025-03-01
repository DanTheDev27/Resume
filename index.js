// script.js

// Get the dark mode toggle checkbox
const toggleSwitch = document.getElementById('dark-mode-toggle');

// Check if dark mode preference is stored in localStorage
const savedTheme = localStorage.getItem('theme');

// If dark mode is saved in localStorage, apply it
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;  // Check the toggle to indicate dark mode is on
}

// Toggle dark mode on switch change
toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
