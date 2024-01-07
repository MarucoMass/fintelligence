// Obtén el elemento del span donde mostrarás el año
var currentYearElement = document.getElementById("footer__year");

// Obtén el año actual
var currentYear = new Date().getFullYear();

// Asigna el año al elemento del span
currentYearElement.textContent = currentYear;