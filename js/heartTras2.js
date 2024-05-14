//Heart de color trasparente to rojo
const heartIcons = document.querySelectorAll('.heartIcon');
let isRed = false;

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function() {
        heartIcon.style.color = isRed ? "rgba(255, 255, 255, 0.781)" : "red";
        isRed = !isRed;
    });
});
