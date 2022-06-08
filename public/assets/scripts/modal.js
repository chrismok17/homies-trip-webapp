// Edit event modal
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

        window.addEventListener("click", (e) =>{
            if (e.target == form) {
                form.style.display = "none";
            };
        });
        
    });
});

// Add event modal

let add_modal = document.querySelector("#add_modal");

let add_btn = document.querySelector("#add_event");

add_btn.addEventListener("click", () => {
    add_modal.style.display = "block";
})