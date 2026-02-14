document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("heroVideo");

  window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.05;
    const scale = 1 + scrollY * 0.0005;

    if (video) {
      video.style.transform = `
        rotateY(${rotation}deg)
        scale(${scale})
      `;
    }
  });
});
