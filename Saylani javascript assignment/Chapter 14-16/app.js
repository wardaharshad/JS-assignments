// Task 1
var arr = [];

//Task 2
var obj = {};

//Task 3
var str_array = new Array("Hello", "World");

//Task 4
var int_array = new Array(1,2,3,4,5);

//Task 5
var bool_array = new Array(true, false,1, 0);

//Task 6
var mix_array = new Array("String",4 ,2, true);

//Task 7
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications<br>");
for(var i = 0; i <edu.length;i++){
    document.write(i+1+") "+edu[i]+"<br>");
}

//Task 8
var student_name = ["Michael","John","Tony"];
var student_marks = [320,230,480];
for(var a = 0; a<student_name.length;a++){
    document.write("Score of "+ student_name[a] +" is " + student_marks[a] + ". Percentage: " + student_marks[a]/500*100 +"%<br>");
}

//Task 9
var color = ["Red","Green","Blue"];
alert(color );
var add = prompt("Which color you want to add to the begining");
color.unshift(add);
alert(color );
var add = prompt("Which color you want to add to the end");
color.push(add);
alert(color );
color.unshift("Green","Pink");
alert(color );
color.shift();
alert(color );
color.pop();
alert(color );
var ind = +prompt("Enter the index where you want to add the color");
var col = prompt("Enter color Name");
color.splice(ind-1,0,col);
alert(color );
var ind_del = +prompt("Enter the index of color you want to delete");
var ind_del_n = +prompt("how many colors you want to delete");

color.splice(ind_del-1,ind_del_n);
alert(color );

//Task 10
var student_scores = [320,230,480,120];
document.write("Score of Students : "+student_scores+"<br>");
document.write("Ordered Score of Students : "+student_scores.sort()+"<br>");

//Task 11
var cities  = ["Karachi", "Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(2,4);
document.write("Cities List : <br>"+cities+"<br><br>");
document.write("Selected cities list : <br> "+selectedCities+"<br>");

//Task 12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array : <br>"+arr+"<br><br>");
var joined  = arr.join()
joined = joined.replace(/,/g, "")
document.write("String : <br>"+ joined +"<br><br>");

//Task 13
var array = [];
array.push("keyboard");
array.push("mouse");
array.push("printer");
array.push("monitor");
document.write("Devices: <br>");
document.write(array+"<br><br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");
document.write("Out: <br>"+array.shift()+"<br>");


//Task 14
var array = [];
array.push("keyboard");
array.push("mouse");
array.push("printer");
array.push("monitor");
document.write("Devices: <br>");
document.write(array+"<br><br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");
document.write("Out: <br>"+array.pop()+"<br>");

//Task 15
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select><option>"+phone[0]+"</option><option>"+phone[1]+"</option><option>"+phone[2]+"</option><option>"+phone[3]+"</option><option>"+phone[4]+"</option><option>"+phone[5]+"</option></select>")