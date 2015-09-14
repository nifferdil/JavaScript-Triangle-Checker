var side1;
var side2;
var side3;


var triangleTracker = function(side1, side2, side3) {

  // console.log(side1, side2, side3);


  if ((side1 + side2 >= side3) && (side3 + side2 >= side1) && (side1 + side3 >= side2)) {
    return true;
  } else {
    return false;
  }

};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    side1 = parseInt($("input#sideInput1").val());
    side2 = parseInt($("input#sideInput2").val());
    side3 = parseInt($("input#sideInput3").val());

    var result = triangleTracker(side1, side2, side3);

    console.log(side1, side2, side3);

    $(".triangle").text(side1 + ", " +  side2 + ", " + side3 );

    if (!result) {
      $(".not").text("does not form");
    }
    else {
      $(".not").text("does form");
    }

    $("#result").show();
    event.preventDefault();
  });//where does this paran start?
});
