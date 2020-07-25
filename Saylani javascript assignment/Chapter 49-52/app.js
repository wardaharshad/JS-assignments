// Task 1 Also see HTML file named index.html
function displayData(){
document.getElementById("email").innerHTML = "Email : " + document.getElementById("inputEmail").value;
document.getElementById("password").innerHTML = "Password : " + document.getElementById("inputPassword").value;
document.getElementById("fname").innerHTML = "First Name : " + document.getElementById("firstName").value;
document.getElementById("lname").innerHTML = "Last Name : " + document.getElementById("lastName").value;
document.getElementById("country").innerHTML = "Country : " + document.getElementById("inputCountry").value;
document.getElementById("city").innerHTML = "City : " + document.getElementById("inputCity").value;
document.getElementById("province").innerHTML = "Province : " + document.getElementById("inputProvince").value;

}

// Task 2 Also see HTML file named task2.html
function readMore(){
    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing Non labore distinctio reprehenderit, nobis nesciunt velit,magnam repellat ad soluta maiores minima eligendi fugit voluptate ut ipsam. Cum expedita alias eos!";
    var paragraph  = document.getElementById("para");
    paragraph.innerHTML = text;
}

// Task 3 Also see HTML file named task3.html

function addStudent(){
    var tableBody = document.getElementById("tableBody");
    var Name = document.getElementById("Name").value;
    var Class = document.getElementById("Class").value;
    //var rowCount = document.getElementById('dataTable').rows.length; row count makes same index row if last is deleted
    var ind = + tableBody.lastElementChild.firstElementChild.innerHTML + 1;
    if(Name !="" || Class !=""){
        tableBody.innerHTML += "<tr><th scope='row'>"+ind+"</th> <td>"+Name+"</td><td>"+Class+"</td><td><button type='button' class='btn btn-warning' onclick = 'editform(this)' >Edit</button></td><td><button type='button' class='btn btn-danger' onclick = 'rowDelete(this)'>Delete</button></td></tr>";

    }
    else{
        alert("Input Field is empty");
    }
    document.getElementById("Name").value = "";
    document.getElementById("Class").value = "";
}
function rowDelete(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dataTable").deleteRow(i);
}
var idx;
function editform(r){
    $('#ModalEdit').modal('show');
    idx = r.parentNode.parentNode.rowIndex;
    var editTable = document.getElementById('dataTable');
    var editCells = editTable.rows.item(idx).cells;
    var cellName = editCells.item(1).innerHTML;
    var cellClass = editCells.item(2).innerHTML;
    document.getElementById("editName").value = cellName;
    document.getElementById("editClass").value = cellClass;
}
function edit(idx){
    var repName = document.getElementById("editName").value;
    var repClass = document.getElementById("editClass").value;
    var t = document.getElementById('dataTable');
    t.rows.item(idx).cells.item(1).innerHTML = repName;
    t.rows.item(idx).cells.item(2).innerHTML = repClass;
    

}
function reset(){

}