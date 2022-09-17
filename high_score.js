



//=== High Score Section === //
let highScoreLists = [
    {'name': 'testing1','score': 2},
    {'name': 'testing2','score': 2},
    {'name': 'testing3','score': 1},
    {'name': 'testing4','score': 1},
    {'name': 'testing5','score': 1},
    {'name': 'testing6','score': 1},
    {'name': 'testing7','score': 1},
    {'name': 'testing8','score': 1},
    {'name': 'testing9','score': 1},
    {'name': 'testing10','score': 1}
]


window.localStorage.setItem('player',JSON.stringify(highScoreObject))

const highScoreMenu = document.querySelector('.high_score_menu')//<- Popup when score makes list
const highScoreListEl = document.querySelector('.high_score_list')//<-list of high scores
let creatingList = document.createElement('li') //<- individual list
let UserPlayerName = document.getElementById('playerName') //<- User name input 

function checkHighScore (score) {
    if (score !== 0) {
        for (let i = 0; i < highScoreLists.length; i++){
            if (score > highScoreLists[i].score){
                highScoreMenu.style.visibility = 'visible'
                submit.addEventListener('click', () => {
                    playerName = UserPlayerName.value
                    highScoreLists['name'] = playerName
                    highScoreLists['score'] = score
                })
            }
        }
    } else {
        return
    }
}

function showHighScores (highScoreLists) {
    let creatingList = document.createElement('li')
    highScoreLists.forEach(element => {
        highScoreListEl.appendChild(creatingList)
        creatingList.innerHTML = element
    })
}


// === High Score Section === //

// function pause (){
//     window.addEventListener('click', (evt) => {
//         console.log(evt)
//         if (evt.key === 'Shift' && playing === false){
//             playing = true
//         } else if (evt.key === 'Shift' && playing === true) {
//             playing = false
//         }
//     })
// }
