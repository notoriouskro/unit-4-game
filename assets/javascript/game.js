var randScore = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var randValue = '';
var Wins = 0;
var Losses = 0;
var TotalScore = 0;
var CrystalOne = '';
var CrystalTwo = '';
var CrystalThree = '';
var CrystalFour = '';



function crystalValue() {
    var x = document.getElementById('scoreWins')
    x.innerHTML = ('Score: ' + Math.floor((Math.random() * 120) + 19));
  }
    




