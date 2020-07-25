//Task 1
var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var sum = num1+num2;
alert("Sum of "+ num1 +" and " + num2 + " is " + sum);

//Task 2
var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var diff = num1-num2;
alert("difference of "+ num1 +" and " + num2 + " is " + diff);

var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var mult = num1*num2;
alert("multiplication of "+ num1 +" and " + num2 + " is " + mult);

var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var div = num1/num2;
alert("division of "+ num1 +" and " + num2 + " is " + div);

//Task 3
var myVariable;
document.write("Value after variable declaration is: "+ myVariable + "<br>");
var myVariable2 = 5;
document.write("Initial value: "+ myVariable2+ "<br>");
myVariable2+=1;
document.write("Value after increment is: "+ myVariable2+ "<br>");
myVariable2+=7;
document.write("Value after addition is: "+ myVariable2+ "<br>");
myVariable2-=1;
document.write("Value after decrement is: "+ myVariable2+ "<br>");
var output = myVariable2%3;
document.write("The remainder is: "+ output+ "<br>");

//Task 4
var cost = 600;
var tickets = +prompt("enter number of tickets");
var total_cost = cost*tickets;
document.write("Total cost to buy "+tickets+ " tickets to a movie is "+total_cost +"PKR"+"<br>");

//Task 5
var table = +prompt("enter any number");
for (i = 1; i<=10;i++){
    document.write(table+"x"+i+"="+table*i+"<br>");
}

//Task 6
var cel = 25;
var deg_fahr = (cel*9/5) + 32;
var fahr = 70;
var deg_cel = (fahr -32)*5/9;
document.write(cel+"°C is " + deg_fahr +"°F"+"<br>");
document.write(fahr+"°F is " + deg_cel +"°C"+"<br>");

//Task 7
var item1 = 650;
var item2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total_cost = (item1*qty1)+(item2*qty2) + shipping;

document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of item 1 is "+ item1+"<br>");
document.write("Quantity of item 1 is "+ qty1+"<br>");
document.write("Price of item 2 is "+ item2+"<br>");
document.write("Quantity of item 2 is "+ qty2+"<br>");
document.write("Shipping Charges "+ shipping+"<br><br>");
document.write("Total cost of your order is "+ total_cost+"<br>");

//Task 8
var total_marks = 980;
var obt_marks = 804;
var percent  = obt_marks/total_marks*100;
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + total_marks+"<br>");
document.write("Total marks: " + obt_marks+"<br>");
document.write("Percentage: " + percent+"<br>");

//Task 9
var usd = 10;
var sar = 25;
var usd2pkr = usd*104.80;
var sar2pkr = sar*28;
var total = usd2pkr + sar2pkr;
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currency in PKR: "+total+"<br>");

//Task 10
var num = 5;
var out = ((num+5)*10)/2;

//Task 11
var cur_yr = 2016;
var brt_yr = 1992;
var age = cur_yr-brt_yr;
document.write("<h1>Age Calculator</h1><br>");

document.write("Current Year: "+cur_yr+"<br>");
document.write("Birth Year: "+brt_yr+"<br>");
document.write("Your Age is: "+age+"<br>" );

//Task 12
var rad = 20;
var cir = 2*Math.PI*rad;
var area = Math.PI*(rad**2);
document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of a circle: "+rad+"<br>");
document.write("The circumference is: "+cir+"<br>");
document.write("The area is: "+area+"<br>");

//Task 13
var snack = "Chocolate chip";
var current_age = 20;
var est_age = 80;
var amt = 3;
var total = 3*365*(est_age-current_age);
document.write("<h1>The Lifetime Supply Calculatorr</h1><br>");
document.write("Favourite Snack: "+ snack + "<br>");
document.write("Current age: "+ current_age + "<br>");
document.write("Estimated Maximum Age: "+ est_age + "<br>");
document.write("Amount of snacks per day: "+ amt + "<br>");

document.write("You will need "+total+" "+snack+" to last you until the ripe old age of "+est_age+"<br>");
