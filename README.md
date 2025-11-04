Game Overview

Classic Duos Match(PT) is a browser-based memory game where players race against the clock to match famous duos such as: Kobe & Shaq, Batman & Robin, and Kid & Play before time runs out.

This project is a scaled-down version of my original “Classic Duos Match” concept, built as part of my software engineering learning journey. I wanted to create something fun, nostalgic, and culturally diverse that brings together music, sports, and pop culture in one interactive challenge.

Players have 90 seconds to flip and match all 10 pairs. Each correct duo stays flipped; each wrong guess resets. When time hits zero — game over.

Getting Started
Play the Game

Live Deployment:
Classic Duos Match (PT Mini) on GitHub Pages

 How to Play

Click on two different cards to flip them.

If they’re a matching duo they will  stay revealed.

If not, they flip back over.

Match all 10 duos before the 90 second timer runs out to win.

Click “Run it back?” to restart anytime.

 Planning Materials

Project Pseudocode
Project Planning:
Game Name:
Classic Duos Match (pt)
Pseudocode:
Define Variables
Create an array called duos with 10 iconic duo objects (each containing match and made).
Create a variable flippedCards to store the two cards currently flipped.
Create a variable matchedPairs to count successful matches.
Create a variable timer to track time remaining (start at 180 seconds).
Create variables to store references to the game board, timer display, message display, and Run it back? button.
Initialize Game
Shuffle the duos array and duplicate each pair so both halves appear on the board.
Render the cards face-down on the screen.
Reset pairsMatched to 0.
Start countdown timer using setInterval.
Display starting timer value on the page.
Create Event Listeners
Each card: on click → flip the card and add it to flippedCards.
If two cards are flipped → call checkForMatch().
Run it back? button: on click → call resetGame().
Define checkForMatch() Function
Compare the two flipped cards’ match and made values.
If they form a valid duo → mark both as matched and increase matchedPairs.
If not → flip both cards back face-down after a short delay.
Clear flippedCards after each check.
If all pairs are matched → call handleWin().
Define Timer Function
Decrease timer by 1 each second.
Update timer display.
If timer reaches 0 → call handleGameOver().
Check for Game Over
If timer runs out before all pairs are matched → display "Time’s up! Try again."
Stop timer and reveal Run it back? button.
 Win Condition
If matchedPairs equals total pairs → stop timer.
Display "You Win!" message.
Show Run it back? button.
Update Display Function
Flip cards visually between face-down and face-up states.
Refresh timer and match count on screen.
Play sound effects for flips, matches, and wins.
Reset Function
Reset matchedPairs, timer, and all card states.
Shuffle cards and re-render them on the board.
Restart countdown timer.


 Attributions


💻 Technologies Used

HTML5 – Page structure

CSS – Styling and layout

JavaScript (ES6) – Game logic, timer, and interactivity

Github- Github pages