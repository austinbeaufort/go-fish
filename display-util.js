function clearCards(cardDisplay)
{
    cardDisplay.innerHTML = '';
}



function appendNewCard(imgSrc, cardDisplay)
{
    const newCard = document.createElement('img');
    newCard.setAttribute('src', imgSrc);
    newCard.setAttribute('height', '150px');
    newCard.setAttribute('width', '100px');
    newCard.style.padding = "10px 5px 10px 5px";
    cardDisplay.appendChild(newCard);
}


function getRankWord(cardRank)
{
    switch(cardRank)
    {
        case 'J':
            return 'jack';
        case 'Q':
            return 'queen';
        case 'K':
            return 'king';
        case 'A':
            return 'ace';
        default:
            return cardRank;
    }
}


export { clearCards, appendNewCard, getRankWord };