
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


}
main();








                                                    // POP-UP


                                                    function openPopup(imgElement, ...configDetails) {
                                                      let popupImage = document.getElementById("popup-img");
                                                      let popupDetails = document.getElementById("popup-details");
                                                      let popup = document.getElementById("popup");
                                                  
                                                      // Set the clicked image in the pop-up
                                                      popupImage.src = imgElement.src;
                                                  
                                                      // Clear previous configurations
                                                      popupDetails.innerHTML = "";
                                                  
                                                      // Add new configurations dynamically
                                                      configDetails.forEach(detail => {
                                                          let listItem = document.createElement("li");
                                                          listItem.textContent = detail;
                                                          popupDetails.appendChild(listItem);
                                                      });
                                                  
                                                      // Show the pop-up
                                                      popup.style.display = "flex";
                                                  }
                                                  
                                                  // Close pop-up when clicking the close button
                                                  function closePopup() {
                                                      document.getElementById("popup").style.display = "none";
                                                  }
                                                  
                                                  // Close pop-up when clicking outside the pop-up content
                                                  document.getElementById("popup").addEventListener("click", function (event) {
                                                      let popupContent = document.querySelector(".popup-content");
                                                  
                                                      // Check if the click is outside the content
                                                      if (!popupContent.contains(event.target)) {
                                                          closePopup();
                                                      }
                                                  });
                                                  