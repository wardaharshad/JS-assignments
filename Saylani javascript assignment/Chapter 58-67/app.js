// Task 1
var main =  document.getElementById("main-content");
for(var x=0;x<main.children.length;x++){
    document.write(main.children[x].innerHTML);
}
var render =  document.getElementsByClassName("render");
for(var y=0;y<render.length;y++){
    document.write(render[y].innerHTML);
}

document.getElementById("first-name").value = "Abdullah"
document.getElementById("last-name").value = "Arshad"
document.getElementById("email").value = "abc@gmail.com"

// Task 2
var form = document.getElementById("form-content");
if(form.nodeType === 1){
    document.write("<br> nodeType of form-content is 1 which means tags like div or p");
}
else if(form.nodeType === 3){
    document.write("<br> nodeType of form-content is 3 which means text");

}
var lname = document.getElementById("lastName");
if(lname.nodeType === 1){
    document.write("<br> nodeType of lastName is 1 which means tags like div or p");
}
else if(lname.nodeType === 3){
    document.write("<br> nodeType of lastName is 3 which means text");
}
for(var z=0;z<lname.children.length;z++){
    document.write(lname.children[x].innerHTML); 
}
// no child nodes 
var fChild = main.firstChild;
var lChile = main.lastChild;
var nextSiblings = lname.nextSibling;
var previousSiblings = lname.previousSibling;

var email = document.getElementById("email");
var emailParentNode  = email.parentNode;
var nodeTypeEmail = email.nodeType;