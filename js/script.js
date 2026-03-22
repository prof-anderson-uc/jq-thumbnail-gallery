$(document).ready(function () {

  // Wait until the page has fully loaded before running any jQuery code.
  // This helps make sure the HTML elements already exist on the page.
  $(".thumb").click(function() {

    // When a thumbnail is clicked, "this" refers to the thumbnail that was clicked.

    // Get the image file path from the clicked thumbnail.
    // Since we are using the same image for both the thumbnail and the featured image,
    // we can just read the src attribute.
    var fullImage = $(this).attr("src");

    // Get the project title stored in the clicked thumbnail's data-title attribute.
    var projectTitle = $(this).attr("data-title");

    // Get the project description stored in the clicked thumbnail's data-description attribute.
    var projectDescription = $(this).attr("data-description");

    // Remove the active class from every thumbnail.
    // This clears the old selection.
    $(".thumb").removeClass("active");

    // Add the active class to the thumbnail that was clicked.
    // This highlights the current thumbnail.
    $(this).addClass("active");

    // Fade out the featured image.
    // After it fades out, change the image source.
    // Then fade the image back in.
    $("#featured-image").fadeOut(200, function () {
      $(this).attr("src", fullImage).fadeIn(200);
    });

    // Update the text inside the featured project title.
    $("#project-title").text(projectTitle);

    // Update the text inside the featured project description.
    $("#project-description").text(projectDescription);

  });

});


/*
==================================================
DETAILED EXPLANATION
==================================================

This script makes the project gallery interactive.

How it works:
1. The page loads.
2. The script waits for the user to click one of the thumbnail images.
3. When the user clicks a thumbnail, the script:
   - reads the image path from the thumbnail's src
   - reads the title from data-title
   - reads the description from data-description
   - removes the active class from all thumbnails
   - adds the active class to the clicked thumbnail
   - updates the large featured image
   - updates the featured title
   - updates the featured description

Why use data-title and data-description?
The thumbnail image already has the project information attached to it in HTML.
That means the JavaScript can read that information directly from the clicked image
instead of storing everything in a separate JavaScript array or object.

Why use $(this)?
In this click event, "this" means the thumbnail that the user clicked.
Wrapping it as $(this) turns it into a jQuery object, which lets us use jQuery methods
like .attr() and .addClass().

Why use fadeOut() and fadeIn()?
These methods create a smoother visual transition.
Instead of the featured image changing instantly, it fades out, changes, and fades back in.

What does the callback function do?
This part:

function () {
  $(this).attr("src", fullImage).fadeIn(200);
}

runs only after fadeOut(200) finishes.
That makes sure the image source changes at the correct time.

==================================================
GLOSSARY OF TERMS
==================================================

jQuery:
A JavaScript library that makes common scripting tasks shorter and easier.

$( ):
The jQuery function. It is used to select elements and work with them.

$(document).ready():
Waits until the page is loaded before running the script.

.click():
Runs code when an element is clicked.

this:
Refers to the specific element that triggered the event.
In this script, it means the thumbnail that was clicked.

$(this):
Turns "this" into a jQuery object so jQuery methods can be used on it.

.attr():
Gets or sets the value of an HTML attribute.

src:
The image file path used by an <img> element.

data-title:
A custom HTML data attribute storing the project title.

data-description:
A custom HTML data attribute storing the project description.

.removeClass():
Removes a CSS class from selected elements.

.addClass():
Adds a CSS class to selected elements.

.text():
Changes the text inside an element.

.fadeOut():
Gradually hides an element.

.fadeIn():
Gradually shows an element.

callback function:
A function that runs after another action finishes.

==================================================
VARIABLE LIST
==================================================

fullImage:
Stores the image file path from the clicked thumbnail.
This value is used to update the featured image.

projectTitle:
Stores the title from the clicked thumbnail's data-title attribute.
This value is used to update the featured heading.

projectDescription:
Stores the description from the clicked thumbnail's data-description attribute.
This value is used to update the featured paragraph.
*/
