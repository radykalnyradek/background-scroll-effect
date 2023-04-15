const bgImage = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImage.style.opacity = 1 - window.pageYOffset / 800;
  if (window.innerWidth > 900) {
    bgImage.style.backgroundSize = 200 - window.pageYOffset / 12 + "%";
  } else {
    bgImage.style.backgroundSize = 400 - window.pageYOffset / 12 + "%";
  }
}
