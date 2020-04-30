import user from '/model/user';
import comp from '/model/comp';
import { choiceButtonContainer, deck, deckRemaining, setsFound, userResponse } from '/model/model';


function dealCards(deck)
{
    deck.reset()
    user.hand = deck.deal(7);
    comp.hand = deck.deal(7);
}


function setInitialDisplay()
{
    deckRemaining.innerHTML = `Number of cards remaining: ${deck.deck.length}`;
    user.updateCards();
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


export {
    dealCards,
    setInitialDisplay,
}