var toastEl = document.querySelector('.toast');
var toast = new bootstrap.Toast(toastEl);

function login() {
    if (document.querySelector('.loginEmail').value === "admin" || document.querySelector('.loginPassword').value === "admin") {
        location.href = "home.html"
    } else {
        toast.show();
        document.querySelector('.ventanaNegra').style.display = "block"
    }
}

function cerrarVentana() {
    document.querySelector('.ventanaNegra').style.display = "none"
    toast.hide();
}