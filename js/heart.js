//heart Blanco to rojo
const heartIcon = document.getElementById("heartIcon");
const heartIcon1 = document.getElementById("heartIcon1");
const heartIcon2 = document.getElementById("heartIcon2");

let isRed = false;

heartIcon.addEventListener("click", function() {
    heartIcon.style.color = isRed ? "white" : "red";
    isRed = !isRed;
});

heartIcon1.addEventListener("click", function() {
    heartIcon1.style.color = isRed ? "white" : "red";
    isRed = !isRed;
});

heartIcon2.addEventListener("click", function() {
    heartIcon2.style.color = isRed ? "white" : "red";
    isRed = !isRed;
});



