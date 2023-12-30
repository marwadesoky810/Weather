var btn = document.querySelector("form input[type=submit]");
var inputs = document.querySelectorAll(".contact-form input:not([type=submit]), .contact-form textarea");
console.log(inputs);

function clearAll() {
   for (var i = 0; i < inputs.length;i++) {
    inputs[i].value='';
}
}

btn.addEventListener("click", function(){
   clearAll();
});