import { any, head, init, randomChoice, not, unique, empty, last } from 'ez-read'
import { newGameButton, choiceButtonContainer, choiceButtons, deck, deckRemaining, userResponse, setsFound } from './model';
import user from './user';
import comp from './comp';
import takeOutSets from './take-out-sets';
import setDeckDisplay from './set-deck-display';
import correctUserGuess from './correct-user-guess';
import { getRankWord } from './display-util';


newGameButton.addEventListener('click', runGame);
choiceButtons.addEventListener('click', processUserGuess);
userResponse.addEventListener('click', processResponse);

function runGame()
{
    start(deck);
    choiceButtonContainer.classList.add('is-visible');
    userResponse.classList.remove('is-visible');
    setDeckDisplay()
    comp.score = 0;
    user.score = 0;
    user.updateScore()
    comp.updateScore()
    comp.message.innerHTML = `Your Turn.`;
    setsFound.innerHTML = `Sets Found:`;
}



function processUserGuess(event)
{
    const userGuess = getUserGuess(event.target.id);
    const newCompHand = comp.hand.filter(card => userGuess !== init(card));
    const cardsFound = comp.hand.filter(card => userGuess === init(card));
    comp.hand = newCompHand;
    if (empty(cardsFound) || empty(comp.hand))
    {
        userGoesFish(event.target.id)
        takeOutSets(user)
        setTimeout(() => {
            runCompTurn()
        }, 1500);
    }
    else
    {
        correctUserGuess(userGuess, cardsFound)
        takeOutSets(user)
    }
}



function getUserGuess(eventId)
{
    let userGuess = init(eventId);
    const isFaceCardOrAce = userGuess.length > 2;
    if (isFaceCardOrAce)
    {
        userGuess = head(userGuess.toUpperCase());
    }

    return userGuess;
}



function userGoesFish(eventId)
{
    user.hand = user.hand.concat(deck.deal(1)).sort();
    deckRemaining.innerHTML = `Number of cards remaining: ${deck.deck.length}`;
    choiceButtonContainer.classList.remove('is-visible');
    if (empty(deck.deck))
    {
        gameOver()
        return;
    }
    comp.message.innerHTML = `No ${init(eventId)}s found, Go Fish!`;
    comp.updateCards();
    user.updateCards();
    setDeckDisplay()
}



function compGoesFish()
{
    comp.hand = comp.hand.concat(deck.deal(1));
    deckRemaining.innerHTML = `Number of cards remaining: ${deck.deck.length}`;
    userResponse.classList.remove('is-visible');
    if (empty(deck.deck))
    {
        gameOver()
        return;
    }
    comp.updateCards();
    choiceButtonContainer.classList.add('is-visible');
    comp.message.innerHTML = `Your Turn.`;
    takeOutSets(comp)
    comp.resetGuessOptions();
    setDeckDisplay()
}


function gameOver()
{
    choiceButtonContainer.classList.remove('is-visible');
    userResponse.classList.remove('is-visible');

    if (user.score > comp.score)
    {
        comp.message.innerHTML = `You Win!`;
    }
    else if (user.score === comp.score)
    {
        comp.message.innerHTML = `Tie Game!`;
    }
    else
    {
        comp.message.innerHTML = `Sorry, you Lose :(`;
    }
}


function processResponse(event)
{
    const userHasCard = any((item => init(item) == comp.guess), user.hand);
    const buttonPressed = event.target.id;
    switch(true)
    {
        case userHasCard && buttonPressed === 'yes':
            correctCompGuess()
            break;
        case userHasCard && buttonPressed === 'no':
            comp.message.innerHTML = `HEY. NO CHEATING! ... try clicking "Yes"...`;
            break;
        case not(userHasCard) && buttonPressed === 'yes':
            comp.message.innerHTML = `HEY. NO CHEATING! ... try clicking "No, Go Fish!"...`;
            break;
        case not(userHasCard) && buttonPressed === 'no':
            compGoesFish()
            break;
        default:
            console.log('error');
            
    }
}



function runCompTurn()
{
    comp.guess = randomChoice(comp.guessOptions);
    comp.message.innerHTML = `Computer: Do you have any ${getRankWord(comp.guess)}s?`
    userResponse.classList.add('is-visible');
}




function correctCompGuess()
{
    const newUserHand = user.hand.filter(card => comp.guess != init(card));
    const cardsFound = user.hand.filter(card => comp.guess == init(card));
    user.hand = newUserHand;
    comp.hand = comp.hand.concat(cardsFound);
    comp.updateCards();
    user.updateCards();
    comp.guessOptions = comp.guessOptions.filter(rank => comp.guess !== rank);
    takeOutSets(comp)
    setTimeout(() =>
    {
        runCompTurn()
    }, 1500);
}





function start(deck)
{
    deck.reset()
    user.hand = deck.deal(7);
    comp.hand = deck.deal(7);
    user.updateCards();
    deckRemaining.innerHTML = `Number of cards remaining: ${deck.deck.length}`;
}