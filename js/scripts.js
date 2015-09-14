var side1;
var side2;
var side3;

var triangleTracker = function(side1, side2, side3) {

  if ((side1 + side2 >= side3) && (side3 + side2 >= side1) && (side1 + side3 >= side2)) {
    return true;
  } else {
    return false;
  }
};

var isEquilateral = function (side1, side2, side3){
  if (side1 == side2 && side2 == side3){
    return true;
  }
  else{
    return false;
  }
}

var isIsosceles = function (side1, side2, side3){
  if ((side1 == side2) || (side1 == side3) || (side2 == side3)){
    return true;
  }
  else{
    return false;
  }
}

var isScalene = function (side1, side2, side3){
  if (side1 != side2 && side1 != side3 && side2 != side3){
    return true;
  }
  else{
    return false;
  }
}

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    side1 = parseInt($("input#sideInput1").val());
    side2 = parseInt($("input#sideInput2").val());
    side3 = parseInt($("input#sideInput3").val());

    var result = triangleTracker(side1, side2, side3);

    console.log(side1, side2, side3);

    $(".triangle").text(side1 + ", " +  side2 + ", " + side3 );

    if (!result) {
      $(".not").text("does not form a triangle.");
    }

    else {

      var resultEquilateral = isEquilateral (side1, side2, side3);
      var resultIsosceles = isIsosceles (side1, side2, side3);
      var resultScalene = isScalene (side1, side2, side3);

      if (resultEquilateral){
        $(".not").text("forms an Equilateral triangle.");
      }

      else if (resultIsosceles){
        $(".not").text("forms an Isosceles triangle.");
      }

      else {
        $(".not").text("forms a Scalene triangle.");
      }
    }

    $("#result").show();
    event.preventDefault();
  });//where does this paran start?
});
