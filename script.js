const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

let score = 0;

scoreDisplay.textContent = "Score: " + score;

function MoveTarget() {
    target.style.left =
        Math.random() * (window.innerWidth - 75) + "px";

    target.style.top =
        Math.random() * (window.innerHeight - 75) + "px";
}

MoveTarget();

function AddScore() {
    score += 1;
    scoreDisplay.textContent = "Score: " + score;
}

target.addEventListener("click", function () {
    MoveTarget();
    AddScore();
});