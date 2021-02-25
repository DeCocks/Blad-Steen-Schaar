"use strict";


function reply_click()
{
     let userChoice ="";

switch(window.event.target.id){
    case"ImageButton1":userChoice="blad";
    break;
    case"ImageButton2":userChoice="steen";
    break;
    case"ImageButton3":userChoice="schaar";    
    break;
}


console.log("userchoice="+userChoice);

document.getElementById("kiest").innerHTML = "Computer kiest:";

// Computer choice
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "steen";
} else if(computerChoice <= 0.67) {
    computerChoice = "blad";
} else {
    computerChoice = "schaar";
}

console.log("computerchoice="+computerChoice);
let img = "";
let src= "";

// Display computer choice
  switch(computerChoice) {
        case "blad":
             img = document.createElement("img");
            img.src = "blad.png";
             src = document.getElementById("result");
            console.log("result"+src.valueOf);
            src.append(img);
          break;
          case "steen":
            img = document.createElement("img");
            img.src = "steen.png";
            src = document.getElementById("result");
            console.log("result"+src);
            src.append(img);
          break;
          case "schaar":
             img = document.createElement("img");
            img.src = "schaar.png";
             src = document.getElementById("result");
             console.log("result"+src);
            src.append(img);
          break;
    }  
// Compare user choice vs computer choice
function Compare(choice1,choice2){
    if (choice1 === choice2) {
        return "Gelijkspel";
    }
    if (choice1 === "steen") {
        if (choice2 === "schaar") {
            // s wins
            return "Jij wint !";
        } else {
            // blad wins
            return "Je verliest, probeer opnieuw !";
        }
    }
    if (choice1 === "blad") {
        if (choice2 === "steen") {
            // blad wins
            return "Jij wint !";
        } else {
            // Schaar wins
            return "Je verliest, probeer opnieuw !";
        }
    }
    if (choice1 === "schaar") {
        if (choice2 === "steen") {
            // s wins
            return "Je verliest, probeer opnieuw !";
        } else {
            // Schaar wins
            return "Jij wint !";
        }
    }
}

let WinLose=Compare(userChoice,computerChoice); 
document.getElementById('winLose').innerHTML=WinLose;  
        

}
