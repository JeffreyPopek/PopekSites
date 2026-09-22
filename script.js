// Navigation and contact links work without JavaScript.
// Keep the copyright year current automatically.
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
