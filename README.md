<h1><b><p align="center">Employee Profile API - Random Search App</p></b></h1>


<h3><b><p align="center">Click to see live Employee API Submission!!</p></b></h3>
<a href=http://www.employeeapi.sarahshelley.x10host.com/ target="_blank"><img src="https://github.com/sargef/Employee-API/blob/master/images/employee.JPG"></a>

<h2><b><p align="center">Employee Random Search App - featuring API</p></b></h2>

The Employee Profile API App features the following criteria;

1. Includes constructor that receives a phrase parameter and initializes a phrase property set to the phrase.
2. Includes addPhraseToDisplay() method which adds the phrase to the gameboard.
3. Includes checkLetter() method which checks if a letter is in the phrase.
4. Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection.
5. Includes a constructor that initializes a missed property set to 0, a phrases property set to an array of five Phrase objects, and an activePhrase property set to null initially.
6. Phrases added to the game only include letters and spaces.
7. Includes startGame() method that hides the start screen overlay, sets the activePhrase property to a random phrase, and calls the addPhraseToDisplay() method on the active phrase.
8. Includes getRandomPhrase() method that randomly retrieves one phrase from the phrases array.
9. Includes handleInteraction() method that:
      + Disables the selected letter's onscreen keyboard button.
      + If the phrase does not include the guessed letter, the wrong CSS class is added to the selected letter's keyboard button and the        removeLife() method is called.
      + If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button, the                  showMatchedLetter() method is called on the phrase, and the checkForWin() method is called. If the player has won the game, the          gameOver() method is called.
      + Includes checkForWin() method that checks if the player has revealed all of the letters in the active phrase.
      + Includes a removeLife() method that removes a life from the scoreboard (one of the liveHeart.png images is replaced with a              lostHeart.png image), increments the missed property, and if the player has lost the game calls the gameOver() method.
      + Includes gameOver() method that displays a final "win" or "loss" message by showing the original start screen overlay styled            with either the win or lose CSS class.
10. Clicking the "Start Game" button creates a new Game object and starts the game.
11. Clicking an onscreen keyboard button results in a call to the handleInteraction() method for the clicked keyboard button.
12. Clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called.
13. After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game.
14. Provided HTML and CSS is used.
15. App styles have been personalized and changes have been noted in the README.md file and the project submission notes;
      + Background of keyboard changed using only Javascript.
      + emoji's added to win and loose display using only Javascript.
16. Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results in the handleInteraction() method being called for the associated onscreen keyboard button.
