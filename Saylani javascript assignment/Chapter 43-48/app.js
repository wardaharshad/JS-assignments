// Task 1 See HTML

// Task 2 See HTML

// Task 3 Also see HTML
// function rowDelete(rowIndex){
//     document.getElementById("table").deleteRow(rowIndex);
// }
function rowDelete(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

// Task 4 Also See HTML
function image1(){
    var image = document.getElementById('img');
    image.src = "1.jpg";
}
function image2(){
    var image = document.getElementById('img');
    image.src = "2.jpg";
}
// Task 5 Also See HTML
var value = document.getElementById("count");
function increase(){
    value.innerHTML = +value.innerHTML + 1;
}
function decrease(){
    value.innerHTML -=1;
}