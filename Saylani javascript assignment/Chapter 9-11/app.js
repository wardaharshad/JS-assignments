//Task 1
var city = prompt("Enter city Name");
if(city === ("karachi")){
    alert("Welcome to the city of lights");
}
else{
    alert("Welcome to " + city);
}

//Task 2
var gender = prompt("Enter your Gender");
if(gender === "male"){
    alert("Good Morning Sir");
}
if(gender === "female"){
    alert("Good Morning Ma'am");
}

//Task 3
var signalColor = prompt("Enter Signal Color");
if(signalColor == "red"){
    alert("Must Stop");
}
if(signalColor == "yellow"){
    alert("Ready to move");
}
if(signalColor == "green"){
    alert("Move now");
}

//Task 4
var fuel = prompt("Enter remaining Fuel in car(in litres)");
if (+fuel < 0.25){
    alert("Please refill the fuel in your car")
}  

//Task 5

var a = 4; 
if (++a === 5){
     alert("given condition for variable a is true");  // alert diplayed
}

/////////////////////////

var b = 82;
 if (b++ === 83){
      alert("given condition for variable b is true");  //alert not displayed
     }

////////////////////////

var c = 12;
if (c++ === 13){
      alert("condition 1 is true");   //alert not displayed
} 
if (c === 13){
     alert("condition 2 is true");    // alert displayed
} 
if (++c < 14){
     alert("condition 3 is true");   //alert not displayed
 }
if(c === 14){
     alert("condition 4 is true");   // alert displayed
}

/////////////////////////

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){   
    alert("The cost equals");            // alert diplayed
}

/////////////////////////
if (true){
    alert("True");    // alert diplayed
}                                     
if (false){
    alert("False");
}

//////////////////////////

if("car" < "cat"){
    alert("car is smaller than cat");     // alert diplayed
}

//Task 6
var marks1 = +prompt("Enter your subjetc1 marks");
var marks2 = +prompt("Enter your subjetc2 marks");
var marks3 = +prompt("Enter your subjetc3 marks");
var marks_total = +prompt("Enter your total marks");
var marks_obt = marks1 + marks2 +marks3;
var grade;
var remarks;
var percentage = (marks_obt/marks_total)*100;
if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else if(percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Mark Sheet</h1><br>");
document.write("Total marks : " + marks_total+"<br>");
document.write("Marks obtained : " + marks_obt+"<br>");
document.write("Percentage : " + percentage+"<br>");
document.write("Grade : " + grade+"<br>");
document.write("Remarks : " + remarks+"<br>");

//Task 7
var sec_num = 7;
var guess = +prompt("Guess the Number");
if(guess === sec_num){
    alert("Bingo! Correct answer");
}
if ((guess + 1) === sec_num){
    alert("Close enough to the correct answer");
}

//Task 8
var number = +prompt("Enter a number");
if (number%3 == 0){
    alert("Given number is divisible by 3");
}
//Task 9
var numb = +prompt("Enter a number");
if (numb%2 == 0){
    alert("Given number is Even");
}
else{
    alert("Given number is Odd");
}

//Task 10
var temp = +prompt("Enter Temperature");
if(temp > 40){
    alert("It is too hot outside.");
}
else if(temp > 30){
    alert("The Weather today is Normal.");
}
else if(temp > 20){
    alert("Today’s Weather is cool.");
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}

//Task 11
var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var operator = prompt("Enter Operator");
if(operator === "+"){
    alert(num1+num2);
}
if(operator === "-"){
    alert(num1-num2);
}
if(operator === "*"){
    alert(num1*num2);
}
if(operator === "/"){
    alert(num1/num2);
}
if(operator === "%"){
    alert(num1%num2);
}







