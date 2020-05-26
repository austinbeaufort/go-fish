import { init } from 'ez-read';
import { getRankWord } from './display-util';
import comp from './model/comp';
import user from './model/user';


function correctUserGuess(userGuess, cardsFound)
{

    comp.message.innerHTML = makeCardMessage(userGuess, cardsFound);
    user.hand = user.hand.concat(cardsFound).sort();
    comp.updateCards();
    user.updateCards();
}


function makeCardMessage(userGuess, cardsFound)
{
    let message = `I have ${numToWord(cardsFound.length)} ${getRankWord(userGuess)}s`;
    if (cardsFound.length === 1)
    {
        message = init(message);
    }
    return message;
}


function numToWord(num)
{
    switch(num)
    {
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        default:
            return 'error in game...'
    }
}


export default correctUserGuess;