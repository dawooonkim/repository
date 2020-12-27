var myText = document.querySelector("#myText");
myText.addEventListener("click", change);
function change(){
    this.style.fontSize = "20px";
    this.style.color = "blue";
    this.style.backgroundColor = "#ccc";
}
