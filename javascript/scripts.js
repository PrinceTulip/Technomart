var link = document.querySelector(".contact-us");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form-info");
var name = popup.querySelector("[name=name-inf]");
var mail = popup.querySelector("[name=name-mail]");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
});

form.addEventListener("submit", function(event) {
    if (!name.value || !mail.value) {
        event.preventDefault();
        popup.classList.add("popup-error");
    } else {
        localStorage.setItem("contact-us", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
        }
    }
});
