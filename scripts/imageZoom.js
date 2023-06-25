window.onload = () => {
    var smallImages = document.querySelectorAll(".small-image");

    smallImages.forEach(function(image) {
      image.addEventListener("mouseover", function() {
        var preview = document.getElementById("preview");
        preview.src = image.getAttribute("data-preview");
      });
    
      image.addEventListener("mouseout", function() {
        var preview = document.getElementById("preview");
        preview.src = "images/defaultImage.jpg";
      });
    });
}