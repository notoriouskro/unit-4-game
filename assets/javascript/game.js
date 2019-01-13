var randScore = '';
var randValue = '';
var wins = 0;
var losses = 0;
var totalScore = 0;
var crystalVal = [];
var compNum = 0;



function initScore() {
  compNum = (Math.floor((Math.random() * 120) + 19));
  $('#scoreWins').html(compNum);
  totalScore = 0;


  for (var i = 0; i < 4; i++) {
    var random = (Math.floor((Math.random() * 12) + 1));
    crystalVal.push(random);
  }
 

}


initScore();


$(".music").on("click", function () {
  var index = this.id;

  var val = crystalVal[index];
  console.log(val);


  totalScore += val;
  console.log(totalScore);
  $('#usrScore').text(totalScore);
  doGame();

});

function doGame() {

  if (totalScore === compNum) {
    wins++;
    $('#win').text("Wins: " + wins);
    initScore();

  } else if (totalScore > compNum) {
    losses++;
    $('#loss').text("Losses: " + losses);
    initScore();
  } else  {

  $('#win').text("Wins: " + wins);
  $('#loss').text("Losses: " + losses);
  $('#usrScore').text(totalScore);
}
}














