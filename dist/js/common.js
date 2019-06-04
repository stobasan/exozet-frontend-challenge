/*!
 * exozet-frontend-challenge v1.0
 * Exozet frontend challenge
 * (c) 2019 Michal Stobinski
 * MIT License
 * http://link-to-your-git-repo.com
 */

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
