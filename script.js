let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock,paper,scissor
    let options=["rock","paper","scissor"];
    const  randomIdx = Math.floor(Math.random()*3);  
    return options[randomIdx];


}
const drawGame =() =>{
    console.log("Game was Draw");
}

const showWinner =(userWin) => {
    if(userWin){
        console.log("You win");
        userScore++;
        user_score.innerText = userScore;
        msg.innerText ="You Win !";
        msg.style.backgroundColor= "green";
    }
    else{
            console.log("You lose!");
            compScore++;
            comp_score.innerText = compScore;
            msg.innerText = "You Lose !";
            msg.style.backgroundColor= "red";
        }
    }

const playGame=(userChoice) =>{
    console.log("user choice = ",userChoice );
    //generate computer choice -> modular
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice );
    if(userChoice==compChoice){
        //Draw Game
        drawGame();
        msg.innerText = "Game Draw "
        msg.style.backgroundColor= "grey";
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper"? false : true ; 
        }else if(userChoice=="paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false: true ; 
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
