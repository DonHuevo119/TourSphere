//Heart de color trasparente to rojo
const heartIcons = document.querySelectorAll('.heartIcon');
let isRed = false;

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function() {
        heartIcon.style.color = isRed ? "rgba(240, 248, 255, 0.582)" : "red";
        isRed = !isRed;
    });
});
