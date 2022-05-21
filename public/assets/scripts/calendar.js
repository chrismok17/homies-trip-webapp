// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectYear = document.getElementById("year");
// let selectMonth = document.getElementById("month");

// months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// monthAndYear = document.getElementById("monthAndYear");
// showCalendar(currentMonth, currentYear);

// function showCalendar(month, year) {
//     let first_day = new Date(year, month).getDay();
//     let table = document.getElementById("calendar-days");
//     table.innerHTML = "";

//     monthAndYear.innerHTML = months[month] + " " + year;
//     selectYear.value = year;
//     selectMonth.value = month;

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         let row = document.createElement("tr");

//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < first_day) {
//                 let day = document.createElement("td");
//                 let day_data = document.createTextNode("");
//                 day.appendChild(day_data);
//                 row.appendChild(day)
//             } else if (date > daysInMonth(month, year)){
//                 break;
//             } else {
//                 let day = document.createElement("td");
//                 let day_data = document.createTextNode(date);
//                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
//                     row.classList.add("bg-info")
//                 }
//                 day.appendChild(day_data)
//                 row.appendChild(day)
//                 day++
//             }
//         } 
//         table.appendChild(row)
//     }
// }

// function daysInMonth(iMonth, iYear) {
//     return 32 - new Date(iYear, iMonth, 32).getDate();
// }


// let month = new Date(2022, 7).toDateString();
// let header = document.getElementById("monthAndYear");
// header.textContent = month;
// console.log(month)

const calendar = document.getElementById("calendar-days")

for (let day = 1; day <= 31; day++) {
    console.log(day)
    const dayname = new Date(Date.UTC(2022, 7, day))
    const new_day = Intl.DateTimeFormat("en-US", { weekday: "short"}).format(dayname)
    let name = "";
    if (day <= 7) {
        name = `<div class="name">${new_day}</div>`;
    }

    calendar.insertAdjacentHTML("beforeend", `<div class="day">${name}${day}</div>`)
}

document.querySelectorAll("#calendar-day .day").forEach(day => {
    day.addEventListener("click", e => {
        e.currentTarget.classList.add("selected");
    })
})