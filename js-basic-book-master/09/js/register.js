var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");
userId.addEventListener("change", checkId);
function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select();
    }
}
//pw1의 글자수 확인
pw1.addEventListener("change", checkPw);
function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호 8자리 이상 입력해주세요.");
        pw1.value = "";
        pw1.focus();
    };
}
//pw2의 값이 1과 동일한지 확인
pw2.addEventListener("change", comparePw);
function comparePw(){
    if(pw2.value != pw1.value){
        alert("비밀번호가 다릅니다. 다시 입력해주세요.");
        pw2.value = "";
        pw2.focus();
    }
}
