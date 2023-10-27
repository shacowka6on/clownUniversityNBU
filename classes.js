
const classData = {
    "CITB302": {
        name: "Операционни системи",
        description: "https://e-edu.nbu.bg/course/view.php?id=21034",
        deadlines: [
            { date: "2023-10-31", task: "Assignment 1" },
            { date: "2023-11-15", task: "Assignment 2" },
        ]
    },
    "CITB308":{
        name: "Стукрури от данни",
        description: "https://e-edu.nbu.bg/course/view.php?id=31577",
        deadlines:[
            { date: "2023-10-15", task: "Assigment A"},
            { date: "2023-10-15", task: "Assigment B"}
        ]
    },
    "CITB558":{ 
        name: "Web-програмиране c HTML и JavaScript", 
        description: "https://e-edu.nbu.bg/course/view.php?id=25710", 
        deadlines: [ 
            {date: "2023-10-10", task:"Assigment N"},
            {date: "2023-10-10", task:"Assigment N"} 
        ]
    },
    "CSCB324": {
        name: "Състезателно програмиране - I част",
        description: "https://e-edu.nbu.bg/course/view.php?id=31576",
        deadlines: [
            { date: "2023-10-31", task: "Assignment 1" },
            { date: "2023-11-15", task: "Assignment 2" },
        ]
    },
    "GENB002B":{
        name: "Статистика",
        description: "https://e-edu.nbu.bg/course/view.php?id=13958",
        deadlines:[
            { date: "2023-10-15", task: "Assigment A"},
            { date: "2023-10-15", task: "Assigment B"}
        ]
    },
    "GENB004B":{ 
        name: "Електроника", 
        description: "https://e-edu.nbu.bg/course/view.php?id=23442", 
        deadlines: [ 
            {date: "2023-10-10", task:"Assigment N"},
            {date: "2023-10-10", task:"Assigment X"} 
        ]
    },
    "OOOK280":{
        name:"Киберсигурност на мрежите",
        description: "https://e-edu.nbu.bg/course/view.php?id=37955",
        deadlines:[
            {date: "2023-10-10", task:"Assigment N"},
            {date: "2023-10-10", task:"Assigment Z"} 
        ]
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const classList = document.getElementById("class-list");
    const classDetails = document.getElementById("class-details");
    let classDetailsHeader = document.querySelector('h1');
    const classItems = classList.getElementsByClassName("class");
    //const classLink = document.getElementById('class-link');
    
    
    for (let i = 0; i < classItems.length; i++) {
        classItems[i].addEventListener("click", function() {
            const selectedClass = this.textContent;
            const currentClass = selectedClass.split(' ')[0];
    
            classDetailsHeader.textContent = selectedClass;
            const classInfo = classData[currentClass];
            if (classInfo) {
                classDetails.innerHTML = `<a href='${classInfo.description}'>Moodle link: ${currentClass}</a>`;
    
                let deadlinesList = "<h2>Deadlines</h2><ul>";
                classInfo.deadlines.forEach((deadline) => {
                    deadlinesList += `<li>${deadline.date}: ${deadline.task}</li>`;
                });
                deadlinesList += "</ul>";
                classDetails.innerHTML += deadlinesList;
            }
        });
    }
});
