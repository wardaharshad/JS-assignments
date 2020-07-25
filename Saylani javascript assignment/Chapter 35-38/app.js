// Task 1
function dateTime(){
    time = new Date();
    return document.write(time+"<br>");
}
dateTime();

// Task 2
function greet(){
   var first = prompt("Enter First Name")+" ";
   var last = prompt("Enter Last Name");
   var fullName = first.concat(last)
   return document.write("Hello "+fullName+"<br>");
}
greet();

// Task 3
function sum(){
    var num1 = +prompt("Enter number 1");
    var num2 = +prompt("Enter number 2");
    return document.write(num1+num2+"<br>");
}
sum();

// Task 4
function calculator(num1,num2,operator){
     if(operator === "+"){
        return document.write(num1+num2+"<br>");   
    }
    if(operator === "-"){
        return document.write(num1-num2+"<br>");
    }
    if(operator === "*"){
        return document.write(num1*num2+"<br>");
    }
    if(operator === "/"){
        return document.write(num1/num2+"<br>");
    }
    if(operator === "%"){
        return document.write(num1%num2+"<br>");
    }
    else{
        return document.write("Wrong Input<br>");
    }
}
calculator(5,4,"+");
calculator(40,8,"/");
calculator(5,4,"*");

// Task 5
function square(num){
    document.write(Math.pow(num,2)+"<br>");
}
square(6);

// Task 6
function factorial(number){
    if(number === 0 || number === 1){
        return 1;
    }
    else{
        out = factorial(number-1) * number;
         return out;
    }
}

document.write(factorial(5)+"<br>");

// Task 7
function counting(){
    var start = +prompt("Enter Starting Number");
    var end = +prompt("Enter Ending Number");
    for (start;start<=end;start++){
        document.write(start+"<br>");
    }
}
counting();

// Task 8
function calculateHypotenuse(base,perp){
    function calculateSquare(n){
        return Math.pow(n,2);
    }
    return Math.sqrt(calculateSquare(base)+calculateSquare(perp));
}
document.write(calculateHypotenuse(3,4)+"<br>");

// Task 9
function area(width,height){
    return width*height;
}
document.write(area(4,5)+"<br>");
var width = 6;
var height = 5;
document.write(area(width,height)+"<br>");

// Task 10
function palindromeChecker(word){
    
    var temp= "";
    for (var j = word.length - 1; j>=0; j--){
        temp += word[j];
    } 

    if( word === temp){
        document.write(temp + " is a palindrome"+"<br>");
    }
}
palindromeChecker("madam");

// Task 11
function toTitleCase(string){
    var lower = string.toLowerCase().split(" ");
    for (var i=0;i<lower.length;i++){
        lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1); 
        // first letter capital + remaining text
    }
    return lower.join(" ");
}
document.write(toTitleCase("the quick brown fox")+"<br>");

// Task 12
function longest(string){
    var ar = string.split(" ");
    var longest = 0
    var idx = 0
    for( var i = 0;i<ar.length;i++){
        if(ar[i].length>longest){
            longest = ar[i].length;
            idx = i;
        }
    }
    return ar[idx];
}
document.write(longest("Web Development Tutorial")+"<br>");

// Task 13
function occurence(string,letter){
    var string = string.toLowerCase();
    var count = 0;
    for(var i = 0;i<string.length;i++){
        if(string[i]===letter){
        count++;
        }
}
    return count;
}
document.write(occurence("JSResourceS.com","o")+"<br>");

// Task 14
function calcCircumference(radius){
    return "The circumference is " + 2*Math.PI*radius+ "<br>"
}
function calcArea(radius){
    return "The area is " + Math.PI*Math.pow(radius,2) + "<br>"
}
document.write(calcCircumference(5));
document.write(calcArea(5));
