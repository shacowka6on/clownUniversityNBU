document.addEventListener('DOMContentLoaded', function(){
    const addBtn = document.querySelector('#submit-btn');
    addBtn.addEventListener('click', function(e){
        const classCode = document.getElementById("classCode").value;
        const className = document.getElementById("className").value; 
        if((classCode == null || classCode.trim() == '') || (className == null || className.trim() == '')) {
            return;
        }
        const newClass = {
            name: className,
            description: '',
            deadlines: []
        }
        const exisintclassData = JSON.parse(localStorage.getItem('classDataRetrieve')) || {};
        exisintclassData[classCode] = newClass;
        localStorage.setItem('classDataRetrieve', JSON.stringify(exisintclassData));

        window.location.href = 'index.html'
    })
})