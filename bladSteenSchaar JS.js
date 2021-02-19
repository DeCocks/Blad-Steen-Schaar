"strict"


function reply_click()
{
    console.log(window.event.target.id)

switch(window.event.target.id){

    case "ImageButton1":
    var userChoice ="blad";
    break;
    case "ImageButton2":
    var userChoice ="steen";
    break;
    case "ImageButton3":
    var userChoice ="schaar";    
    break;
}


console.log("userchoice="+userChoice);

document.getElementById('kiest').innerHTML = "Computer kiest:";

// Computer choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "steen";
} else if(computerChoice <= 0.67) {
    computerChoice = "blad";
} else {
    computerChoice = "schaar";
}

console.log("computerchoice="+computerChoice);


// Display computer choice
  switch(computerChoice) {
        case "blad":
            var img = document.createElement("img");
            img.src = "blad.png";
            var src = document.getElementById("result");
            src.append(img);
          break;
          case "steen":
            var img = document.createElement("img");
            img.src = "steen.png";
            var src = document.getElementById("result");
            src.append(img);
          break;
          case "schaar":
            var img = document.createElement("img");
            img.src = "schaar.png";
            var src = document.getElementById("result");
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
};

var WinLose = Compare(userChoice,computerChoice); 
document.getElementById('winLose').innerHTML = WinLose;  //text
        

}
