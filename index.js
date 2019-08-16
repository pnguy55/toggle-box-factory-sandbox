$(document).ready(function() {
  let number_of_boxes = 0;
  $(".number-of-boxes").html("Number of boxes: " + number_of_boxes);

  $(".change-button").click(function() {
    number_of_boxes = $(".change-number").val();
    if (number_of_boxes < 99999) boxFactory(number_of_boxes);
    else
      $(".box-wrapper").html(
        "<li class='error-msg'>woah now, that's too many</li>"
      );
  });

  function boxFactory(number_of_boxes) {
    let list_of_boxes = [];
    for (let i = 1; i <= number_of_boxes; i++) {
      list_of_boxes.push("<li class='box box-" + i + " black'></li>");
    }
    $(".number-of-boxes").html("Number of boxes: " + number_of_boxes);
    $(".box-wrapper").html(list_of_boxes);
    $(".box-wrapper").html();

    $(".box").click(function() {
      let myClass = $(this).attr("class");
      let boxNumber = myClass.split(" ");
      if (boxNumber[2] === "black") {
        $("." + boxNumber[1])
          .toggleClass("red")
          .toggleClass("black");
      }
      if (boxNumber[2] === "red") {
        $("." + boxNumber[1])
          .toggleClass("blue")
          .toggleClass("red");
      }
      if (boxNumber[2] === "blue") {
        $("." + boxNumber[1])
          .toggleClass("black")
          .toggleClass("blue");
      }
    });
  }
});
