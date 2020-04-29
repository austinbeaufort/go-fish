import { compMessage } from './model';
import updateCompDisplay  from './update-comp-display';
import { compScoreDisplay } from './model';

const comp = {
    guessOptions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    updatedOptions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    guess: '',
    hand: [],
    message: compMessage,
    updateCards: updateCompDisplay,
    updateScore: updateScoreDisplay,
    resetGuessOptions: resetGuessOpts,
    score: 0,
}


function updateScoreDisplay()
{
    compScoreDisplay.innerHTML = `Computer: ${comp.score}`;
}


function resetGuessOpts()
{
    comp.guessOptions = comp.updatedOptions;
}

export default comp;