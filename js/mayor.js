function encontrarMayor() {
    const uno = parseFloat(document.getElementById('uno').value);
    const dos = parseFloat(document.getElementById('dos').value);

    let mensaje = '';
    if (uno > dos) {
        mensaje = `El número mayor es: ${uno}`;
    } else if (dos > uno) {
        mensaje = `El número mayor es: ${dos}`;
    } else {
        mensaje = 'Ambos números son iguales.';
    }

    document.getElementById('resultado').textContent = mensaje;
    console.log(mensaje);

}