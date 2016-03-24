
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
var playerOneWinDisplay = document.getElementById("PlayerOneWins");
var playerTwoWinDisplay = document.getElementById("PlayerTwoWins");
var playerThreeWinDisplay = document.getElementById("PlayerThreeWins");
var playerFourWinDisplay = document.getElementById("PlayerFourWins");
var playerOneWins = 0;
var playerTwoWins = 0;
var playerThreeWins = 0;
var playerFourWins = 0;
var oneWins = playerOneWins;
var twoWins = playerTwoWins;
var threeWins = playerThreeWins;
var fourWins = playerFourWins;
//BlackCardDeck exists as an ID so be careful!!
var roundCounter = 1;
 var round = roundCounter;
var discardPile = [];
var chosenPile = [];

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
var chosen = chosenCounter;
var blackCardButtonStopper = 1;
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
  console.log("Current Round"+round)
});

//Conditional statement will be added that will
//only be activated when choseCard array for
//each player have a value

    blackCard.addEventListener("click", function (){
      //The blackCardButtonStopper if statement/variable
      //is used to keep the button from activating again
      //until the cycle has completed
      if (blackCardButtonStopper == 1){
        //displays first element of the black card deck
        blackCard.innerHTML = blackCardDeck[0];
        console.log(blackCardDeck[0]);
        if(round != roundCounter){
          discardPile.push(blackCardDeck[0]);
          blackCardDeck.shift()
          //displays updated list after the first element was discarded
          blackCard.innerHTML = blackCardDeck[0];
      console.log(blackCardDeck)
      console.log(discardPile)
      console.log("Current Round"+round);
      console.log(whiteCardDeck);}
//This will determine which player is a judge for that round
      if(round == 1 || round % 4 == 1){
        alert("Player One is the judge")
        $("#PlayerDeckOne").hide();
        $("#ChosenCardPlayerOne").hide();
        //if (turn == 1 || turn % 2 == 0)
        turn++;
      }
      if(round == 2 || round % 4 == 2){
        alert("Player Two is the judge")
        $("#PlayerDeckTwo").hide();
        $("#ChosenCardPlayerTwo").hide();
      //  if (turn % 2 == 1)
        //  turn++;
      }
      if (round == 3 || round % 4 == 3){
        alert("Player Three is the judge")
        $("#PlayerDeckThree").hide();
        $("#ChosenCardPlayerThree").hide();
     //   if (turn % 2 == 0)
      //  turn++;
      }
      if (round == 4 || round % 4 == 0){
        alert("Player Four is the judge")
        $("#PlayerDeckFour").hide();
        $("#ChosenCardPlayerFour").hide();
      //  if (turn % 2 == 1)
      //  turn++;
      }
      if(blackCardDeck == "")
      console.log("out of cards")
    blackCardButtonStopper++;
  }
    })


$("#PlayerDeckOne").click(function(){
  if ((turn == 1 || turn == 4 * round - 3) && (round != 1 || round%4 != 1) && (blackCardButtonStopper == 2)){
  $('#BlackCardDeck').hide();
  $('.PlayerOneHand').show();
  //First five elements of player one's deck is displayed above
  playerOneCardOne.innerHTML = whiteCardDeckPlayerOne[0];
  playerOneCardTwo.innerHTML = whiteCardDeckPlayerOne[1];
  playerOneCardThree.innerHTML = whiteCardDeckPlayerOne[2];
  playerOneCardFour.innerHTML = whiteCardDeckPlayerOne[3];
  playerOneCardFive.innerHTML = whiteCardDeckPlayerOne[4];
    }
       });

$("#PlayerDeckTwo").click(function(){
  if ((turn == 2 || turn == 4 * round - 2) && (round != 2 || round%4 != 2) && (blackCardButtonStopper == 2)){
  $('#BlackCardDeck').hide();
  $('.PlayerTwoHand').show();
  playerTwoCardOne.innerHTML = whiteCardDeckPlayerTwo[0]
  playerTwoCardTwo.innerHTML = whiteCardDeckPlayerTwo[1]
  playerTwoCardThree.innerHTML = whiteCardDeckPlayerTwo[2]
  playerTwoCardFour.innerHTML = whiteCardDeckPlayerTwo[3]
  playerTwoCardFive.innerHTML = whiteCardDeckPlayerTwo[4]
    }
       });

$("#PlayerDeckThree").click(function(){
  if ((turn == 3 || turn == 4 * round - 1) && (round != 3 || round%4 != 3) && (blackCardButtonStopper == 2)){
  $('#BlackCardDeck').hide();
  $('.PlayerThreeHand').show();
  playerThreeCardOne.innerHTML = whiteCardDeckPlayerThree[0]
  playerThreeCardTwo.innerHTML = whiteCardDeckPlayerThree[1]
  playerThreeCardThree.innerHTML = whiteCardDeckPlayerThree[2]
  playerThreeCardFour.innerHTML = whiteCardDeckPlayerThree[3]
  playerThreeCardFive.innerHTML = whiteCardDeckPlayerThree[4]
    }
       });

$("#PlayerDeckFour").click(function(){
  if ((turn == 4 || turn == 4 * round) && (round != 4 || round%4 != 0) && (blackCardButtonStopper == 2)){
  $('#BlackCardDeck').hide();
  $('.PlayerFourHand').show();
  playerFourCardOne.innerHTML = whiteCardDeckPlayerFour[0]
  playerFourCardTwo.innerHTML = whiteCardDeckPlayerFour[1]
  playerFourCardThree.innerHTML = whiteCardDeckPlayerFour[2]
  playerFourCardFour.innerHTML = whiteCardDeckPlayerFour[3]
  playerFourCardFive.innerHTML = whiteCardDeckPlayerFour[4]
   }
       });

//When a card is chosen from the hand,
//the screen will change back
$('.PlayerOneHand').click(function(){
    turn=turn+1;
    //If player 2 is a judge, skip turn
    if(round == 2 || round % 4 == 2)
      turn=turn+1;
   $('.PlayerOneHand').hide();
   $('#BlackCardDeck').show();
 });
$('.PlayerTwoHand').click(function(){
    turn=turn+1;
    if(round ==3 || round % 4 == 3)
      turn=turn+1
   $('.PlayerTwoHand').hide();
   $('#BlackCardDeck').show();
 });
$('.PlayerThreeHand').click(function(){
    turn=turn+1;
    if(round==4 || round % 4 == 0)
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
    //If 4 is a judge player 3 will be the last one to play a card
    //before chosen cards appear
     if (round == 4 || round % 4 == 0){
      $('.PlayerDeck').hide();
      $(".ChosenCard").show();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerThree.innerHTML = chosenPile[2];
      $("#ChosenCardPlayerFour").hide();
    }
  })
  playerThreeCardTwo.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerTwo[1]);
    whiteCardDeckPlayerThree.splice(1,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    //If 4 is a judge player 3 will be the last one to play a card
    //before chosen cards appear
     if (round == 4 || round % 4 == 0){
      $('.PlayerDeck').hide();
      $(".ChosenCard").show();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerThree.innerHTML = chosenPile[2];
      $("#ChosenCardPlayerFour").hide();
    }
  })
  playerThreeCardThree.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[2]);
    whiteCardDeckPlayerThree.splice(2,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    //If 4 is a judge player 3 will be the last one to play a card
    //before chosen cards appear
     if (round == 4 || round % 4 == 0){
      $('.PlayerDeck').hide();
      $(".ChosenCard").show();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerThree.innerHTML = chosenPile[2];
      $("#ChosenCardPlayerFour").hide();
    }
  })
  playerThreeCardFour.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[3]);
    whiteCardDeckPlayerThree.splice(3,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    //If 4 is a judge player 3 will be the last one to play a card
    //before chosen cards appear
     if (round == 4 || round % 4 == 0){
      $('.PlayerDeck').hide();
      $(".ChosenCard").show();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerThree.innerHTML = chosenPile[2];
      $("#ChosenCardPlayerFour").hide();
    }
  })
  playerThreeCardFive.addEventListener("click", function (){
    chosenPile.push(whiteCardDeckPlayerThree[4]);
    whiteCardDeckPlayerThree.splice(4,1);
    console.log(whiteCardDeckPlayerThree+"White Card Deck");
    console.log(chosenPile+"Chosen Pile")
    chosen = chosen + 1;
    //If 4 is a judge player 3 will be the last one to play a card
    //before chosen cards appear
     if (round == 4 || round % 4 == 0){
      $('.PlayerDeck').hide();
      $('.ChosenCard').show();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerThree.innerHTML = chosenPile[2];
      $("#ChosenCardPlayerFour").hide();
    }
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
    if (round == 1 || round % 4 == 1){
      $("#ChosenCardPlayerOne").hide();
      chosenCardPlayerTwo.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML =  chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 2 || round % 4 == 2){
      $("#ChosenCardPlayerTwo").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 3 || round % 4 == 3){
      $("#ChosenCardPlayerThree").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 4 || round % 4 == 0){
      $("#ChosenCardPlayerFour").hide();
    }
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
    if (round == 1 || round % 4 == 1){
      $("#ChosenCardPlayerOne").hide();
      chosenCardPlayerTwo.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML =  chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 2 || round % 4 == 2){
      $("#ChosenCardPlayerTwo").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 3 || round % 4 == 3){
      $("#ChosenCardPlayerThree").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
     if (round == 4 || round % 4 == 0){
      $("#ChosenCardPlayerFour").hide();
    }
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
    if (round == 1 || round % 4 == 1){
      $("#ChosenCardPlayerOne").hide();
      chosenCardPlayerTwo.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML =  chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 2 || round % 4 == 2){
      $("#ChosenCardPlayerTwo").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 3 || round % 4 == 3){
      $("#ChosenCardPlayerThree").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
     if (round == 4 || round % 4 == 0){
      $("#ChosenCardPlayerFour").hide();
    }
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

    if (round == 1 || round % 4 == 1){
      $("#ChosenCardPlayerOne").hide();
      chosenCardPlayerTwo.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML =  chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 2 || round % 4 == 2){
      $("#ChosenCardPlayerTwo").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 3 || round % 4 == 3){
      $("#ChosenCardPlayerThree").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
     if (round == 4 || round % 4 == 0){
      $("#ChosenCardPlayerFour").hide();
    }
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
    if (round == 1 || round % 4 == 1){
      $("#ChosenCardPlayerOne").hide();
      chosenCardPlayerTwo.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML =  chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 2 || round % 4 == 2){
      $("#ChosenCardPlayerTwo").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerThree.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
    if (round == 3 || round % 4 == 3){
      $("#ChosenCardPlayerThree").hide();
      chosenCardPlayerOne.innerHTML = chosenPile[0];
      chosenCardPlayerTwo.innerHTML = chosenPile[1];
      chosenCardPlayerFour.innerHTML = chosenPile[2];
    }
     if (round == 4 || round % 4 == 0){
      $("#ChosenCardPlayerFour").hide();
    }
  })

chosenCardPlayerOne.addEventListener("click", function(){
    oneWins = oneWins + 1;
    console.log("Player One Won"+oneWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
    if (oneWins != playerOneWins){
      console.log("CHange in variable works")
      round++;
      console.log(round);
      playerOneWinDisplay.innerHTML = "Player One Wins " + oneWins;
      blackCardButtonStopper = 1;
    }
  })

chosenCardPlayerTwo.addEventListener("click", function(){
    twoWins = twoWins + 1;
    console.log("Player Two Won"+twoWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
     if (twoWins != playerTwoWins){
      console.log("CHange in variable works")
      round++;
      console.log(round);
      playerTwoWinDisplay.innerHTML = "Player Two Wins " + twoWins;
      blackCardButtonStopper = 1;
    }
  })

chosenCardPlayerThree.addEventListener("click", function(){
    threeWins = threeWins + 1;
    console.log("Player Three Won"+threeWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
     if (threeWins != playerThreeWins){
      console.log("CHange in variable works")
      round++;
      console.log(round);
      playerThreeWinDisplay.innerHTML = "Player Three Wins " + threeWins;
      blackCardButtonStopper = 1;
    }
  })

chosenCardPlayerFour.addEventListener("click", function(){
    fourWins = fourWins + 1;
    console.log("Player Four Won"+fourWins);
    $('.ChosenCard').hide();
    $('.PlayerDeck').show();
    chosenPile.splice(0,chosenPile.length);
     if (fourWins != playerFourWins){
      console.log("CHange in variable works")
      round++;
      console.log(round);
      playerFourWinDisplay.innerHTML = "Player Four Wins " + fourWins;
      blackCardButtonStopper = 1;
      console.log("black card blackCardButtonStopper="+blackCardButtonStopper);
    }
  })
