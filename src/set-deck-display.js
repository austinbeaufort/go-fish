import { cardDeck, cardImages, deck } from './model/model';


function setDeckDisplay()
{
    switch(deck.deck.length)
    {
        case 38:
            setImage(cardImages['card-deck'], '150px', '155px');
            break;
        case 4:
            setImage(cardImages['card-deck-4'], '150px', '153px');
            break;
        case 3:
            setImage(cardImages['card-deck-3'], '150px', '151px');
            break;
        case 2:
            setImage(cardImages['card-deck-2'], '150px', '149px');
            break;
        case 1:
            setImage(cardImages['card-deck-1'], '150px', '147px');
            break;
        default:
            return;
    }
}



function setImage(imgSrc, height, width)
{
    cardDeck.setAttribute('src', imgSrc)
    cardDeck.setAttribute('height', height);
    cardDeck.setAttribute('width', width);
}


export default setDeckDisplay;