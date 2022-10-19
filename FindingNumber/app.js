let guessNumber=0
let correctCompartment=Math.floor(Math.random() * 10)+1;

function checkGuessNumber(){
    guessNumber+=1
    if(guessNumber>4){
        alert("Bilemedin bro PUAN =0")
        document.getElementById("buton").disabled = 'true';
    }
}
function myGuess(){
    checkGuessNumber()
    let guessCompartment=document.getElementById("getValue").value
    if(correctCompartment==guessCompartment){ 
       if(guessNumber==1){
        alert("100 puan")
       }
       if(guessNumber==2){
        alert("75 puan")
       }
       if(guessNumber==3){
        alert("50 puan")
       }
       if(guessNumber==4){
        alert("25 puan")
       }
    }
    else if(guessCompartment>correctCompartment){
        alert("your son is behind")
    }
    else if(guessCompartment<correctCompartment){
        alert("your son is forward")
    }
    
    document.getElementById("getValue").value = "";
}
console.log(correctCompartment)