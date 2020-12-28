var total = document.querySelector('#total');
var menu = document.querySelectorAll('.checkbx');
total.value = 24000;

for(var i = 0; i < menu.length; i++){
    menu[i].addEventListener("click", function(){
        if(this.checked === true){
            total.value = parseInt(total.value) + parseInt(this.value);
        } else {
            total.value = parseInt(total.value) - parseInt(this.value);
        }
    })
}
