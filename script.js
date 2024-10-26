const bgColorSelect = document.getElementById('bg-color');
const fontSizeInput = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const fontStyleSelect = document.getElementById('font-style');
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

bgColorSelect.addEventListener('change', () => {
    document.body.style.backgroundColor = bgColorSelect.value;
});

fontSizeInput.addEventListener('input', () => {
    document.body.style.fontSize = fontSizeInput.value + 'px';
    fontSizeValue.textContent = fontSizeInput.value + 'px';
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

fontStyleSelect.addEventListener('change', () => {
    document.body.style.fontFamily = fontStyleSelect.value;
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = ""; 
    } else {
        alert("masukin dulu task nya bang.");
    }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); 
    }
});
