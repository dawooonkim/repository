var btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    register();
    e.preventDefault;
});
var userName = document.querySelector('#userName');
var nameList = document.querySelector('#nameList');
function register(){
    var removeBttns = document.createElement("span");
    var del = document.createTextNode("X");
    removeBttns.setAttribute("class", "del");
    removeBttns.appendChild(del);
    var newP = document.createElement("p");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);
    newP.appendChild(removeBttns);
    nameList.insertBefore(newP, nameList.childNodes[0]);
    var delBttns = document.querySelectorAll(".del")
    for(var i = 0; i<delBttns.length; i++){
        delBttns[i].addEventListener("click", function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
        })
    }
    userName.value = "";
}
