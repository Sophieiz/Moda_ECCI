document.addEventListener("DOMContentLoaded", () => {
    const hora = new Date().getHours();
    let saludo = '';

    if (hora < 12) {
        saludo = '¡Buenos días! Explora el mundo del color y la moda.';
    } else if (hora < 18) {
        saludo = '¡Buenas tardes! Explora el mundo del color y la moda.';
    } else {
        saludo = '¡Buenas noches! Explora el mundo del color y la moda.';
    }

    const elementoSaludo = document.getElementById('saludo-dinamico');
    if (elementoSaludo) {
        elementoSaludo.textContent = saludo;
    }
});