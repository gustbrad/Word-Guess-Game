//Variable to tally total wins
var wins = 0;

//Function thats runs everything
function doItAll() {

//Sets the dom node for the right hand column to display the beginning image
document.getElementById("progress").style.backgroundImage = "url('assets/images/secret.png')";

//Create an array of words for thr computer to choose from
var wordsArr = ["spy", "bug", "cover", "secret", "shadow", "safehouse", "agent", "informant" ]

//Variable to get the computer to choose a word at random from the array of words
var computerChoice = wordsArr[Math.floor(Math.random() * wordsArr.length)];

//Variable to keep track of how many guesses starts with 0
var counter = 0;

//Array to hold the underscores representing the letters in the word chosen by the computer
var hideWordArr = [];

//Array to hold the letters guessed by the user
var guessesMadeArr = [];

//Array to hold the word chosen by the computer in a comma delimited format
var winArr = [];

//Variable to comma delimit the word chosen by the computer
var s1 = computerChoice.split('');

//Pushes the comma deimited formof the word chosen by the computer into the designated array
winArr.push(s1);

//limits the guesses to 13
countingDown = 12;

//Variable to hold the amount of cases matched in word chosen by computer
var testMatch = '';

//For loop to create an underscore for every letter in the word chosen by the computer
for (var i = 0; i < computerChoice.length; i++) {
    hideWordArr[i] = " _ ";
}

//Sets the dom node to show underscored equal to the number of letters in the the word chosen by the computer
document.getElementById("chosenWord").innerHTML = hideWordArr.join("");

 //Sets the dom node equal to total wins
 document.getElementById("winsText").innerHTML = wins;

 //Sets the dom node equal to how many gueses remain
 document.getElementById("numberGuesses").innerHTML = countingDown;

 //Set the dom node to say make a  guess
 document.getElementById("winLose").innerHTML = "Make a guess/Enter a letter";

 //Function to get the letter entered by the user, Add to the array of letters guessed so far, 
 document.onkeyup = function(event) {
    
    //coverts letter entered to lowercase
    var letter = event.key.toLowerCase()
    
    //checks for non letter entry that may still be recognized shift, alt, ctr
    if (event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18) {
        alert(e.which + " or Shift was pressed");
    }
    //only accepts letter entries
    else if (/[a-z]/i.test(letter)) {
    
    //set the test for matches to the same length as the word chosen by the computer
    testMatch = computerChoice.length;

    //Compare the letter guessed to all the letters in the word chosen by the computer to see if there is a match
    if (letter.length > 0) {
        for (var i = 0; i < computerChoice.length; i++) {
            //If there is a match then change the corresponding underscore into the appropriate letter
            if (computerChoice[i] === letter) {
                hideWordArr[i] = letter;
                testMatch++;
            }
            else{
                testMatch--;
            }
         
        }

    //if the letter exists in the guessed array do nothing
    if (guessesMadeArr.includes(letter)){
    }
    //if the letter does not exist in the guessed letters array decrease the remaining guesses
    else{
        if (testMatch == 0 ){
            countingDown--;
            //Pushes the variable of the letter entered into the array holding letters guessed if no match
            guessesMadeArr.push(letter);
        }
    }
    
   //sets background div image based on guesses remaining
    switch (countingDown) {
        case 11:document.getElementById("progress").style.backgroundImage = "url('assets/images/1.png')";
    break;
        case 10:document.getElementById("progress").style.backgroundImage = "url('assets/images/2.png')";
    break;
        case 9:document.getElementById("progress").style.backgroundImage = "url('assets/images/3.png')";
    break;
        case 8:document.getElementById("progress").style.backgroundImage = "url('assets/images/4.png')";
    break;
        case 7:document.getElementById("progress").style.backgroundImage = "url('assets/images/5.png')";
    break;
        case 6:document.getElementById("progress").style.backgroundImage = "url('assets/images/6.png')";
    break;
        case 5:document.getElementById("progress").style.backgroundImage = "url('assets/images/7.png')";
    break;
        case 4:document.getElementById("progress").style.backgroundImage = "url('assets/images/8.png')";
    break;
        case 3:document.getElementById("progress").style.backgroundImage = "url('assets/images/9.png')";
    break;
        case 2:document.getElementById("progress").style.backgroundImage = "url('assets/images/10.png')";
    break;  
        case 1:document.getElementById("progress").style.backgroundImage = "url('assets/images/11.png')";
    break;
        case 0:document.getElementById("progress").style.backgroundImage = "url('assets/images/12.png')";
    break;
    }

    //reset back to 0 for the next guess
    testMatch=0;
        
    //Sets the dom node equal to how many gueses remain
    document.getElementById("numberGuesses").innerHTML = countingDown;
        
    //Sets the dom node to show underscored equal to the number of letters in the the word chosen by the computer
    document.getElementById("chosenWord").innerHTML = hideWordArr.join("");
        
    //Sets the dom node to show the lettes guessed by the user so far
    document.getElementById("lettersGuessed").innerHTML = guessesMadeArr;
    }
 
    //Variable that sets the array holding the hidden/partially guessed/solved word to a string
    a = hideWordArr.toString();
    
    //Variable that sets the array holding the comma delimited word chosen by the computer to a string
    b = winArr.toString();

    //If the guesses are equal to the chosen word
    if (a===b){
        //Increment total wins
        wins++;
        //Sets the dom node equal to total wins
        document.getElementById("winsText").innerHTML = wins;
        //start the next round
        doItAll();
         //Set the dom node to say you win
         document.getElementById("winLose").innerHTML = "Congrats!!! You win! Enter a letter to begin guessing the next word";
        //Sets the dom node equal to how many gueses remain
        document.getElementById("numberGuesses").innerHTML = countingDown;
        //Sets the dom node to show the lettes guessed by the user so far
        document.getElementById("lettersGuessed").innerHTML = "";
    }
    
    //If the guesses are not equal to the chosen word and less than 13 guesses have been made
    else if (countingDown <12){
        //Set the dom node to say make a  guess
        document.getElementById("winLose").innerHTML = "Make a guess/Enter a letter";
    }
    //If the13 guesses have been made
    if (countingDown < 1){
        //Start the next round
        setTimeout(function() { doItAll(); }, 5000);
        //Set the dom node to say you lose
        document.getElementById("winLose").innerHTML = "You lose! Next Round begins in 5 seconds.";
        //Sets the dom node equal to how many gueses remain
        document.getElementById("numberGuesses").innerHTML = countingDown;
        //Sets the dom node to show the lettes guessed by the user so far
        document.getElementById("lettersGuessed").innerHTML = "";
    }
}
}
}