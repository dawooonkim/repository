function newRegister(){
    var newP = document.createElement("p"); // 새 p 요소 만들기
    var userName = document.querySelector("#userName"); // 입력한 내용 가져옴
    var newText = document.createTextNode(userName.value); // 입력한 내용을 newText에 저장
    newP.appendChild(newText); // newText 노드를 newP 노드의 자식으로 연결
    var nameList = document.querySelector("#nameList"); // #nameList 가져옴
    nameList.appendChild(newP);
    userName.value = "";
}
