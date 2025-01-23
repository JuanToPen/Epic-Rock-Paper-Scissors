const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const modal = document.getElementById("modal")
const fightTitle = document.getElementById("fightTitle")
const startPage = document.getElementById("startPage")
const title = document.getElementById("title")
const options = document.getElementById("options")
const score = document.getElementById("score")
const scoreContainer = document.getElementById("scoreContainer")
const rockPlayerWin = document.getElementById("rockPlayerWin")
const paperPlayerWin = document.getElementById("paperPlayerWin")
const scissorsPlayerWin = document.getElementById("scissorsPlayerWin")
const rockComputerWin = document.getElementById("rockComputerWin")
const paperComputerWin = document.getElementById("paperComputerWin")
const scissorsComputerWin = document.getElementById("scissorsComputerWin")
const rockTie = document.getElementById("rockTie")
const paperTie = document.getElementById("paperTie")
const scissorsTie = document.getElementById("scissorsTie")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const playAgain = document.getElementsByClassName("playAgain")
const victoryScreens = document.getElementsByClassName("victoryScreens")
const tieScreens = document.getElementsByClassName("tieScreens")
const fightBackgrounds = document.getElementsByClassName("fightBackgrounds")
let tracker = []
let trackerResult = []
let playerScore = 0
let computerScore = 0

options.addEventListener("click",(e)=>{
    if(e.target.classList.contains("options")){
        if(e.target.id === 'rock'){
            tracker.push('r')
        }else if(e.target.id === 'paper'){
            tracker.push('p')
        }else{
            tracker.push('s')
        }
        fight.play()
        setTimeout(appearFight,200)
        setTimeout(disappearStartPage,200)
        setTimeout(disappearFight,1000)
        setTimeout(appearFightPage,1200)
        setTimeout(gameLogic,4000)
    }
})

function disappearStartPage(){
    startPage.style.display = "none"
}

function appearFight(){
    document.getElementById("titleAndScore").classList.remove("titleAndScore")
    scoreContainer.classList.remove("scoreContainerAnimation2")
    scoreContainer.setAttribute("class","scoreContainerAnimation")
    score.classList.remove("scoreAnimation2")
    score.setAttribute("class","scoreAnimation")
    document.getElementById("modal").style.display = "flex"
}

function disappearFight(){
    document.getElementById("fightTitle").setAttribute("class","fightTitleAnimation")
    document.getElementById("modal").setAttribute("class","modalDisappear")
    document.body.style.backgroundColor = "black"
}

function appearFightPage (){
    scoreContainer.style.display = "flex"
    let random = Math.ceil(Math.random()*6)
    let randomComputer = Math.ceil(Math.random()*3)
    switch (random) {
        case 1:
            let mazeContainer = document.createElement("div")
            mazeContainer.setAttribute("class","fightBackgrounds")
            mazeContainer.setAttribute("id","mazeContainer")
            mazeContainer.style.backgroundImage = 'url("https://i.pinimg.com/originals/67/97/81/679781046e7669c5c2ec88df1735ac59.png")'
            mazeContainer.style.display = "flex"
            mazeContainer.style.justifyContent = "space-around"
            mazeContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                mazeContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                mazeContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                mazeContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    mazeContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    mazeContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    mazeContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(mazeContainer)
            setTimeout(function() {
                mazeContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
            break;
        case 2:
            let sandContainer = document.createElement("div")
            sandContainer.setAttribute("class","fightBackgrounds")
            sandContainer.setAttribute("id","sandContainer")
            sandContainer.style.backgroundImage = 'url("https://i.pinimg.com/736x/94/15/c6/9415c63bd10204b6e9fdcf58d032be5d.jpg")'
            sandContainer.style.display = "flex"
            sandContainer.style.justifyContent = "space-around"
            sandContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                sandContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                sandContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                sandContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    sandContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    sandContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    sandContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(sandContainer)
            setTimeout(function() {
                sandContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
            break;
        case 3:
            let royalContainer = document.createElement("div")
            royalContainer.setAttribute("class","fightBackgrounds")
            royalContainer.setAttribute("id","royalContainer")
            royalContainer.style.backgroundImage = 'url("https://i.pinimg.com/originals/d5/fe/65/d5fe654cb0c4431f58f6e1d1f4124ff5.png")'
            royalContainer.style.display = "flex"
            royalContainer.style.justifyContent = "space-around"
            royalContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                royalContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                royalContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                royalContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    royalContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    royalContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    royalContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(royalContainer)
            setTimeout(function() {
                royalContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
            break;
        case 4:
            let dragonsContainer = document.createElement("div")
            dragonsContainer.setAttribute("class","fightBackgrounds")
            dragonsContainer.setAttribute("id","dragonsContainer")
            dragonsContainer.style.backgroundImage = 'url("https://i.pinimg.com/originals/21/4b/93/214b93ffbb6c8a4002e3507dcda38a52.jpg")'
            dragonsContainer.style.display = "flex"
            dragonsContainer.style.justifyContent = "space-around"
            dragonsContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                dragonsContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                dragonsContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                dragonsContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    dragonsContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    dragonsContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    dragonsContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(dragonsContainer)
            setTimeout(function() {
                dragonsContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
            break;
        case 5:
            let nightContainer = document.createElement("div")
            nightContainer.style.backgroundImage = 'url("https://i.pinimg.com/originals/0a/1f/6a/0a1f6a477f3314d86f36c965c08387fc.jpg")'
            nightContainer.setAttribute("class","fightBackgrounds")
            nightContainer.setAttribute("id","nightContainer")
            nightContainer.style.display = "flex"
            nightContainer.style.justifyContent = "space-around"
            nightContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                nightContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                nightContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                nightContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    nightContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    nightContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    nightContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(nightContainer)
            setTimeout(function() {
                nightContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
            break;
        default:
            let swordContainer = document.createElement("div")
            swordContainer.style.backgroundImage = 'url("https://i.pinimg.com/originals/8e/a0/33/8ea0337900bb4760e1333e80eeb59b57.jpg")'
            swordContainer.setAttribute("class","fightBackgrounds")
            swordContainer.setAttribute("id","swordContainer")
            swordContainer.style.display = "flex"
            swordContainer.style.justifyContent = "space-around"
            swordContainer.style.alignItems = "center"
            if(tracker[tracker.length - 1] === 'r'){
                let rockImage = document.createElement("img")
                rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                rockImage.style.height = "45%"
                rockImage.style.width = "15%"
                rockImage.setAttribute("id","rockPlayer")
                swordContainer.appendChild(rockImage)
            }else if(tracker[tracker.length - 1] === 'p'){
                let paperImage = document.createElement("img")
                paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                paperImage.style.height = "52.5%"
                paperImage.style.width = "17.5%"
                paperImage.style.borderRadius = "1.5em"
                paperImage.setAttribute("id","paperPlayer")
                swordContainer.appendChild(paperImage)
            }else{
                let scissorsImage = document.createElement("img")
                scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                scissorsImage.style.height = "40%"
                scissorsImage.style.width = "25%"
                scissorsImage.style.borderRadius = "1em"
                scissorsImage.setAttribute("id","scissorsPlayer")
                swordContainer.appendChild(scissorsImage) 
            }
            switch (randomComputer){
                case 1:
                    let rockImage = document.createElement("img")
                    rockImage.src = "https://static.wikia.nocookie.net/prowrestling/images/a/ad/Wwe_the_rock_png_by_double_a1698_day9ylt-pre_%281%29.png/revision/latest?cb=20190225014047"
                    rockImage.style.height = "45%"
                    rockImage.style.width = "15%"
                    rockImage.setAttribute("id","rockComputer")
                    swordContainer.appendChild(rockImage)
                    break;
                case 2:
                    let paperImage = document.createElement("img")
                    paperImage.src = "https://pbs.twimg.com/media/E7KgymsXoAMSnTx.jpg"
                    paperImage.style.height = "52.5%"
                    paperImage.style.width = "17.5%"
                    paperImage.style.borderRadius = "1.5em"
                    paperImage.setAttribute("id","paperComputer")
                    swordContainer.appendChild(paperImage)
                    break;
                default:
                    let scissorsImage = document.createElement("img")
                    scissorsImage.src = "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1200.jpg"
                    scissorsImage.style.height = "40%"
                    scissorsImage.style.width = "25%"
                    scissorsImage.style.borderRadius = "1em"
                    scissorsImage.setAttribute("id","scissorsComputer")
                    swordContainer.appendChild(scissorsImage) 
            }
            document.body.appendChild(swordContainer)
            setTimeout(function() {
                swordContainer.classList.add("transition");
            }, 100); 
            setTimeout(function() {
                scoreContainer.classList.add("transition");
            }, 100); 
    }
}

function gameLogic (){
    if(document.getElementById("rockPlayer") !== null &&
    document.getElementById("rockComputer") !== null){
        trackerResult.push("t")
        document.getElementById("laugh").play()
        rockTie.style.display = "flex"
    }else if(document.getElementById("rockPlayer") !== null &&
    document.getElementById("paperComputer") !== null){
        trackerResult.push("v")
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
        paperComputerWin.style.display = "flex"
        document.getElementById("fatality").play();
    }else if(document.getElementById("rockPlayer") !== null &&
    document.getElementById("scissorsComputer") !== null){
        trackerResult.push("v")
        playerScore += 1
        console.log(playerScore)
        playerScoreDisplay.innerText = playerScore
        rockPlayerWin.style.display = "flex"
        document.getElementById("victoryTheme").play()
    }else if(document.getElementById("paperPlayer") !== null &&
    document.getElementById("rockComputer") !== null){
        trackerResult.push("v")
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
        paperPlayerWin.style.display = "flex"
        document.getElementById("victoryTheme").play()
    }else if(document.getElementById("paperPlayer") !== null &&
    document.getElementById("paperComputer") !== null){
        trackerResult.push("t")
        document.getElementById("laugh").play()
        paperTie.style.display = "flex"
    }else if(document.getElementById("paperPlayer") !== null &&
    document.getElementById("scissorsComputer") !== null){
        trackerResult.push("v")
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
        scissorsComputerWin.style.display = "flex"
        document.getElementById("fatality").play();
    }else if(document.getElementById("scissorsPlayer") !== null &&
    document.getElementById("rockComputer") !== null){
        trackerResult.push("v")
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
        rockComputerWin.style.display = "flex"
        document.getElementById("fatality").play();
    }else if(document.getElementById("scissorsPlayer") !== null &&
    document.getElementById("paperComputer") !== null){
        trackerResult.push("v")
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
        scissorsPlayerWin.style.display = "flex"
        document.getElementById("victoryTheme").play()
    }else{
        trackerResult.push("t")
        document.getElementById("laugh").play()
        scissorsTie.style.display = "flex"
    }
}

for(let i = 0; i < playAgain.length; i++){
    playAgain[i].addEventListener("click",()=>{
        if(trackerResult[trackerResult.length - 1] === 'v'){
            for(let i = 0; i < victoryScreens.length; i++){
                victoryScreens[i].style.display = "none"
            }
        }else{
            for(let i = 0; i < tieScreens.length; i++){
                tieScreens[i].style.display = "none"
            }
        }
        for(let i = 0; i < fightBackgrounds.length; i++){
            fightBackgrounds[i].remove()
        }
        document.getElementById("fatality").pause()
        document.getElementById("fatality").currentTime = 0
        document.getElementById("laugh").pause()
        document.getElementById("laugh").currentTime = 0
        document.getElementById("victoryTheme").pause()
        document.getElementById("victoryTheme").currentTime = 0
        scoreContainer.classList.remove("transition")
        scoreContainer.classList.remove("scoreContainerAnimation")
        score.classList.remove("scoreAnimation")
        scoreContainer.setAttribute("class","scoreContainerAnimation2")
        score.setAttribute("class","scoreAnimation2")
        document.getElementById("titleAndScore").setAttribute("class","titleAndScore")
        modal.style.display = "none"
        modal.removeAttribute("class")
        fightTitle.removeAttribute("class")
        document.body.style.backgroundColor = "rgb(214, 214, 214)"
        startPage.style.display = "block"
    })
}

