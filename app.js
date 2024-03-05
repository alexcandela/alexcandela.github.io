document.addEventListener("DOMContentLoaded", function() {
    const esp = document.querySelectorAll('.esp');
    const ing = document.querySelectorAll('.ing');
    const toggle = document.getElementById('idioma');

    function toggleLanguage() {
        if (toggle.checked) {
            // Ocultar elementos en español y mostrar elementos en inglés
            esp.forEach(function(item) {
                item.style.display = 'none';
            });
            ing.forEach(function(item) {
                item.style.display = 'block';
            });
        } else {
            // Mostrar elementos en español y ocultar elementos en inglés
            esp.forEach(function(item) {
                item.style.display = 'block';
            });
            ing.forEach(function(item) {
                item.style.display = 'none';
            });
        }
    }

    toggleLanguage();
    toggle.addEventListener('change', toggleLanguage);
});
