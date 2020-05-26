import { compCards, cardImages } from './model/model';
import { clearCards, appendNewCard } from './display-util';
import  comp  from './model/comp';

function updateCompDisplay()
{
    clearCards(compCards);
    comp.hand.forEach(_ =>
    {
            const imgSrc = cardImages.back;
            appendNewCard(imgSrc, compCards);
    });
}


export default updateCompDisplay;