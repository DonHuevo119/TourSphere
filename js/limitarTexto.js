// Limitar texto

function limitarTexto(elemento, maxCaracteres) {
    let texto = elemento.innerText;
    if (texto.length > maxCaracteres) {
        elemento.innerText = texto.substring(0, maxCaracteres) + '...';
    }
}

let elementos = document.querySelectorAll('.texto')

elementos.forEach((element) => limitarTexto(element, 150));