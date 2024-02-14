let compSc = 0;
let playerSc = 0;


const usrChoice = document.querySelectorAll(".user_choice");
const result = document.querySelector("#btn");
const IC_player = document.querySelector("#player");
const IC_bot = document.querySelector("#comp");
const player_sc = document.querySelector('.player');
const bot_sc = document.querySelector('.comp');

let genCompCh = () =>{
    let choice = ["R", "P", "S"];
    let randomIndex = Math.floor(Math.random()*3);
    return choice[randomIndex];
}

function drawGame() {
    result.innerHTML = "Draw";
    result.style.backgroundColor = "grey";
}

function result_game(usr_r) {
    if(usr_r == true){
        result.innerHTML = "Win";
        result.style.backgroundColor = "green";
        playerSc++;
        player_sc.innerHTML = playerSc;
    }else if(usr_r == false){
        result.innerHTML = "Loose";
        result.style.backgroundColor = "red";
        compSc++;
        bot_sc.innerHTML = compSc;
    }
}

function playGame(usr_choice){
    let bot = genCompCh();
    IC_player.src = "./icons/"+usr_choice+".png";
    IC_bot.src = "./icons/"+bot+".png";
    if(bot == usr_choice){
        drawGame();
    }else{
        let usr_r = true;
        if(usr_choice == "P"){
            //rock, sicssors
            usr_r = bot === "S" ? false : true;
        }else if(usr_choice == "S"){
            //rock, paper
            usr_r = bot === "R" ? false : true;
        }else if(usr_choice == "R"){
            //paper, sicssor
            usr_r = bot === "P" ? false : true;
        }
        result_game(usr_r);
    }
}

usrChoice.forEach((usr_choice)=>{
    usr_choice.addEventListener('click', ()=>{
        playGame(usr_choice.id);
    })
})