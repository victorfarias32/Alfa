
var videos2 = [
    "uploads/portfolio/bootcamp1.mp4",
    "uploads/portfolio/bootcamp2.mp4"
];

var currentIndex11 = 0;

function nextVideo11() {
    currentIndex11 = (currentIndex11 + 1) % videos2.length;
    document.getElementById("video11").src = videos2[currentIndex11];
}

function prevVideo11() {
    currentIndex11 = (currentIndex11 - 1 + videos2.length) % videos2.length;
    document.getElementById("video11").src = videos2[currentIndex11];
}

document.getElementById("nextBtn11").addEventListener("click", nextVideo11);
document.getElementById("prevBtn11").addEventListener("click", prevVideo11);

$('#expandedCardModal11').on('hidden.bs.modal', function (e) {
    document.getElementById("video11").pause();
});