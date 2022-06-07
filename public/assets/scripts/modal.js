let modal = document.querySelector("#form_modal");

let btn = document.querySelector("#edit");

let span = document.querySelectorAll(".close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    };
};