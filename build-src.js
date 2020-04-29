import { init, last } from 'ez-read';
import { cardImages } from './model';
import { getRankWord } from './display-util';

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

export default buildSrc;