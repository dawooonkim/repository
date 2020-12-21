var itemList = [];
var myInput = document.querySelector("#item");
var form = document.querySelector("#form");
console.log("01. 배열이 비어있음");
console.log("itemList.length = " + itemList.length);

// 버튼 클릭시 addList 실행
var addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addList);

myInput.addEventListener('keyup', function(e){
		if(e.keyCode === 13){
			addList();
		}
	}
);

form.addEventListener('submit', function(e){
    e.preventDefault(); // submit reload 막기
});


//버튼에 마우스 클릭 했을 때 실행함
function addList(){
	var item = document.querySelector('#item').value;
	if (item != ""){
		itemList.push(item);
		console.log("02. 배열에 " + item + " 추가");
		console.log("itemList.length = " + itemList.length);
	}
	console.log("03. 현재 배열: " + itemList);
	document.querySelector('#item').value = "";
	document.querySelector('#item').focus();
	console.log("04. 리스트를 노출하는 함수 호출함");
	showList(); // value가 추가된 배열을 화면에 보여줌.
	console.log("11. 현재 itemList 배열: " + itemList);
	console.log("itemList.length = " + itemList.length);
	console.log("*** 동작 끝 ***");
}

function showList(){
	var list = "<ul>";
	console.log("05.     " + list);
	console.log("06.     리스트 요소를 시작함, 반복문을 시작함");
	for (var i = 0; i < itemList.length; i++){
		console.log("        **** 반복문 처음 ****");
		console.log("07.     반복문을 "+ itemList.length + "회 실행할 것임, 현재 " + (i+1) + "번 실행함");
		list = list + "<li>" + itemList[i] + "<span class='close' id='"+ i + "'>X</span></li>";
		console.log("08.     " + list);
		console.log("        **** 반복문 마지막 ****");
	}
	console.log("반복문이 끝남")
	list = list + "</ul>";
	console.log("09.     " + list);

	document.querySelector('#itemList').innerHTML = list;
	console.log("10.     전체 리스트를 화면에 그림");

	var remove = document.querySelectorAll('.close');
	for(var i = 0; i < remove.length; i++){
		remove[i].addEventListener('click', removeList);
	}
}

// 삭제 버튼을 눌렀을때 실행할 함수
function removeList(){

}
