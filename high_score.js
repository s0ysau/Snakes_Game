const highScoreListEl = document.querySelector('.high_score_list')//<-list of high scores

const highScores = JSON.parse(localStorage.getItem('player')) || [];
console.log(highScores)