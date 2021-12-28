let NumberToPlay = 0

let contador = 0

var audio = new Audio("./mario-coin.mp3");


window.onload = ( ) =>{

//Lo primero es obtener todas las tuberias:

let tuberia1 = document.getElementById('tubo1')
let tuberia2 = document.getElementById('tubo2')
let tuberia3 = document.getElementById('tubo3')
let tuberia4 = document.getElementById('tubo4')
let tuberia5 = document.getElementById('tubo5')
let tuberia6 = document.getElementById('tubo6')
// Lo segundo es añadir el evento de click en cada una de ellas
tuberia1.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})
tuberia2.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})
tuberia3.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})
tuberia4.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})
tuberia5.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})
tuberia6.addEventListener('click', () =>{
    if(NumberToPlay != null)
    checkMario(NumberToPlay)
})

// Lo tercero es generar un numero aleatorio del 1-6 para que Mario suba por esa tuberia 
chosenPipe = getRandom(1,7)

}


checkMario = (NumberToPlay) =>{

clickedPipe = event.currentTarget.id
score = document.getElementById('score')
pToNumber = parseFloat(score.innerText)
if(clickedPipe == ('tubo' + NumberToPlay)){
    score.innerText = pToNumber  + 1
    audio.play()

/*   nextPipe = 'tubo' + getRandom(1,7) */


}else{
    score.innerText = score.innerText - 1
}

}

getRandom = async (numMin,numMax) =>{
 /*    await delayMario(4000) */

chosenPipe = Math.floor(Math.random()*(numMax - numMin) + numMin)
console.log(chosenPipe)
NumberToPlay = chosenPipe
var prevNum = 
//Lo cuarto es pasar el chosenPipe a una funcion que coloque a mario encima de la tuberia
chosenPipeElement = 'tubo' + chosenPipe
marioInPipe(chosenPipeElement, chosenPipe)

}

function delayMario(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  

marioInPipe =  async  (chosenPipe,numberPipe) =>{
 contador = contador + 1
  
  let imgMario =  document.createElement('img')
  imgMario.classList.add('mario')
  imgMario.id = 'idMario'
  imgMario.src = "./Mario.png"
  tubewithImg = document.getElementById(chosenPipe)
  tubewithImg.appendChild(imgMario)
  await delayMario(800)
  if (contador > 1){
  let prevNumPipe = numberPipe
  let tubePrev = document.getElementById('tubo' + prevNumPipe)
  tubePrev.removeChild(imgMario)
   await delayMario(200) 
  let moves = document.getElementById('moves')
  movesRs = parseFloat(moves.innerText) - 1
  moves.innerText = movesRs

  if(moves.innerText == 0 ){
      alert('Game Over')
      window.location.reload()
  }

  NumberToPlay = 0
   getRandom(1,7) 
    }else{

    await delayMario(800)
    tubewithImg.removeChild(imgMario)
    await delayMario(800)
    getRandom(1,7) 
   }

}