
let play = document.querySelector(".Cheques");
let play1 = document.querySelector(".OnMyWay");

play.addEventListener("click", () => {
    var audio = new Audio("Cheques.mp3");
    audio.play();
});

play1.addEventListener("click", () => {
    var audio = new Audio("On My Way.mp3");
    audio.play();
});