//Task 1
var a = 10;
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br>");
document.write("***************************"+ "<br><br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of ++a is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

//Task 2
var a = 2, b = 1;
document.write("a is" + a+ "<br>");
document.write("b is" + b+ "<br>");
var result = --a - --b + ++b + b--;
document.write("result is" + result+ "<br>");
// explanation: 
//at stage --a; a has value 1 as 1 has been subtracted so result is 1
//at --a - --b; a has value 1 and b has value 0 so result is 1
//at --a - --b + ++b; a has value 1 and b is 1 after ++b so reult is 2
// final result is 3

//Task 3
var name = prompt("Enter your name");
alert("welcome "+name);

//Task 4 
// not mentioned

//Task 5
var table = +prompt("enter any number","5");
for (i = 1; i<=10;i++){
    document.write(table+"x"+i+"="+table*i+"<br>");
}

//Task 6
var sub1 = prompt("Enter Subject 1 Name");
var sub2 = prompt("Enter Subject 2 Name");
var sub3 = prompt("Enter Subject 3 Name");
var total_marks = 100;
var sub1_marks = +prompt("Enter Subject 1 Marks");
var sub2_marks = +prompt("Enter Subject 2 Marks");
var sub3_marks = +prompt("Enter Subject 3 Marks");
var percent1 = (sub1_marks/total_marks)*100;
var percent2 = (sub2_marks/total_marks)*100;
var percent3 = (sub3_marks/total_marks)*100;
var tot_percent = (percent1+percent2+percent3)/3;
var tot_sub_marks =  sub1_marks+ sub2_marks+ sub3_marks
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+total_marks+"</td><td>"+sub1_marks+"</td><td>"+percent1+"%"+"</td></tr><tr><td>"+sub2+"</td><td>"+total_marks+"</td><td>"+sub2_marks+"</td><td>"+percent2+"%"+"</td></tr><tr><td>"+sub3+"</td><td>"+total_marks+"</td><td>"+sub3_marks+"</td><td>"+percent3+"%"+"</td></tr><tr><td></td><td>"+total_marks*3+"</td><td>"+tot_sub_marks+"</td><td>"+tot_percent+"</td></tr></table>")
