import Deck from 'classic-deck';


const deck = new Deck;

const cardDeck = document.querySelector('.card-deck');
const cardImages = require('../images/*.png');
const choiceButtons = document.querySelector('.choice-buttons');
const choiceButtonContainer = document.querySelector('.choice-button-container');
const compCards = document.querySelector('.comp-cards');
const compMessage = document.querySelector('.comp-message');
const compScoreDisplay = document.querySelector('.comp-score-display');
const deckRemaining = document.querySelector('.deck-remaining');
const displayHand = document.querySelector('.player-cards');
const newGameButton = document.querySelector('.new-game');
const setsFound = document.querySelector('.sets-found');
const userResponse = document.querySelector('.user-response');
const userScoreDisplay = document.querySelector('.user-score-display');



export { 
    cardDeck,
    cardImages,
    choiceButtons, 
    choiceButtonContainer, 
    compCards,
    compMessage, 
    compScoreDisplay,
    deck, 
    deckRemaining, 
    displayHand, 
    newGameButton,
    setsFound,
    userResponse,
    userScoreDisplay,
}