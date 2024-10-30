const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === '') {
        alert("You Should Write Something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Cross icon code
        li.appendChild(span);

        inputBox.value = ''; // Clear input box after adding the task
        saveData();
    }
};

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData();
    }
}, false);

let saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}
let showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();