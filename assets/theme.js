document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("heroVideo");

  function handleScroll() {
    if (!video) return;

    const scrollY = window.scrollY;

    // Ultra subtle movement
    const rotation = scrollY * 0.008;
    const scale = 1 + scrollY * 0.0001;

    video.style.transform = `
      perspective(1400px)
      rotateY(${rotation}deg)
      scale(${scale})
    `;
  }

  window.addEventListener("scroll", handleScroll);
});
