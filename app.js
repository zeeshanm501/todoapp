var input = document.getElementById('input')
var list = document.getElementById('list')
var flag = true;

function add() {
    var li = document.createElement('li');
    var litext = document.createTextNode(input.value);
    li.appendChild(litext)
    list.appendChild(li)

    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edit item ');
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)

    editbtn.setAttribute("onclick", "edit(this)")
    editbtn.className = "btn btn-primary rounded-5 text-light my-3 mx-2"

    var deletebtn = document.createElement('button')
    var deletebtntext = document.createTextNode('Delete item ');
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)

    deletebtn.setAttribute("onclick", "Delete(this)")
    deletebtn.className = "btn btn-dark rounded-5 text-light my-3 mx-2"

    input.value = "";
}
function edit(editVal) {
    var edittext = prompt("Edit value", editVal.parentNode.firstChild.nodeValue)
    editVal.parentNode.firstChild.nodeValue = edittext

}
function Delete(remValue) {
    remValue.parentNode.remove();

}
function deleteall() {
    list.remove();
}