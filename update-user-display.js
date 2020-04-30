import { init, last } from 'ez-read';
import { cardImages, displayHand } from '/model/model';
import { clearCards, appendNewCard, getRankWord } from './display-util';
import user from '/model/user';


function updateUserDisplay()
{
    clearCards(displayHand)
    user.hand.forEach(card =>
    {
        const imgSrc = buildSrc(card);
        appendNewCard(imgSrc, displayHand);
    });
}


function buildSrc(card)
{
    const cardRank = init(card);
    const rankWord = getRankWord(cardRank);
    const cardSuit = last(card);
    const suitWord = getSuitWord(cardSuit);
    const imgSrc = cardImages[`${rankWord}_of_${suitWord}`];
    return imgSrc;
}


function getSuitWord(cardSuit)
{
    switch(cardSuit)
    {
        case 'S':
            return 'spades';
        case 'H':
            return 'hearts';
        case 'D':
            return 'diamonds';
        case 'C':
            return 'clubs';
        default:
            return 'broken';
    }
}


export default updateUserDisplay;