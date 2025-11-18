Card Match Game:



Description: A deck of 52 cards (from ace to king) are shuffled on the game stage, momentarily revealed to the player, and flipped to have their value hidden. The player must select two cards that match in face/rank (A, 7, 10, Q, K, etc). If the two selected cards match, those two cards will be removed from the game stage and added to the **collected pile** and if the two cards do not match, they will both be reflipped and the player must try again. The player will continue to do this until no cards remain which will mean they won the game, they mismatch cards a **specified number of times that will be tracked** meaning they lost the game, or **time is up** which also means they lost the game



\*Things needed to properly code

&nbsp;	-deck list (maybe an state array or tracked by the api)

&nbsp;	-game stage (4 rows, 13 columns)

&nbsp;	-card flipping functionality (visible before shuffling or pre-shuffled, hidden after shuffling, toggle visibility when player clicks a card which, hidden when selected cards are wrong)

&nbsp;	-selected cards list (maybe an array state of two cards that is updated whenever are card is toggled to be visible by the player's click)

&nbsp;	-match/mismatch functionality (checked if the selected cards match or not; could be a function called when the selected cards array is full and will do +1 to mismatched cards count)

&nbsp;	-card removing functionality (function to update the deck list to remove the matched cards found in selected cards list array)

&nbsp;	-win/lose game functionality (maybe an state object with a "game won", "game lost", "currently playing" Booleans that are updated if the collected pile is full, time runs out, or too many mismatches are made)

&nbsp;	-start game functionality to shuffle the deck (might just be a screen reload if time is not available)

&nbsp;	-

