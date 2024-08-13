const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function esTextoValido(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function btnEncriptar() {
    if (!esTextoValido(textArea.value)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    const textoEncriptado = transformarTexto(textArea.value, true);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = transformarTexto(textArea.value, false);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function transformarTexto(texto, esEncriptar) {
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const original = matrizCodigo[i][0];
        const reemplazo = matrizCodigo[i][1];
        if (esEncriptar) {
            texto = texto.replaceAll(original, reemplazo);
        } else {
            texto = texto.replaceAll(reemplazo, original);
        }
    }

    return texto;
}

function copiarTexto() {
    // Selecciona el contenido del textarea 'mensaje'
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Alerta o confirmación visual
    alert("Texto copiado al portapapeles");
}
