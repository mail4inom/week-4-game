$(document).ready(function () {

    var loss = 0;
    var wins = 0;
    
    var compRandomNum = Math.floor(Math.random() * 102) + 19;
    var totalSum = 0;
    var increment = Math.floor(Math.random() * 12) + 1;
    var increment2 = Math.floor(Math.random() * 12) + 1;
    var increment3 = Math.floor(Math.random() * 12) + 1;
    var increment4 = Math.floor(Math.random() * 12) + 1;

    $("#wins").html("Wins: " + wins++);
    $("#loss").html("Loss: " + loss++);
    $("#compRandomNum").html(compRandomNum);

    $("#crystals").on("click", ".crystal-image1", function () {
        totalSum += increment;
        $("#totalSum").html(totalSum);
        call();
    }).on("click", ".crystal-image2", function () {
        totalSum += increment2;
        $("#totalSum").html(totalSum);
        call();
    }).on("click", ".crystal-image3", function () {
        totalSum += increment3;
        $("#totalSum").html(totalSum);
        call();
    }).on("click", ".crystal-image4", function () {
        totalSum += increment4;
        $("#totalSum").html(totalSum);
        call();
    });
  function call(){
    if (compRandomNum === totalSum) {
        $("#wins").html("Wins: " + wins++);
        reset();
    }
    if (totalSum > compRandomNum) {
        $("#loss").html("Loss: " + loss++);
        reset();
    }
}
    function reset() {
        totalSum = 0;
        $("#totalSum").html(totalSum);
        compRandomNum = Math.floor(Math.random() * 102) + 19;
        $("#compRandomNum").html(compRandomNum);
        increment = Math.floor(Math.random() * 12) + 1;
        increment2 = Math.floor(Math.random() * 12) + 1;
        increment3 = Math.floor(Math.random() * 12) + 1;
        increment4 = Math.floor(Math.random() * 12) + 1;

    };

});
