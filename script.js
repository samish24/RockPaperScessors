
// Objective
// In this exercise, you'll build a simple Rock-Paper-Scissors game using HTML, CSS (via Tailwind CSS),
// and JavaScript. This game will allow a user to play against the computer, 
//and it will keep track of the score.

// Instructions and setup
// HTML with Tailwind CSS:

// A card at the top to display the score (User vs. Computer).
// A card with three buttons for selecting Rock, Paper, or Scissors.
// An empty card to display the result of each round.
// A button to play the round.
// JavaScript:

// Listen for a click on the play button.
// Check if the user selected something; if not, alert the user.
// Mark the user selected button in some way.
// Randomly select Rock, Paper, or Scissors for the computer.
// Compare the user's selection with the computer's selection.
// Display the result in the output area.
// Update the score and the DOM accordingly.

const computerSelection = ['Rock', 'Paper', 'Scissors']; 
function randomSelect() {
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}
// console.log(randomSelect());

const playBtn = document.getElementById('play-button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

let userRock = false;
let userPaper = false;
let userScissors = false;
let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () =>{
     userRock = true;
    rockBtn.style.backgroundColor = 'darkblue';
    rockBtn.style.textDecoration = 'underline';
})

paperBtn.addEventListener('click', () =>{
     userPaper = true;
     paperBtn.style.backgroundColor = 'darkgreen';
     paperBtn.style.textDecoration = 'underline';
})

scissorsBtn.addEventListener('click', () =>{
     userScissors = true;
     scissorsBtn.style.backgroundColor = 'darkred';
     scissorsBtn.style.textDecoration = 'underline';
})

function resetButtonStyles() {
    rockBtn.style.backgroundColor = '';
    rockBtn.style.textDecoration = '';
    paperBtn.style.backgroundColor = '';
    paperBtn.style.textDecoration = '';
    scissorsBtn.style.backgroundColor = '';
    scissorsBtn.style.textDecoration = '';
}



    playBtn.addEventListener('click', () => {
        if (userRock && !userPaper && !userScissors) {
            const computerChoice = randomSelect();  
            
            if (rockBtn.textContent.trim() === computerChoice) {
                resultDiv.textContent = 'DRAW: Computer also selected Rock';
            } else if (computerChoice === paperBtn.textContent.trim()) {
                resultDiv.textContent = 'COMPUTER WINS. Computer selected Paper';
                computerScore += 1;
                document.getElementById('computer-score').textContent = `${computerScore}`;
            } else {
                resultDiv.textContent = 'YOU WIN. Computer selected Scissors';
                userScore += 1;
                document.getElementById('user-score').textContent = `${userScore}`;
            }
            userRock = false;
        }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   else    if (!userRock && userPaper && !userScissors) {
    const computerChoice = randomSelect();  
    
    if (paperBtn.textContent.trim() === computerChoice) {
        resultDiv.textContent = 'DRAW: Computer also selected Paper';
    } else if (computerChoice === scissorsBtn.textContent.trim()) {
        resultDiv.textContent = 'COMPUTER WINS. Computer selected Scissors';
        computerScore += 1;
        document.getElementById('computer-score').textContent = `${computerScore}`;
    } else {
        resultDiv.textContent = 'YOU WIN. Computer selected Rock';
        userScore += 1;
        document.getElementById('user-score').textContent = `${userScore}`;
    }
    userPaper = false;
}
         
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else    if (!userRock && !userPaper && userScissors) {
    const computerChoice = randomSelect();  
    
    if (scissorsBtn.textContent.trim() === computerChoice) {
        resultDiv.textContent = 'DRAW: Computer also selected Scissors';
    } else if (computerChoice === rockBtn.textContent.trim()) {
        resultDiv.textContent = 'COMPUTER WINS. Computer selected Rock';
        computerScore += 1;
        document.getElementById('computer-score').textContent = `${computerScore}`;
    } else {
        resultDiv.textContent = 'YOU WIN. Computer selected Paper';
        userScore += 1;
        document.getElementById('user-score').textContent = `${userScore}`;
    }
    userScissors = false;
} 
else {alert('You either didn\'t select any Button or you have selected more than one! Please select exactly one Button ')};
  
         
   



resetButtonStyles();

   
   });


// console.log(rockBtn.textContent.trim() === randomSelect())
