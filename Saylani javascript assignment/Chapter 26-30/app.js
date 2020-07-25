// Task 1
var inp = +prompt("Enter any positive number");
document.write("number: "+ inp+"<br>");
document.write("round off value: "+ Math.round(inp)+"<br>");
document.write("floor value: " + Math.floor(inp)+"<br>");
document.write("ceil value: " + Math.ceil(inp)+"<br>");

// Task 2
var inp = +prompt("Enter any negtive number");
document.write("number: "+ inp+"<br>");
document.write("round off value: "+ Math.round(inp)+"<br>");
document.write("floor value: " + Math.floor(inp)+"<br>");
document.write("ceil value: " + Math.ceil(inp)+"<br>");

// Task 3
var inp = +prompt("Enter any number");
document.write("The absolut value of "+ inp +" is "+Math.abs(inp)+"<br>");

// Task 4
var randomValue1 = Math.floor(Math.random()*6+1);
var randomValue2 = Math.floor(Math.random()*6+1);
document.write("Random dice value: " + randomValue1+"<br>");
document.write("Random dice value: " + randomValue2+"<br>");

// Task 5
var randomCoinValue = Math.floor(Math.random()*2+1);
document.write(randomCoinValue+"<br>");
if(randomCoinValue === 2){
    document.write("random coin value: Heads <br>");

}
else{
    document.write("random coin value: Tails <br>");

}

// Task 6
var rndValue = Math.floor(Math.random()*(100-1)+1);
document.write("random number between 1 and 100: " + rndValue+"<br>");

// Task 7
var weight = prompt("Enter your weight in kilograms");
weight = weight.replace(/[^0-9\.]+/g, "");
document.write("The weight of user is "+weight+" kilograms <br>");

// Task 8
var secret = Math.floor(Math.random()*10);
var input = +prompt("Enter a number between 1 and 10");
if(input === secret){
    alert("Congratulations");
}
else{
    alert("Try again!");
}

