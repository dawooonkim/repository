function newRegister(){
    var newP = document.createElement("p"); // 새 p 요소 만들기
    var userName = document.querySelector("#userName"); // 입력한 내용 가져옴
    var newText = document.createTextNode(userName.value); // 입력한 내용을 newText에 저장
    newP.appendChild(newText); // newText 노드를 newP 노드의 자식으로 연결

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);
    var nameList = document.querySelector("#nameList"); // #nameList 가져옴
    nameList.insertBefore(newP, nameList.childNodes[0]);
    //nameList.appendChild(newP);
    userName.value = "";
    var removeBttns = document.querySelectorAll(".del");
    for(var i = 0; i<removeBttns.length; i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}
