(function ($, Drupal, once) {
  Drupal.behaviors.popup = {
    attach: function (context, settings) {
      let modalDiv = document.querySelector(".expandedContainer");
      let closeTag = document.getElementById("close-tag");
      let expandedImage = document.getElementById("expandedImage");
      let movieTitle = document.getElementById("movieTitle");
      let modalInfo = document.getElementById("modalInfo");
      once("popUp", ".view-display-id-page_1", context).forEach((element) => {
        const imagesContainer = document.querySelector(
          ".view-display-id-page_1"
        );
        let handleImageClick = (e) => {
          if (e.target.tagName === "IMG") {
            let element = $(e.target).closest("article");
            let title = element.find(".field--name-title").text();
            // let date = element.querySelector(".field--name-field-release-date");
            let image = element.find(".img-fluid").attr("src");
            console.log(image);
            let body = element.find(".field--name-field-description p").text();
            // image = image.src;
            // title = title.textContent;
            // date = date.textContent;

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
