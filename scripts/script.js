//element
let playButton = document.getElementById("play-button")

let center = document.getElementById("center")

let img = document.getElementById("figure-jumping")

let choose = document.getElementById("choose")

let button = document.getElementById("button")

let button1 = document.getElementById("button1")

let button2 = document.getElementById("button2")

let keyboard = document.getElementById("keyboard")

let countDown = document.getElementById("count-down")

let startCount = document.getElementById("start-count")

let game = document.getElementById("game")

let highScore = document.getElementById("highScore")

let infoText = document.getElementById("infoText")

let input = document.getElementById("input")

let scoreEl = document.getElementById("score")

let timeEl = document.getElementById("time")

let gameOver = document.getElementById("game-over")

let menuEl = document.getElementById("menu")

let finalScore = document.getElementById("final-score")

let GameOverDivEl = document.getElementById("gameOverDiv")

//events

playButton.addEventListener("click", startGame)

button.addEventListener("click", number)

button1.addEventListener("click", number1)



menuEl.addEventListener("click", menu) 

//function  

function startGame() {
  center.style.display = "none"
  choose.style.display = "block"

}

function number() {

  choose.style.display = "none"
  img.style.display = "none"
  keyboard.style.display = "block"
  keyboardPart()
}

function number1() {
  startCount.innerHTML = 3
  choose.style.display = "none"
  countDown.style.display = "block"
  img.style.display = "none"
  let id = setInterval(function time() {
    if (startCount.innerHTML == 0) {
      clearInterval(id)
      countDown.style.display = "none"
      game.style.display = "block"
      gamee()
    } else
      startCount.innerHTML = startCount.innerHTML - 1
  }, 1000)


}

function number2() {
  choose.style.display = "none"

}

function keyboardPart() {
  choose.style.display = "none"
  img.style.display = "none"

  let falseEl;
  let oneLetter = randomLetter()
  let letterEl = document.getElementById(oneLetter)
  letterEl.classList.add("selected")

  document.addEventListener("keyup",function(e){
    if(falseEl){
      setTimeout(()=>falseEl.classList.remove("hit"),50)
    }
    
    if(e.code == oneLetter){
      letterEl.classList.remove("selected")
      oneLetter = randomLetter()
      letterEl = document.getElementById(oneLetter)
      letterEl.classList.add("selected")
    }else{
      falseEl = document.getElementById(e.code)
      falseEl.classList.add("hit")
    }
  })


}
function gamee() {
  let time = 5;
  let oneWord;
  let score = 0;
  let hScore;
  timeEl.innerHTML = time
  if (localStorage.length == 0) {
    localStorage.score = 0
  }

  input.value = ""

  let id = setInterval(function () {
    if (time > 0) {
      time--
      if(time>=0)
      timeEl.innerHTML = time
    } else {
      clearInterval(id)
      gOver()
   
    }
  }, 1000)


  oneWord = randomWord()
  infoText.innerHTML = oneWord
  hScore = localStorage.score
  highScore.innerHTML = hScore
  input.onchange = function () {
    if (input.value == oneWord) {
      score++
      time += 4
      timeEl.innerHTML = time
      if (score >= hScore) {
        hScore = score
        localStorage.score = hScore
        highScore.innerHTML = hScore
      }
      scoreEl.innerHTML = score
      input.value = ""
      oneWord = randomWord()
      infoText.innerHTML = oneWord
      time -= 2
      if(time>=0)
      timeEl.innerHTML = time
    }
  }
}

function randomWord() {
  let i = Math.floor(Math.random() * words.length)
  return words[i]
};

function randomLetter() {
  let i = Math.floor(Math.random() * letter.length)
  return letter[i]
};


function gOver() {
  finalScore.innerHTML = scoreEl.innerHTML;
  game.style.display = "none"
  gameOver.style.display = "block";
  menuEl.style.display = "block"  
}

function menu(){
  center.style.display = "block"
  menuEl.style.display = "none"
  gameOver.style.display = "none"
}