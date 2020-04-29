import Deck from 'classic-deck';


const deck = new Deck;
const newGameButton = document.querySelector('.new-game');
const displayHand = document.querySelector('.player-cards');
const choiceButtonContainer = document.querySelector('.choice-button-container');
const choiceButtons = document.querySelector('.choice-buttons');
const compMessage = document.querySelector('.comp-message');
const compCards = document.querySelector('.comp-cards');
const deckRemaining = document.querySelector('.deck-remaining');
const cardImages = require('./images/*.png')
const userScoreDisplay = document.querySelector('.user-score-display');
const userResponse = document.querySelector('.user-response');
const compScoreDisplay = document.querySelector('.comp-score-display');
const cardDeck = document.querySelector('.card-deck');
const setsFound = document.querySelector('.sets-found');


export { 
    setsFound,
    newGameButton,
    compScoreDisplay,
    displayHand, 
    cardImages, 
    choiceButtonContainer, 
    choiceButtons, 
    compMessage, 
    deck, 
    deckRemaining, 
    compCards,
    userScoreDisplay,
    userResponse,
    cardDeck,
}