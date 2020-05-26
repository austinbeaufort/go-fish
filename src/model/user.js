import updateUserDisplay from '../update-user-display';
import { userScoreDisplay } from './model';


const user = {
    hand: [],
    score: 0,
    updateScore: updateUserScore,
    updateCards: updateUserDisplay,
}



function updateUserScore()
{
    userScoreDisplay.innerHTML = `You: ${user.score}`;
}


export default user;