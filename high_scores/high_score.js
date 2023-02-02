const highScoreForReg = document.querySelector('.high_score_for_reg_list')

const highScoreForNokia = document.querySelector('.high_score_list_for_nokia')


const highScores = JSON.parse(localStorage.getItem('player')) || [];
console.log(highScores)

const nokiaHighScores = JSON.parse(localStorage.getItem('nokiaHSsection')) || [];
console.log(nokiaHighScores)



function updatingHighScoreReg () {
    highScoreForReg.innerHTML = highScores.map(regScore => {
        return (`<li class="listing regular">${regScore.name} - ${regScore.score}</li>`);
    }).join("");
}

function updatingHighScoreNokia () {
    highScoreForNokia.innerHTML = nokiaHighScores.map(nokiaScore => {
        return (`<li class="listing nokia">${nokiaScore.name} - ${nokiaScore.score}</li>`);
    }).join("");
}


document.addEventListener("DOMContentLoaded", () => {
    updatingHighScoreReg ()
    updatingHighScoreNokia ()
})