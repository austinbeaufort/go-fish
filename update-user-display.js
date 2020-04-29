import { displayHand } from './model';
import buildSrc from './build-src';
import { clearCards, appendNewCard } from './display-util';
import user from './user';


function updateUserDisplay()
{
    clearCards(displayHand)
    user.hand.forEach(card =>
    {
        const imgSrc = buildSrc(card);
        appendNewCard(imgSrc, displayHand);
    });
}


export default updateUserDisplay;