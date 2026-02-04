let boxes = document.querySelectorAll(".choiceBtn")
let reset = document.querySelector("#reset")
const statusText = document.getElementById("status")

let user=[]
let comp=[]

let turn0=true

const Winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


// User->0
// Comp->X

boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        if(!turn0) return
        box.innerText = "O"
        turn0=false
        console.log("User_Click:",index)
        user.push(index)
        box.disabled=true
        checkWinner()
        statusText.innerText="Brihan is thinking...."
        setTimeout(() => {
            computerTern()
            statusText.innerText=""
        }, 2000); 

    })
});



            

function computerTern(){
    let compNum;
            while(true){
                let num = randomInRange(0,8)
                if(num>=9) return;
                if(!user.includes(num) && !comp.includes(num)){
                    compNum=num;
                    break;
                }
            }
            comp.push(compNum)
            console.log("Comp_Click:",compNum)
            boxes[compNum].innerText = "X"
            boxes[compNum].disabled=true
            turn0=true
            checkWinner()
}

const checkWinner=()=>{
    for(let pattern of Winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3 && pos1==pos3){
                console.log("Winner",pos1)
                disableAll()
            }
        }
    }
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function disableAll() {
  boxes.forEach(box => box.disabled = true);
}