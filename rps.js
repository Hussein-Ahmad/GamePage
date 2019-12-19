function RPS(){
    
alert("RPS");
var user=document.getElementById("userInput").value.toLowerCase();
var computer=Math.floor(Math.random()*3)+1;
if (computer==1){
    computer="rock";
}else if(computer==2){
    computer="paper";
} else{
    computer="scissors";
}
if(computer==user){
    document.getElementById("rpsOutput").innerHTML="tie";

} 
else if((user=="rock" && computer=="scissors")||(user=="paper" && computer=="rock")||(user=="scissors" && computer=="paper")){
    document.getElementById("rpsOutput").innerHTML="you win";
  
    }
    
    else{
    document.getElementById("rpsOutput").innerHTML="computer wins";
   
}
}
