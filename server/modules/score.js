var score = 
    {
        home: 0,
        away: 0
    }

function getScore() {
    return score;
}
function updateScore(updatedScore) {

    score.home = score.home + parseInt(updatedScore.home);
    score.away = score.away + parseInt(updatedScore.away);
    console.log('updated score is', score);
    return score;
}

module.exports = {
    updateScore: updateScore,
    getScore: getScore
};