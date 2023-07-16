document.addEventListener("DOMContentLoaded", function () {
  var bigImage = document.querySelector(".big-image");

  bigImage.addEventListener("mouseover", function () {
      this.classList.add("zoomed");
  });

  bigImage.addEventListener("mouseout", function () {
      this.classList.remove("zoomed");
  });
});
