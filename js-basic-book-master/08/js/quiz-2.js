var check = document.querySelectorAll(".check");
var isDone = false;
for(var i = 0; i<check.length; i++){
    check[i].addEventListener("click", function(){
        if(isDone === false){
            this.parentNode.style.color = "#ccc";
            isDone = true;
        } else {
            this.parentNode.style.color = "black";
            isDone = false;
        }
    })
}
