function calcularNivel() {
    const nombre = document.getElementById("nombre").value;
    const anys = Number(document.getElementById("anys").value);
    const resultado = document.getElementById("resultado");
    let nivel = "";

    if (anys < 2) {
        nivel = "Nivel Principiante";
    } else if (anys >= 2 && anys <= 4) {
        nivel = "Nivel Intermedio";
    } else if (anys > 4 && anys <= 7) {
        nivel = "Nivel Avanzado";
    } else if (anys > 7 && anys <= 10) {
        nivel = "Nivel Experto";
    } else if (anys > 10) {
        nivel = "Nivel Gurú";
    } else {
        nivel = "Datos no válidos";
    }

    resultado.innerHTML = `${nombre} con ${anys} año/s en el mercado laboral, tiene una experiencia laboral de: <strong>${nivel}</strong>.`;
    console.log(resultado.textContent);
}