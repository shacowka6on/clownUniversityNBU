let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation");
const clock = document.getElementById('clock');

setInterval(displayClock, 1000);
function displayClock(){
    let timeClock = new Date();
    let minutes = timeClock.getMinutes();
    let hours = timeClock.getHours();
    if(minutes < 10){
        clock.textContent = hours + " : 0" + minutes;
    }else{
        clock.textContent = hours + " : " + minutes;
    }
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to generate the calendar
const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay(); 

    dayone = (dayone - 1 + 7) % 7;

    let lastdate = new Date(year, month + 1, 0).getDate();
    let lit = "";

    for (let i = 0; i < dayone; i++) {
        lit += `<li class="inactive"></li>`; 
    }

    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate() && month === date.getMonth() && year === date.getFullYear() ? "active" : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
}

manipulate();

prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, date.getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }
        manipulate();
    });
});
