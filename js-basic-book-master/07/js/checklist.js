
var itemList = [];
var addBtn = document.querySelector("#add");
var myInput = document.querySelector("#item");
var form = document.querySelector("#form");

addBtn.addEventListener("click", addList);
myInput.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        addList(); // enter key 입력시 버튼 클릭과 동일하게 동작
    }
});
form.addEventListener("submit", function(e){
    e.preventDefault(); // submit reload 막기
});


function addList(){
    var item = document.querySelector('#item').value;
    if(item != "") {
        itemList.push(item);
        document.querySelector('#item').value = "";
        document.querySelector('#item').focus();
    }
    showList();
}

function showList() {
    var list = "<ul>";
    for (var i = 0; i < itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";
    document.querySelector('#itemList').innerHTML = list;
    var remove = document.querySelectorAll('.close');
    for(var i = 0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
