// Replace this placeholder with your public Google Form URL.
// All quote buttons use this one setting; email is the fallback until configured.
const GOOGLE_FORM_URL = 'GOOGLE_FORM_URL';

if (GOOGLE_FORM_URL !== 'GOOGLE_FORM_URL') {
  document.querySelectorAll('[data-quote-link]').forEach((link) => {
    link.href = GOOGLE_FORM_URL;
  });
}

// Navigation and email links also work without JavaScript.
// Keep the copyright year current automatically.
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
