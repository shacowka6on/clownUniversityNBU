let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let today = new Date();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation");
const clock = document.getElementById('clock');

// setInterval(displayClock, 1000);
// function displayClock() {
//     let timeClock = new Date();
//     let minutes = timeClock.getMinutes();
//     let hours = timeClock.getHours();
//     if (minutes < 10) {
//         clock.textContent = hours + " : 0" + minutes;
//     } else {
//         clock.textContent = hours + " : " + minutes;
//     }
// }

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
        let isToday = i === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear() ? "active" : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
}

manipulate();

const allDeadlines = [];
//Loop through each class in classData
//GOT THE DEADLINES TO DO MAKE DEADLINES GLOW RED
// for (const className in classData) {
//     const classInfo = classData[className];
//     for (const deadline of classInfo.deadlines) {
//         const date = deadline.date;
//         let [deadlineYear, deadlineMonth, deadlineDay] = date.split('-');
//         console.log(`${deadlineDay} ${deadlineMonth} ${deadlineYear}`)
//         const task = deadline.task;
//         allDeadlines.push({ className, date, task });
//     }
// }
// console.log(allDeadlines);
// const getDeadlines = () =>{
    
// }

prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        
        if(new Date().getDate() !== today.getDate())
        today = new Date() 
    
    date = new Date(year, month, date.getDate()); 
    year = date.getFullYear(); 
    month = date.getMonth(); 
    manipulate()
});
});
