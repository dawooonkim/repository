var userId = document.querySelector('#user-id');
var pw1 = document.querySelector('#user-pw1');
var pw2 = document.querySelector('#user-pw2');

userId.addEventListener("change", checkId);
function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("글자수를 확인해주세요.");
        userId.select();
    }
}
pw1.addEventListener("change", checkPw);
function checkPw(){
    if(pw1.value.length < 8){
        alert("글자수를 확인");
        pw1.value = "";
        pw1.focus();
    }
}
pw2.addEventListener("change", function(){
    if(pw2.value != pw1.value){
        alert("비밀번호가 다릅니다.")
        pw2.value = "";
        pw2.focus();
    }
})
