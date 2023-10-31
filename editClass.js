const displayClasses = document.querySelector('#available-classes');
document.addEventListener('DOMContentLoaded', () => {
    //const classListData = JSON.parse(localStorage.getItem('class-list')) || {};
    let classDataEdit = JSON.parse(localStorage.getItem("classData"));
    console.log(classDataEdit);
    for(let classCode in classDataEdit)
    {
        let li = document.createElement('li')
        li.className = 'class'
        li.textContent = classCode

        const deleteBtn = document.createElement('a')
        deleteBtn.href = '#';
        deleteBtn.textContent = 'X'
        li.appendChild(deleteBtn)

        displayClasses.appendChild(li);
    }
    const classElements = document.querySelectorAll('.class');
    Array.from(classElements).forEach(x => {
        x.addEventListener('click', () => {
            console.log(`pressed ${x.textContent}`);
        })
    })
    // for(let item in Object.values(classDataEdit['CITB558'].deadlines)){
    //     console.log(item.date);
    // });
})
