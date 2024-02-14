const game = (SignP2, SignP1) =>{
    let count = 1;
    sign_btn.forEach((sign)=>{
        sign.addEventListener("click", () => {
            if(count % 2 === 0){
                sign.innerText = SignP1;
                count++;
            }else{
                sign.innerText = SignP2;
                count++;
            }
            sign.disabled = true;
            checkWin();
            sign.style.background = "linear-gradient(50deg, rgba(179, 0, 255, 0.5), rgba(225, 0, 214, 0.5), rgba(255, 0, 55, 0.5)), rgba(0, 0, 0, 0.2)";
            if(sign.innerText === SignP1){
                sign.style.color = "white";
            }else{
                sign.style.color = "black";
            }   
            if(win_b===true){
                sign_btn.forEach((sign)=>{
                    sign.disabled = true;
                })
                win_b = false
            }         
        })
    })
}

const checkWin = () =>{
    for(pattern of win) {
        let pos_1 = pattern[0]
        let pos_2 = pattern[1]
        let pos_3 = pattern[2]
        if(sign_btn[pos_1].innerText != "" && sign_btn[pos_2].innerText != "" && sign_btn[pos_3].innerText != ""){
            if(sign_btn[pos_1].innerText===sign_btn[pos_2].innerText && sign_btn[pos_2].innerText===sign_btn[pos_3].innerText){
                rslt.innerText = sign_btn[pos_1].innerText + " Won";
                rslt_img.src = "./resources/icons/medal.png"
                if(player_1_sign.innerText === "("+sign_btn[pos_1].innerText+")"){
                    psc_1++;
                    sc_1.innerText = psc_1;
                }else if(player_2_sign.innerText === "("+sign_btn[pos_1].innerText+")"){
                    psc_2++;
                    sc_2.innerText = psc_2;
                }
                win_b = true;
            }
        }
    }
}



const genSignP1 = () =>{
    let SignP1_num = Math.round(Math.random(0, 1)*1);
    if(SignP1_num === 0){
        return "X";
    }else{
        return "O";
    }
}

const genSignP2 = () =>{
    if (SignP1 === "X") {
        return "O";
    } else {
        return "X";
    }
}

const sign_btn = document.querySelectorAll(".sign");
const rslt = document.querySelector(".rslt");
const reset_btn = document.querySelector(".btn");
const sc_1 = document.querySelector("#sc_1");
const sc_2 = document.querySelector("#sc_2");
const rslt_img = document.querySelector("#rslt_img");
const player_1_sign = document.querySelector(".player_1_sign");
const player_2_sign = document.querySelector(".player_2_sign");
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [6, 7, 8], [3, 4, 5], [2, 4, 6], [2, 5, 8]]
let win_b = false;
let psc_1 = 0;
let psc_2 = 0;
let SignP1 = genSignP1();
let SignP2 = genSignP2();

player_1_sign.innerText = "("+SignP1+")";
player_1_sign.style.fontSize = 12+"px";
player_1_sign.style.fontWeight = 100;
player_2_sign.innerText = "("+SignP2+")";
player_2_sign.style.fontSize = 12+"px";
player_2_sign.style.fontWeight = 100;


reset_btn.addEventListener("click", ()=>{
    sign_btn.forEach((sign)=>{
        sign.innerText = "";
        sign.disabled = false;
        sign.style.background = "white";
    })
})

game(SignP1, SignP2);