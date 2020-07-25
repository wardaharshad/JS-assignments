// Task 1
var firstName = prompt("Write your First Name");
var lastName = prompt("Write your Last Name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// Task 2
var phone = prompt("Enter your Favorite Mobile Phone Model");
document.write("My favorite phone is: "+ phone+"<br>");
var len = phone.length;
document.write("Length of string: "+ len+"<br>");

// Task 3
var str = "Pakistani";
document.write("String: "+ str +"<br>");
var ind = str.indexOf('n')
document.write("Index of 'n': "+ ind+"<br>");

// Task 4
var str2 = "Hello World";
document.write("String: "+ str2 +"<br>");
var ind2 = str2.lastIndexOf('l')
document.write("Last Index of 'l': "+ ind2 +"<br>");

// Task 5
var str3 = "Pakistani";
document.write("String: "+ str3 +"<br>");
var ind_char = str3.charAt(3)
document.write("Character at index 3: "+ ind_char +"<br>");

// Task 6
var firstName = prompt("Write your First Name");
var lastName = prompt("Write your Last Name");
var fullName = firstName.concat(lastName);
alert("Hello " + fullName);

// Task 7
var city1 ="Hyderabad";
var city2 = city1.replace("Hyder","Islam");
document.write("City: "+ city1 +"<br>");
document.write("After replacement: "+ city2 +"<br>");

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Message: "+ message +"<br>");
document.write("New Message: " + newMessage +"<br>");

// Task 9
var val_str = "472"
document.write("Value: "+ val_str +"<br>");
document.write("Type: "+ typeof(val_str) +"<br>");
var val_int = parseInt(val_str);
document.write("Value: "+ val_int +"<br>");
document.write("Type: "+ typeof(val_int) +"<br>");

// Task 10
var inp = prompt("Enter any Word");
document.write("User input: "+ inp+"<br>");
var caps = inp.toUpperCase();
document.write("Upper case: "+ caps +"<br>");

// Task 11
function toTitleCase(string){
    var lower = string.toLowerCase().split(" ");
    for (var i=0;i<lower.length;i++){
        lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1); 
        // first letter capital + remaining text
    }
    return lower.join(" ");
}
var inp2 = prompt("Enter any Word");
document.write("User input: "+ inp2 +"<br>");
var title = toTitleCase(inp2);
document.write("Title case: "+ title +"<br>");

// Task 12
var num = 35.36;
var str = num.toString()
var result = str.replace(".","");
document.write("Number: "+ num +"<br>");
document.write("Result: "+ result +"<br>");

// Task 13
var userName = prompt("Enter your User Name:");
var chars = ["@",".",",","!"];
for(var i=0;i<userName.length;i++){
    if(chars.includes(userName[i])){
        alert("Please Enter a valid username");
    }
}

// Task 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i = 0; i<A.length;i++){
    if( A.includes(item.toLowerCase())){
        document.write(item+" is <strong>available</strong> at index "+ A.indexOf(item.toLowerCase())+ " in our bakery")
    break;
    }
    else{
        document.write("We are sorry. "+item+" is <strong>not available</strong> in our bakery")
        break;
    }
}

// Task 14
var password = prompt("Enter your Password:");
var number, upper, lower,first,length = false;
for(var i=0;i<password.length;i++){
    ascii = password.charCodeAt(i)
    
    if(ascii > 47 && ascii < 58){
        number = true;
    }
    if(ascii > 64 && ascii < 91){
        upper = true;
    }
    if(ascii > 96 && ascii <123){
        lower = true;
    }
    if(password.charCodeAt(0)>47 && password.charCodeAt(0)<58){
        first = true;
    }
    if(password.length <6){
        length = true;
    }
}
document.write("Entered password: "+ password + "<br>");
if(!(number && (upper || lower))){
    document.write("Password should contain alphabets and numbers"+ "<br>");
}
if(first){
    document.write("Password can not begin with a number"+ "<br>");
}
if(length){
    document.write("Password must be at least 6 charachters long"+ "<br>");
}
if(!(number && (upper || lower))||first||length){
    document.write("Please enter a valid password"+ "<br>");

}

// Task 16
var university = "University of Karachi";
var array = university.split("");
for(var i = 0; i<array.length;i++){
    document.write(array[i]+ "<br>");
}

// Task 17
var userinput = prompt("Enter any word");
document.write("User input: "+ userinput +"<br>");
document.write("Last character of input: "+ userinput[userinput.length-1] +"<br>");

// Task 18
var sentence = "The quick brown fox jumps over the lazy dog"
var l_sentence = sentence.toLowerCase();
var arr = l_sentence.split(" ");
var count = 0;
for(var i = 0;i<arr.length;i++){
    if(arr[i]==="the"){
    count++;
    }
}
document.write("Text: "+ sentence +"<br>");
document.write("There are "+ count +" occurence(s) of the word 'the'"+"<br>");
