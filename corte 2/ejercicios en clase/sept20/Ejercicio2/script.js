function convertirTexto() {
    let texto = document.querySelector("#texto").value;
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = contarLongitud(texto);
    console.log("Tercer Caracter", obtenerCaracter(texto, 2));
}
function mayusculas(txt) {
    return txt.toUpperCase();
}
function contarLongitud(texto) {
    return texto.length;
}
function obtenerCaracter(texto, posicion) {
    //return texto.charAt(posicion);
    if (texto.charAt(posicion) == "") {
        return null;
    } else {
        return texto.charAt(posicion);
    }
}
function extraer(txt) {
    return txt.substring(2, 5);
}
function reemplazar(txt) {
    return txt.replace("martes, viernes");
}
function dividir(txt) {
    return txt.split(" ");
}
