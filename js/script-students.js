$(document).ready(function () {

  // When a thumbnail is clicked...
  $(".thumb").click(function () {

    // Save the information stored in the clicked thumbnail
    var fullImage = $(this).attr("data-full");
    var projectTitle = $(this).attr("data-title");
    var projectDescription = $(this).attr("data-description");

    // Remove the active class from all thumbnails
    // $(".thumb").removeClass("active");

    // Add the active class to the thumbnail that was clicked
    // $(this).addClass("active");

    // Fade out the featured image, change it, then fade it back in
    // $("#featured-image").fadeOut(200, function () {
    //   $(this).attr("src", fullImage).fadeIn(200);
    // });

    // Update the title and description text
    // $("#project-title").text(projectTitle);
    // $("#project-description").text(projectDescription);

  });

});
