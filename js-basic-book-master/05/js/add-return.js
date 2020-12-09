function addReturn(){
    function real(){
        var trueNum = parseInt(prompt("첫번째 숫자는?"));
        if (trueNum > 0){
            return trueNum;
        } else {
            var trueNum = false;
            return trueNum;
        }
    }

    function addNumber(a, b){
        return a + b;
    }

    // trueNum을 반환하여 num1을 받아옴
    var num1 = real();
    // num1 이 제대로 입력되지 않았을때 재실행
    while (num1 === false) {
        alert("숫자를 입력해주세요.");
        var num1 = real();
        continue;
    }


    // num2를 입력받음
    var num2 = parseInt(prompt("두번째 숫자는?"));

    // num1과 num2를 더하여 보여줌
    var result = addNumber(num1, num2);
    alert("두 수의 합은" + result + "입니다");
}
