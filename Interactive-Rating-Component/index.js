var rating = 0;

// notedown the rating selected by user
$("span").click(function () {
  rating = this.innerHTML;
  $("span").removeClass("selected");
  $(this).addClass("selected");
});

// when user clicks the submit button check if user has selected a rating value
$(".container p:nth-child(5)").click(function () {
  // if the rating is selected then the thankyou function will be called
  if (rating !== 0) {
    thankyou(rating);
  }
});

function thankyou(rating) {
  // remove the home card , setting its display property to none
  $(".container").addClass("displaynone");

  // insert the rating value in the thankyou card
  $(".thankyou span").text(rating);

  // set the display propery of the thankyou card to block , so that it is visible
  $(".thankyou").addClass("displayblock");
}
