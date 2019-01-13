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

  ;
  

  for (var i=0; i<4; i++) {
    var random = (Math.floor((Math.random() * 12) + 1));
    crystalVal.push(random);
  }
console.log(crystalVal);
};


$(".music").on("click", function () {
  var index = this.id;

  val = crystalVal[index];
  console.log(val);
 

  totalScore += val;
  console.log(totalScore);
  $('#usrScore').text(totalScore);
  ;


});

if (totalScore === compNum) {
wins++;

} else if (totalScore > compNum){
  losses++
} else (){

};



initScore();








