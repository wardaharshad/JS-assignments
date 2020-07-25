//Task 1
var char = prompt("Enter any charachter");
var type_check = isNaN(char);
if(type_check === false){
    alert("It is a number")
}
else if(type_check === true){
    for(var i = 65;i<=90;i++){
        if (char.charCodeAt() === i){
            alert("Uppercase String");
        }
    }
    for(var j = 97;j<=122;j++){
        if (char.charCodeAt() === j){
            alert("Lowercase String");
        }
    }

}

//Task 2
var input1 = +prompt("Enter integer 1");
var input2 = +prompt("Enter integer 2");
if(input1 === input2){
    alert("Both are equal");
}
else if(input1>input2){
    alert("integer1 is larger");
}
else{
    alert("integer2 is larger");
}

//Task 3
var input = +prompt("Enter any Number");
if(input>0){
    alert("Number is positive");
}
if (input<0){
    alert("Number is negative");
}
if (input === 0){
    alert("Number is Zero");
}

//Task 4
var alphabet = prompt("Enter any alphabet");
if(alphabet === 'a' || alphabet === 'e' || alphabet ==='i' || alphabet ==='o' || alphabet ==='u'){
    alert(true);
}
else{
    alert(false);
}

//Task 5
var password = "helloworld";
var inp = prompt("enter your password");
if(inp === ""){
    alert("Please enter your password");
}
else if(inp===password){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password")
}

//Task 6
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day"; //braces wer missing
}
else{
    greeting = "Good evening";
}

//Task 7
var time = +prompt("Enter Time in 24 hr format like 1900");
if(time >= 0000 && time < 1200){
    alert("Good morning!");
}
else if( time >= 1200 && time<1700){
    alert("Good afternoon!");
}
else if( time >= 1700 && time<2100){
    alert("Good evening!");
}
else if( time >= 2100 && time<2359){
    alert("Good night!");
}

