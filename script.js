//your code here
/*
On division by 0, the answer should be 'Infinity'
On division of 0/0 it should give 'NaN'
The element where input/output is displayed should be of input type and have id="input". 
The value should get updated with every calculation
*/

// const e = require("express")

/* 
1. pressing/clicking a button = display at the input
2. button functionality of operations.
3. on pressing ans button display the answer in the input console.
*/ 
let screenDisplay = document.getElementById("input")
//to convert a HTML collection to an array we use Array.from()

const buttons = Array.from(document.getElementsByClassName("button"))
// console.log(buttons);
// screenDisplay = ""
buttons.map((button)=>{
    button.addEventListener("click",(e)=>{
    let buttonValue = button.innerText
    let screenValue = ''
        // console.log(typeof buttonValue)
        
        //clear the screen
        
        if(buttonValue == 'clear'){
            screenDisplay.value = ""
        }
        // //reset the answer
        else if(buttonValue == 'reset'){
            screenDisplay.value = '0'
        }
        // //evaluate the input
        
         else if(buttonValue == '='){
            screenValue = eval(screenDisplay.value)
            console.log(screenValue)
            screenDisplay.value=screenValue
        }
        else{
            screenDisplay.value+=buttonValue
            screenValue=screenDisplay.value
        }
    })
})