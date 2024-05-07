// JS para algunas funciones básicas

const toast = document.querySelector('.toast')

function login() {
    if (document.querySelector('.loginEmail').value === "admin" && document.querySelector('.loginPassword').value === "admin") {
        location.href = "home.html"
    } else {
        toast.style.display = "block";
        document.querySelector('.ventanaNegra').style.display = "block"
    }
}

function cerrarVentana() {
    document.querySelector('.ventanaNegra').style.display = "none"
    toast.style.display = "none";
}

function irLogin() {
    location.href = "index.html"
}

function irRegister() {
    location.href = "register.html"
}

function irSagrada() {
    location.href = "lugaresDeVisita/sagradaFamilia.html"
}

function irCamp() {
    location.href = "lugaresDeVisita/campNou.html"
}

function irPark() {
    location.href = "lugaresDeVisita/ParkGuell.html"
}

function irHome() {
    location.href = "home.html"
}

function irTop() {
    // Hacer scroll suave hacia la parte superior de la página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
