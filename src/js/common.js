var submitButton = document.querySelector("#submit");
var form = document.querySelector("#contact-form");

if (submitButton.addEventListener) {
    submitButton.addEventListener("click", submitHandler, false);  //Modern browsers
} else if (submitButton.attachEvent) {
    submitButton.attachEvent('onclick', submitHandler);            //Old IE
}

function submitHandler(e) {
    form.classList.add('validate');
}
