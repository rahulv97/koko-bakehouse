'use strict';

// Keep the footer current without making the menu or ordering depend on JavaScript.
document.getElementById('year').textContent = String(new Date().getFullYear());
