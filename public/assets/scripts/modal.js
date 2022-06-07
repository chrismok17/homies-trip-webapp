let modal = document.querySelectorAll(".modal");

let btn = document.querySelectorAll("#edit");

let span = document.querySelectorAll(".close");


modal.forEach((form, i) => {
    btn.forEach((button, j) => {
        if (i == j) {
            button.addEventListener("click", () => {
            form.style.display = "block";
            }); 
        };

        span.forEach((x) => {
            x.addEventListener("click", () => {
                form.style.display = "none";
            });
        });
        
    });
});

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    };
};