
var blackCard = document.getElementById("BlackCardDeck");
var playerCards = document.getElementById("PlayerDeck");
var playerOneCardOne = document.getElementById("PlayerOneHandC1");
var playerOneCardTwo = document.getElementById("PlayerOneHandC2");
var playerOneCardThree = document.getElementById("PlayerOneHandC3");
var playerOneCardFour = document.getElementById("PlayerOneHandC4");
var playerOneCardFive = document.getElementById("PlayerOneHandC5");
var playerTwoCardOne = document.getElementById("PlayerTwoHandC1");
var playerTwoCardTwo = document.getElementById("PlayerTwoHandC2");
var playerTwoCardThree = document.getElementById("PlayerTwoHandC3");
var playerTwoCardFour = document.getElementById("PlayerTwoHandC4");
var playerTwoCardFive = document.getElementById("PlayerTwoHandC5");
var playerThreeCardOne = document.getElementById("PlayerThreeHandC1");
var playerThreeCardTwo = document.getElementById("PlayerThreeHandC2");
var playerThreeCardThree = document.getElementById("PlayerThreeHandC3");
var playerThreeCardFour = document.getElementById("PlayerThreeHandC4");
var playerThreeCardFive = document.getElementById("PlayerThreeHandC5");
var playerFourCardOne = document.getElementById("PlayerFourHandC1");
var playerFourCardTwo = document.getElementById("PlayerFourHandC2");
var playerFourCardThree = document.getElementById("PlayerFourHandC3");
var playerFourCardFour = document.getElementById("PlayerFourHandC4");
var playerFourCardFive = document.getElementById("PlayerFourHandC5");
var chosenCardPlayerOne = document.getElementById("ChosenCardPlayerOne");
var chosenCardPlayerTwo = document.getElementById("ChosenCardPlayerTwo");
var chosenCardPlayerThree = document.getElementById("ChosenCardPlayerThree");
var chosenCardPlayerFour = document.getElementById("ChosenCardPlayerFour");
var playerOneWins = 0;
var playerTwoWins = 0;
var playerThreeWins = 0;
var playerFourWins = 0;
var oneWins = playerOneWins;
var twoWins = playerTwoWins;
var threeWins = playerThreeWins;
var fourWins = playerFourWins;
//BlackCardDeck exists as an ID so be careful!!
var roundCounter = 0;
var discardPile = [];
var chosenPile = [];
var blackCardDeck = [12,54,67,90,45];
var whiteCardDeck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
                    /*,41,42,43,44,45,46,47,48,49,50,51,52,
                    53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,
                    69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,
                    85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100*/
var whiteCardDeckPlayerOne = [];
var whiteCardDeckPlayerTwo = [];
var whiteCardDeckPlayerThree = [];
var whiteCardDeckPlayerFour = [];
var turnCounter=1;
var turn = turnCounter;
var chosenCounter=0;
var chosen = chosenCounter

/*This function will shuffle an array into random elements.
-Example how to call
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);*/
//Fisher-Yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//Lines 3-16 will prep the board for 4 players.
//Shuffling and dealing
$(document).ready(function(number){
  $('.PlayerOneHand').hide();
  $('.PlayerTwoHand').hide();
  $('.PlayerThreeHand').hide();
  $('.PlayerFourHand').hide();
  $("#ChosenCardPlayerOne").hide();
  $("#ChosenCardPlayerTwo").hide();
  $("#ChosenCardPlayerThree").hide();
  $("#ChosenCardPlayerFour").hide();
  //Shuffles white deck and black deck
  shuffle(whiteCardDeck);
  shuffle(blackCardDeck);
  console.log(whiteCardDeck);
  //Determines how many cards are in each player's white deck
  whiteCardDeckPlayerOne = whiteCardDeck.slice(0,10);
  console.log(whiteCardDeckPlayerOne);
  whiteCardDeckPlayerTwo = whiteCardDeck.slice(10,20);
  console.log(whiteCardDeckPlayerTwo);
  whiteCardDeckPlayerThree = whiteCardDeck.slice(20,30);
  console.log(whiteCardDeckPlayerThree);
  whiteCardDeckPlayerFour = whiteCardDeck.slice(30,40);
  console.log(whiteCardDeckPlayerFour);
});

//Conditional statement will be added that will
//only be activated when choseCard array for
//each player have a value
  if (blackCard !== null){
    var round = roundCounter;
    blackCard.addEventListener("click", function (){
      console.log(blackCardDeck[0]);
      discardPile.push(blackCardDeck[0]);
      blackCardDeck.shift()
      console.log(blackCardDeck)
      console.log(discardPile)
      round ++;
      console.log(round);
      console.log(whiteCardDeck);
      if(blackCardDeck == "")
      console.log("out of cards")
    })
  }

$("#PlayerDeckOne").click(function(){
  if (turn == 1 || turn == 5 || turn == 9 || turn == 13){
  $('#BlackCardDeck').hide();
  $('.PlayerOneHand').show();
    }
       });

$("#PlayerDeckTwo").click(function(){
  if (turn == 2 || turn == 6 || turn == 10 || turn == 14){
  $('#BlackCardDeck').hide();
  $('.PlayerTwoHand').show();
    }
       });

$("#PlayerDeckThree").click(function(){
  if (turn == 3 || turn == 7 || turn == 11 || turn == 15){
  $('#BlackCardDeck').hide();
  $('.PlayerThreeHand').show();
    }
       });

$("#PlayerDeckFour").click(function(){
  if (turn == 4 || turn == 8 || turn == 12 || turn == 16){
  $('#BlackCardDeck').hide();
  $('.PlayerFourHand').show();
   }
       });

//When a card is chosen from the hand,
//the screen will change back
$('.PlayerOneHand').click(function(){
    turn=turn+1;
   $('.PlayerOneHand').hide();
   $('#BlackCardDeck').show();
 });
$('.PlayerTwoHand').click(function(){
    turn=turn+1;
   $('.PlayerTwoHand').hide();
   $('#BlackCardDeck').show();
 });
$('.PlayerThreeHand').click(function(){
    turn=turn+1;
   $('.PlayerThreeHand').hide();
   $('#BlackCardDeck').show();
 });
$('.PlayerFourHand').click(function(){
    turn=turn+1;
   $('.PlayerFourHand').hide();
   $('#BlackCardDeck').show();
 });

  //The listener events below will add the index
  //of the array to a special array called the
  //the chosen pile. The chosen pile will display
  //on top when player 4 has chosen his card.
  /*Player one will receive whiteCardDeck index [0-19]*/
  playerOneCardOne.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerOne[0]);
    whiteCardDeckPlayerOne.splice(0,1);
    console.log(whiteCardDeckPlayerOne+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    console.log(chosen+"chosen counter");
  })
  playerOneCardTwo.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerOne[1]);
    whiteCardDeckPlayerOne.splice(1,1);
    console.log(whiteCardDeckPlayerOne+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerOneCardThree.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerOne[2]);
    whiteCardDeckPlayerOne.splice(2,1);
    console.log(whiteCardDeckPlayerOne+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerOneCardFour.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerOne[3]);
    whiteCardDeckPlayerOne.splice(3,1);
    console.log(whiteCardDeckPlayerOne+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerOneCardFive.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerOne[4]);
    whiteCardDeckPlayerOne.splice(4,1);
    console.log(whiteCardDeckPlayerOne+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
/*Player two will receive whiteCardDeck index [20-39]*/
  playerTwoCardOne.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[0]);
    whiteCardDeckPlayerTwo.splice(0,1);
    console.log(whiteCardDeckPlayerTwo+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    console.log(chosen+"Chosen player 2");
  })
  playerTwoCardTwo.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[1]);
    whiteCardDeckPlayerTwo.splice(1,1);
    console.log(whiteCardDeckPlayerTwo+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerTwoCardThree.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[2]);
    whiteCardDeckPlayerTwo.splice(2,1);
    console.log(whiteCardDeckPlayerTwo+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerTwoCardFour.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[3]);
    whiteCardDeckPlayerTwo.splice(3,1);
    console.log(whiteCardDeckPlayerTwo+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerTwoCardFive.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[4]);
    whiteCardDeckPlayerTwo.splice(4,1);
    console.log(whiteCardDeckPlayerTwo+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
/*Player Three will receive whiteCardDeck index [40-59]*/
  playerThreeCardOne.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[0]);
    whiteCardDeckPlayerThree.splice(0,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerThreeCardTwo.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[1]);
    whiteCardDeckPlayerThree.splice(1,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerThreeCardThree.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[2]);
    whiteCardDeckPlayerThree.splice(2,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerThreeCardFour.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[3]);
    whiteCardDeckPlayerThree.splice(3,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
  playerThreeCardFive.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[4]);
    whiteCardDeckPlayerThree.splice(4,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
  })
/*Player Four will receive whiteCardDeck index [60-79]*/
  playerFourCardOne.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerFour[0]);
    whiteCardDeckPlayerFour.splice(0,1);
    console.log(whiteCardDeckPlayerFour+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
  //Because Player Four is always last Chosen Cards will always show up after Player Four chooses
    chosen = chosen + 1;
    $('.PlayerDeck').hide();
    $('.ChosenCard').show();
  })
  playerFourCardTwo.addEventListener("click", function (){
 chosenPile.push(whiteCardDeckPlayerFour[1]);
    whiteCardDeckPlayerFour.splice(1,1);
    console.log(whiteCardDeckPlayerFour+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    //Because Player Four is always last Chosen Cards will always show up after Player Four chooses
    chosen = chosen + 1;
    $('.PlayerDeck').hide();
    $('.ChosenCard').show();
  })
  playerFourCardThree.addEventListener("click", function (){
 chosenPile.push(whiteCardDeckPlayerFour[2]);
    whiteCardDeckPlayerFour.splice(2,1);
    console.log(whiteCardDeckPlayerFour+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    //Because Player Four is always last Chosen Cards will always show up after Player Four chooses
    chosen = chosen + 1;
    $('.PlayerDeck').hide();
    $('.ChosenCard').show();
  })
  playerFourCardFour.addEventListener("click", function (){
 chosenPile.push(whiteCardDeckPlayerFour[3]);
    whiteCardDeckPlayerFour.splice(3,1);
    console.log(whiteCardDeckPlayerFour+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    //Because Player Four is always last Chosen Cards will always show up after Player Four chooses
    chosen = chosen + 1;
    $('.PlayerDeck').hide();
    $('.ChosenCard').show();
  })
  playerFourCardFive.addEventListener("click", function (){
 chosenPile.push(whiteCardDeckPlayerFour[4]);
    whiteCardDeckPlayerFour.splice(4,1);
    console.log(whiteCardDeckPlayerFour+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    //Because Player Four is always last Chosen Cards will always show up after Player Four chooses
    chosen = chosen + 1;
    $('.PlayerDeck').hide();
    $('.ChosenCard').show();
  })

chosenCardPlayerOne.addEventListener("click", function(){
    oneWins = oneWins + 1;
    console.log(oneWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
  })

chosenCardPlayerTwo.addEventListener("click", function(){
    twoWins = twoWins + 1;
    console.log(twoWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
  })

chosenCardPlayerThree.addEventListener("click", function(){
    threeWins = threeWins + 1;
    console.log(threeWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
  })

chosenCardPlayerFour.addEventListener("click", function(){
    fourWins = fourWins + 1;
    console.log(fourWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
  })

