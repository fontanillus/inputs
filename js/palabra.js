function verificarPalabra() {
    let palabra = document.getElementById("palabra").value.toLowerCase(); // Convertir a minúsculas para comparar
    let letraInicial = palabra.charAt(0); // Obtener primera letra

    let esBonita = (palabra.length === 9 && letraInicial === 'h') || (palabra.length === 5 && letraInicial === 'p');

    let resultado = document.getElementById('resultadoPalabra');
    resultado.innerText = esBonita
        ? "La palabra es bonita"
        : "La palabra no es bonita";

    resultado.style.color = esBonita ? "green" : "red";

    console.log(resultado.innerText); // O también podrías usar: console.log(esBonita);
}