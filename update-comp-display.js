import { compCards, cardImages } from './model';
import { clearCards, appendNewCard } from './display-util';
import  comp  from './comp';

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