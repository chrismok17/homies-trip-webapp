const calendar = document.getElementById("calendar-days")
const calendar_head = document.getElementById("calendar-header")
calendar.insertAdjacentHTML("beforeend", `<div class="empty"></div>`)
for (let day = 1; day <= 31; day++) {
    
    
    const dayname = new Date(Date.UTC(2022, 7, day))
    const new_day = Intl.DateTimeFormat("en-US", { weekday: "short"}).format(dayname)
    let name = "";
    if (day <= 7) {
        name = `<div class="name">${new_day}</div>`;
        calendar_head.insertAdjacentHTML("beforeend", name)
    }

    calendar.insertAdjacentHTML("beforeend", `<div class="day" id="${day}">
        <div class="daynumber">${day}</div>
        </div>`)
}
calendar.insertAdjacentHTML("beforeend", `<div class="empty"></div>`)
calendar.insertAdjacentHTML("beforeend", `<div class="empty"></div>`)
calendar.insertAdjacentHTML("beforeend", `<div class="empty"></div>`)

document.querySelectorAll("#calendar-day .day").forEach(day => {
    day.addEventListener("click", e => {
        e.currentTarget.classList.add("selected");
    })
})