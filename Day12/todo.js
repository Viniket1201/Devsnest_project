const task = document.getElementById("item");
const time = document.getElementById("time");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
// var todo = ["hi"];
addBtn.addEventListener("click",addItem);
todoList.addEventListener("click",deleteItem);
// function showtodo(){
//     if(!todo.length){
//         document.getElementById("todohead").innerHTML="No TODO to display..";
//         document.getElementById("todoall").innerHTML="";
//     }
//     else{
//         document.getElementById("todohead").innerHTML="YOUR TODOs";
//         let item ="";
//         todo.forEach((e)=>{
//             item+=`<div class="todo"><h2>${e}</h2><h2>${e}</h2><button class="delete">Delete</button></div>`
//         })
//         document.getElementById("todoall").innerHTML=node;
//     }
// }
// showtodo();
function addItem(e){
    e.preventDefault();
  
    let obj = {
        task : `${task.value}`,
        time : `${time.values}`
    }
    saveLocalstorage(obj);
    const div = document.createElement('div');
    div.classList.add("todo");

    const li1 = document.createElement('li');
    li1.innerText = `Task: ${task.value}`;
    li1.classList.add("todo-item");
    div.appendChild(li1);

    const li2 = document.createElement('li');
    li2.innerText = `Time: ${time.value}`;
    li2.classList.add("todo-item");
    div.appendChild(li2);

    const delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("del-btn");
    div.appendChild(delBtn);

    todoList.appendChild(div);

    // document.getElementById("list").appendChild(li);
    task.value="";
    time.value="";
    

}
function deleteItem(e){
    const target = e.target;
    if(target.classList[0]==="del-btn"){
        const item = target.parentElement;
        item.remove();
    }
}
function saveLocalstorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}