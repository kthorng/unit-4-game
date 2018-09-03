
// create a random variable with our function that will store and display as the desired number to reach value 19 - 120
var wins = 0;
var losses = 0;
var targetNumber = [];
var counter = 0;


function startGame() {

    // Our randomly choosen number to guess
function generate() {
    targetNumber = (Math.floor(Math.random() * 120) + 19);
}

    generate();
    crystalGenerate();
    counter = 0;
    $('#wins-text').text(wins);
    $('#losses-text').text(losses);
    $('#counter-text').text(counter);
}


// call the function
// generate();
// Write text to our empty div
// $('#number').text(targetNumber)

// our function to generate 4 random numbers
function crystalGenerate() {
    crystalNumber1 = [Math.floor(Math.random() * 12) + 1];
    crystalNumber2 = (Math.floor(Math.random() * 12) + 1);
    crystalNumber3 = (Math.floor(Math.random() * 12) + 1);
    crystalNumber4 = (Math.floor(Math.random() * 12) + 1);
    crystalNumber5 = (Math.floor(Math.random() * -12) + -1);
    crystalNumber6 = (Math.floor(Math.random() * -12) + -1);
    crystalNumber7 = (Math.floor(Math.random() * -12) + -1);
}
// call the funciton
crystalGenerate();
// define our randomCrystal variables
var randomCrystal1 = $('<img>');
var randomCrystal2 = $('<img>');
var randomCrystal3 = $('<img>');
var randomCrystal4 = $('<img>');
var randomCrystal5 = $('<img>');
var randomCrystal6 = $('<img>');
var randomCrystal7 = $('<img>');
// add our classes to variables
randomCrystal1.addClass('crystal-image');
randomCrystal2.addClass('crystal-image');
randomCrystal3.addClass('crystal-image');
randomCrystal4.addClass('crystal-image');
randomCrystal5.addClass('crystal-image');
randomCrystal6.addClass('crystal-image');
randomCrystal7.addClass('crystal-image');
// add our images to variables
randomCrystal1.attr('src', "assets/images/db1.png");
randomCrystal2.attr('src', "assets/images/db2.png");
randomCrystal3.attr('src', "assets/images/db3.png");
randomCrystal4.attr('src', "assets/images/db4.png");
randomCrystal5.attr('src', "assets/images/db5.png");
randomCrystal6.attr('src', "assets/images/db6.png");
randomCrystal7.attr('src', "assets/images/db7.png");
// add our crystalvalue
randomCrystal1.attr('crystalvalue', crystalNumber1);
randomCrystal2.attr('crystalvalue', crystalNumber2);
randomCrystal3.attr('crystalvalue', crystalNumber3);
randomCrystal4.attr('crystalvalue', crystalNumber4);
randomCrystal5.attr('crystalvalue', crystalNumber5);
randomCrystal6.attr('crystalvalue', crystalNumber6);
randomCrystal7.attr('crystalvalue', crystalNumber7);
// push our loaded randomeCrystals to the html page
$('#crystal1').append(randomCrystal1)
$('#crystal2').append(randomCrystal2)
$('#crystal3').append(randomCrystal3)
$('#crystal4').append(randomCrystal4)
$('#crystal5').append(randomCrystal5)
$('#crystal6').append(randomCrystal6)
$('#crystal7').append(randomCrystal7)
// On click funciton to initiate our points
$('.crystal-image').on('click', function() {

// create an empty variable that will store and add up our score as we click crystals
    var crystalValue = ($(this).attr('crystalvalue'));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    // alert('New score: ' + counter);
     
// create an if else statement that will compare our score with random number, will push wins or losses, alert user if they lost or won, reset game when turn is up
    if (counter === targetNumber) {
        wins++;
        startGame();
        alert('Impossible!  What is this magic you use to defeat me?  Your power levels are unreadable.');
        $('#number').text(targetNumber)
        var wish = prompt('What do you wish?');
        alert(wish + ' ' + 'has been granted...');
    }

    else if (counter >= targetNumber) {
        losses++;
        startGame();
        alert('Try again Mortal, you were\'t even close.');
        $('#number').text(targetNumber)
    }

    else if (counter <= -1) {
        losses++;
        startGame();
        alert('No no, we can\'t go below zero.  You\'re a rebellious little one.');
        $('#number').text(targetNumber)
    }

    $('#counter-text').text(counter);
    $('#number').text(targetNumber)
// console.log our current score.
    console.log(counter);
});


startGame();
$('#number').text(targetNumber);