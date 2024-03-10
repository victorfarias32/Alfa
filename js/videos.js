
var videos = [
  "uploads/portfolio/bootcamp-Inovando-em-4horas.mp4",
  "uploads/portfolio/bootcamp(exemplo1).mp4",
  "uploads/portfolio/bootcamp(exemplo2).mp4",
  "uploads/portfolio/bootcamp(exemplo3).mp4",
  "uploads/portfolio/bootcamp(exemplo4).mp4",
  "uploads/portfolio/bootcamp(exemplo5).mp4"    
];

  var currentIndex = 0;

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    document.getElementById("video5").src = videos[currentIndex];
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    document.getElementById("video5").src = videos[currentIndex];
  }

  document.getElementById("nextBtn").addEventListener("click", nextVideo);
  document.getElementById("prevBtn").addEventListener("click", prevVideo);

  $('#expandedCardModal5').on('hidden.bs.modal', function (e) {
    document.getElementById("video5").pause();
  });


