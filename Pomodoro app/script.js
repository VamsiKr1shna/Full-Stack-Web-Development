const timeLimit = 1500;//1500 is 25 mins in secs
let timer;
function countDown() {
    let timeLeft= timeLimit;
    const startButton = document.getElementById("button");
    startButton.disabled = true;
    startButton.style.display = "none";

    timer = setInterval(function(){
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft%60;
    const countdownDisplay = document.getElementById("timer");
    countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if(timeLeft === 0){
        clearInterval(timer);
        startButton.disabled = false;
        startButton.style.display = "block";
        document.getElementById("timer").innerHTML="25:00";
    }
    else 
        timeLeft--;
    
    },1000);

}


$("button").click(countDown);
