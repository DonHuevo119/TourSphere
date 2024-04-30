
const contenedorDatos = document.querySelector('.containerPadre')
const api = 'https://www.el-tiempo.net/api/json/v2/provincias'
const api2 = 'https://www.el-tiempo.net/api/json/v2/provincias/08'
const api3 = 'https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08118'


fetch(api)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta)
    })

fetch(api2)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta)
        imprimirDatos(respuesta)
    })

fetch(api3)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        console.log(respuesta)
        imprimirDatos(respuesta)
    })

setInterval(actualizarHora, 1000);

function actualizarHora() {
    // Obtener la fecha y hora actual
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActual = fechaActual.getMinutes();
    const segundosActual = fechaActual.getSeconds();
    const horaFormateada = `${horaActual}:${minutosActual < 10 ? '0' + minutosActual : minutosActual}:${segundosActual < 10 ? '0' + segundosActual : segundosActual}`;

    // Actualizar solo el contenido de la hora en el elemento HTML correspondiente
    const horaElemento = document.getElementById('hora');
    horaElemento.textContent = horaFormateada;
}

function imprimirDatos(datos) {
    // Obtener la fecha y hora actual

    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActual = fechaActual.getMinutes();
    const segundosActual = fechaActual.getSeconds(); // Obtener los segundos
    const horaFormateada = `${horaActual}:${minutosActual < 10 ? '0' + minutosActual : minutosActual}:${segundosActual < 10 ? '0' + segundosActual : segundosActual}`; // Incluir los segundos

    // nombre_provincia = datos['provincia']['NOMBRE_PROVINCIA'];
    estado = datos['ciudades']['6']['stateSky']['description'];
    min = datos['ciudades']['6']['temperatures']['min'];
    max = datos['ciudades']['6']['temperatures']['max'];

    const elemento = document.createElement('div');
    elemento.classList.add('container');
    elemento.classList.add('containerTiempo');
    elemento.classList.add('d-flex');
    elemento.classList.add('flex-row');
    elemento.classList.add('flex-wrap');
    elemento.classList.add('justify-content-center');
    elemento.classList.add('gap-4');

    elemento.innerHTML = `
            <div class="contenedorB group_1 d-flex flex-column justify-content-around align-items-center text-light animate__animated animate__fadeInLeft">
                <img src="img/city-life.png" alt="" height="60" width="60">
                <h1>Barcelona</h1>
            </div>
            <div class="contenedorB group_1 d-flex flex-column justify-content-around align-items-center text-light animate__animated animate__fadeInLeft">
            <img src="https://www.el-tiempo.net/themes/eltiempo-theme/assets/img/weather-static/cloudy.svg" alt width="80" height="80">
            <h1>Nuboso</h1>
            </div>
            <div class="contenedorB group_1 d-flex flex-column justify-content-around align-items-center text-light animate__animated animate__fadeInLeft" style = "width=20%;">
                <i class="bi bi-alarm" style="font-size: 4em;"></i>
                <h1 id = "hora">${horaFormateada}</h1>
            </div>
            <div class="contenedorB group_1 d-flex flex-row justify-content-around align-items-center text-light animate__animated animate__fadeInLeft">
                <i class="bi bi-thermometer-half" style="font-size: 5em;"></i>
                <div class="de">
                    <h1 class = "fs-2">Min: ${min}°C</h1>
                    <h1 class = "fs-2">Max: ${max}°C</h1>
                </div>
            </div>`;
    contenedorDatos.appendChild(elemento);
}