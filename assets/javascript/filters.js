$(document).ready(function() {
  // Get all the tag elements
  var tags = document.getElementsByClassName("tag");

  // Attach click event listener to each tag
  for (var i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", function () {
      var tagId = this.id; // Get the ID of the clicked tag
      var items = document.getElementsByClassName("item"); // Get all the item elements

      // Loop through each item and check if it has the same class as the clicked tag
      for (var j = 0; j < items.length; j++) {
        if (items[j].classList.contains(tagId)) {
          items[j].style.display = "block"; // Show the item
        } else {
          items[j].style.display = "none"; // Hide the item
        }
      }

      var tagSpans = document.getElementsByClassName("tag"); // Get all the tag span elements

      // Remove selected class from all tag spans
      for (var k = 0; k < tagSpans.length; k++) {
        tagSpans[k].classList.remove("selected");
        var tagWordId = tagSpans[k].id + "-word"; // Get the corresponding tag word ID
        var tagImgId = tagSpans[k].id + "-img"; // Get the corresponding tag image ID
        if (tagSpans[k] !== this && !tagSpans[k].classList.contains('hovered')) {
          // Check if the tag span is not the clicked one and not being hovered
          document.getElementById(tagWordId).style.display = "none"; // Hide the tag word
          document.getElementById(tagImgId).style.display = "none"; // Hide the tag image
        }
      }

      // Add selected class to the clicked tag span
      this.classList.add("selected");
      var clickedTagWordId = tagId + "-word"; // Get the ID of the clicked tag word
      var clickedTagImgId = tagId + "-img"; // Get the ID of the clicked tag image
      document.getElementById(clickedTagWordId).style.display = "block"; // Show the clicked tag word
      document.getElementById(clickedTagImgId).style.display = "block"; // Show the clicked tag image
      document.getElementById(clickedTagWordId).style.zIndex = "-1"; // Set z-index to -1

      // Show the reset button
      document.getElementById("reset-button").style.display = "block";
    });

    // Attach hover event listener to each tag
    tags[i].addEventListener("mouseenter", function () {
      this.classList.add("hovered");
      if (!this.classList.contains("selected")) {
        var tagWordId = this.id + "-word";
        document.getElementById(tagWordId).style.display = "block";
      }
    });

    tags[i].addEventListener("mouseleave", function () {
      this.classList.remove("hovered");
      if (!this.classList.contains("selected")) {
        var tagWordId = this.id + "-word";
        var tagImgId = this.id + "-img";
        document.getElementById(tagWordId).style.display = "none";
        document.getElementById(tagImgId).style.display = "none";
      }
    });
  }

  // Reset button click event listener
  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function () {
    // Remove selected class from all tag spans
    for (var k = 0; k < tags.length; k++) {
      tags[k].classList.remove("selected");
      var tagWordId = tags[k].id + "-word";
      var tagImgId = tags[k].id + "-img";
      document.getElementById(tagWordId).style.display = "none";
      document.getElementById(tagWordId).style.zIndex = "auto"; // Reset z-index to default
      document.getElementById(tagImgId).style.display = "none";
      document.getElementById(tagImgId).style.zIndex = "auto"; // Reset z-index to default
    }

    // Show all item elements
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "block";
    }

    // Hide the reset button
    resetButton.style.display = "none";
  });

  // Check if any tag is initially selected
  var selectedTag = document.querySelector(".tag.selected");
  if (selectedTag) {
    // Show the reset button if a tag is initially selected
    resetButton.style.display = "block";
  }
});
