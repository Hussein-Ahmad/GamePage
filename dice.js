
function dice(){
var die1=Math.floor(Math.random()*6)+1;
var die2=Math.floor(Math.random()*6)+1;
var totaldie= die1+die2;

if (totaldie==7||totaldie==11){
document.getElementById("diceOutput").innerHTML="You rolled"+totaldie+"You win";

}

else if(totaldie==2||totaldie==3||totaldie==12){                                                         
    document.getElementById("diceOutput").innerHTML="You rolled"+totaldie+"You win";
   
}
else {
    document.getElementById("diceOutput").innerHTML="You rolled"+totaldie+"You win";
  
}
}
