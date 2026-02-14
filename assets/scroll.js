window.addEventListener("scroll", () => {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  const scroll = window.scrollY;
  video.currentTime = scroll * 0.003;
});
