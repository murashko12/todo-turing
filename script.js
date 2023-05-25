const addInput = document.querySelector('.addInput')
const addButton = document.querySelector('.addButton')
const todo = document.querySelector('.todo')

const deleteButton = document.querySelector('.deleteBtn')

const API = "https://jsonplaceholder.typicode.com/todos"

let todoList = []





addButton.addEventListener('click', function() {

    let newTodo = {
        id: new Date().getTime(),
        todo: addInput.value,
        checked: false
    }
    if (newTodo.todo !== ''){
        todoList.push(newTodo)
        dispalyMessages()}
    else {
        alert('try again')
    }
})

deleteButton.addEventListener('click', function() {
    todoList.filter()
})



async function dispalyMessages() {
    const res = await fetch(API)
    const currentList = await res.json()
    let dispalyMessage = ''
    todoList.forEach(function(item, index) {
        dispalyMessage += `
            <li>
                <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
                <label for='item_${index}'>${item.todo}</label>
                <div>
                    <button class="deleteBtn">DELETE</button>
                    <button class="editBtn">EDIT</button>
                </div>
            </li>
        `
        todo.innerHTML = dispalyMessage
    })
}