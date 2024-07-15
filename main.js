// detectar la rotación de la pantalla del movil, para saltar a calculadora.html
// si la pantalla está en vertical, se queda en index.html
// si la pantalla está en horizontal, se va a calculadora.html

// SOLO FUNCIONA EN MOVILES
// detectar la rotación de la pantalla del movil
window.addEventListener("orientationchange", function () {
    // si la pantalla está en vertical, se queda en index.html
    if (screen.orientation.type === "portrait-primary") {
        window.location.href = "index.html";
    }
    // si la pantalla está en horizontal, se va a calculadora.html
    else if (screen.orientation.type === "landscape-primary") {
        window.location.href = "calculadora.html";
    }
});

// variable que sepa en todo momento la orientación de la pantalla

setTimeout(function () {
    let orientacionInicial = screen.orientation.type;

    setInterval(function () {
        if (screen.orientation.type === orientacionInicial) {
            //Bloqueo de orientación
        } else {
            // si la pantalla está en vertical, se queda en index.html
            orientacionInicial = screen.orientation.type;
        }
    }, 2000);
}, 2000);
