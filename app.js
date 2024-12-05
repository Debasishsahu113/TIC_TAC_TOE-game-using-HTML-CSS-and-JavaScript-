let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let container1=document.querySelector(".container1");
let msg=document.querySelector("#msg");
let turnO=true; 
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turnO=true;
    enablebtn();
    container1.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){//playerO
            box.innerText="O";
            turnO=false;//close for O and Start for O
        }
        else{//playerX
            box.innerText="X";
            turnO=true;//close for X and start for O
        }
        box.disabled=true;//After click the  box, the box was not respond meaning the value was not change

        checkwinner();
    });
});
  const disablebtn=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
  }

  const enablebtn=()=>{
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
  }

const showwinner=(winner)=>{
      msg.innerText=`Congratulations,Winner is ${winner}`;
      container1.classList.remove("hide");
      disablebtn();
}

const checkwinner=(()=>{
  for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText);//here individual number was printed from the array.
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

         if(pos1val!="" && pos2val!="" && pos3val!="" ){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner🤩🤩"+pos1val);
                showwinner(pos1val);
            }
         }
  }
});


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);