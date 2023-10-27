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
            { date: "2023-11-02", task: "Задачи 5,6 Макс точки до: (2023-11-09)" },
            { date: "2023-11-09", task: "Задачи 7,8 Макс точки до: (2023-11-09)" },
            { date: "2023-11-16", task: "НЯМА ЗАНЯТИЕ!!!" },
            { date: "2023-11-18", task: "Състезание 2 13:00-18:00 702II" },
            { date: "2023-11-23", task: "Задачи 9,10 Макс точки до: (2023-11-30)" },
            { date: "2023-11-30", task: "Задачи 11,12 Макс точки до: (2023-12-14)" },
            { date: "2023-12-07", task: "НЯМА ЗАНЯТИЕ!!!" },
            { date: "2023-12-14", task: "НЯМА ЗАНЯТИЕ!!!" },
            { date: "2023-12-21", task: "Задачи 13,14 Макс точки до: (2024-01-04)" },
            { date: "2024-01-04", task: "Задачи 15,16 Макс точки до: (2024-01-11)" },
            { date: "2024-01-06", task: "Състезание 3 13:00-18:00 702II" },
            { date: "2024-01-11", task: "Подготовка за тест" },
            { date: "2024-01-18", task: "Тест" },
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
