document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  video.addEventListener("ended", function() {
    video.pause();
  });
});
