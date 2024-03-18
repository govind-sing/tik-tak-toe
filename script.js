let boxes = document.querySelectorAll(".btn")
let reset = document.querySelector(".reset")
let whoWon=document.querySelector(".whoWon")


let turnO = true;

let winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const checkwinner = () => {
    for (patten of winCondition) {
        let val1=boxes[patten[0]].innerText
        let val2=boxes[patten[1]].innerText
        let val3=boxes[patten[2]].innerText
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                whoWon.classList.remove("display")
                document.querySelector(".hasWon").innerText=`${val1} is winner`
                boxes.forEach((box) => {
                    box.disabled=true;
                })
            }
        }
    }
}
reset.addEventListener("click",()=>{
    document.location.reload();
})