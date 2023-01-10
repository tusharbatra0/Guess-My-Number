let output = document.getElementById("outputtext");
let score = document.getElementById("score")
let number = Math.floor(Math.random() * 20)
let btn = document.getElementById("btn")
let playagain = document.getElementById("playagain")
let gameover = document.getElementById("gameover")
    
let count = 5 ;
score.innerHTML = count ;
btn.addEventListener('click', function() {

    let input = document.getElementById("input").value;
    if(input !== ""){
      if(count == 0){
        gameover.innerHTML = `Game Over`
      }
   if (input == number){
    output.innerHTML = `You Guessed right, The number is ${number}`
    document.body.style.backgroundColor = 'green';
    if(count > 0){
      count --
      score.innerHTML = count;
    }
   }
   else if(input < number){
    output.innerHTML = `Your number is too low ☹`
    document.body.style.backgroundColor = 'red';
    if(count > 0){
      count --
      score.innerHTML = count;
    }
    
   }
   else{
    output.innerHTML = `Your number is too high ☹`
    document.body.style.backgroundColor = 'darkred';
    if(count > 0){
      count --
      score.innerHTML = count;
    }
   }
  
}} );
playagain.addEventListener("click" , function(){
  output.innerHTML = `Enter the number below`
  count = 5
  score.innerHTML = count;
  document.body.style.backgroundColor = 'black';
  gameover.innerHTML = ""
})

