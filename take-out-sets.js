import { init, unique, last } from 'ez-read';
import { setsFound } from './model';
import { getRankWord } from './display-util';
import comp from './comp';


function takeOutSets(player)
{
    const ranks = player.hand.map(card => init(card));
    const uniqueRanks = unique(ranks);
    const setFoundRank = findSets(uniqueRanks, player);
    if (setFoundRank)
    {
        player.hand = player.hand.filter(card => setFoundRank !== init(card));
        comp.updatedOptions = comp.updatedOptions.filter(rank => rank != setFoundRank);
        player.updateCards();
        player.score++;
        player.updateScore();
        const currentSets = setsFound.innerHTML;
        const newSetsFound = `${currentSets} ${getRankWord(setFoundRank)}s, `;
        setsFound.innerHTML = newSetsFound;
    }
}


function findSets(uniqueRanks, player)
{
    let count = 0;
    for (let i = 0; i < uniqueRanks.length; i++)
    {
        for (let j = 0; j < player.hand.length; j++)
        {
            if (uniqueRanks[i] === init(player.hand[j]))
            {
                count++;
            }
        }
        if (count === 4)
        {
            return uniqueRanks[i];
        }
        else
        {
            count = 0;
        }
    }
}


export default takeOutSets;