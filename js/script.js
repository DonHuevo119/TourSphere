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

