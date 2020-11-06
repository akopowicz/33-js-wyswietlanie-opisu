let paragraf = document.getElementById('opis');
let button = document.querySelector('button');

button.onclick = function() {
    paragraf.textContent = 'tekst potwierdzający działanie funkcji';
}