(function ($, Drupal, once) {
  Drupal.behaviors.moviePage = {
    attach: function (context, settings) {
      let modalDiv = document.getElementById("expandedContainer");
      let closeTag = document.getElementById("close-tag");
      let expandedImage = document.getElementById("expandedImage");
      let movieTitle = document.getElementById("movieTitle");
      let modalInfo = document.getElementById("modalInfo");
      once("slide", ".slider", context).forEach((element) => {
        $(".slider").slick({
          arrows: true,
          centerPadding: "0px",
          dots: true,
          slidesToShow: 1,
          infinite: false,
        });
      });
      once("popUp", ".imageContainer", context).forEach((element) => {
        const imagesContainer = document.querySelectorAll(".imageContainer");
        let handleImageClick = (e) => {
          let element = e.target.parentNode;
          let title = element.querySelector("h1");
          let date = element.querySelector("p");
          let image = element.querySelector("img");
          let body = element.querySelector("h3");
          image = image.src;
          title = title.textContent;
          date = date.textContent;
          body = body.textContent;
          modalDiv.style.display = "block";
          expandedImage.src = image.src;
          modalDiv.style.display = "block";
          movieTitle.textContent = title;
          expandedImage.src = image;
          modalInfo.textContent = body;
        };
        imagesContainer.forEach((imageContainer) => {
          imageContainer.onclick = handleImageClick;
        });
      });
      once("popUp", ".expanded", context).forEach((element) => {
        let handleCloseClick = () => {
          modalDiv.style.display = "none";
        };
        closeTag.onclick = handleCloseClick;
      });
    },
  };
})(jQuery, Drupal, once);
