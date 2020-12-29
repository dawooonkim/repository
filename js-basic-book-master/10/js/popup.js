function openPop() {
    var newWin = window.open("popup.html", " ", "width=400, height=400");
    if(newWin == null){
        alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요.")
    }
}
window.onload = openPop;
