(function ($, Drupal, once) {
  Drupal.behaviors.moviePage = {
    attach: function (context, settings) {
      let modalDiv = document.querySelector(".expandedContainer");
      let closeTag = document.getElementById("close-tag");
      let expandedImage = document.getElementById("expandedImage");
      let movieTitle = document.getElementById("movieTitle");
      let modalInfo = document.getElementById("modalInfo");

      once("slide", ".slider", context).forEach((element) => {
        $(".slider .view-content").slick({
          arrows: true,
          centerPadding: "0px",
          dots: true,
          slidesToShow: 1,
          infinite: false,
        });
      });
      once("popUp", ".view-id-movies_list", context).forEach((element) => {
        const imagesContainer = document.querySelector(".view-id-movies_list");
        let handleImageClick = (e) => {
          if (e.target.tagName === "IMG") {
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
            expandedImage.src = image;
            modalDiv.style.display = "block";
            movieTitle.textContent = title;
            expandedImage.src = image;
            modalInfo.textContent = body;
          } else {
            return;
          }
        };

        imagesContainer.onclick = handleImageClick;
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
