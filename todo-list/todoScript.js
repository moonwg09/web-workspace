// 할일 목록 저장하는 배열

let todos = []
let todoId = 0

const addTodo = function() {  // 버튼 눌렀을 때
    // 할일
    let todoInput = document.getElementById('todoInput')
    let text = todoInput.value

    // category
    let category = document.getElementById("category")

    // 중요도
    let priority = document.getElementById("priority")

    // 날짜
    let date = document.getElementById("date")

    if(text === ''){
        alert("할 일을 입력해주세요!!")
        todoInput.focus()
        return
    }

    let todo = {
        id: ++todoId,
        //id: new Date(),
        text:text,
        category:category.value,
        priority:priority.value,
        date:date.value,
        completed: false
    }
    todos.push(todo)

    // 입력폼 clear
    todoInput.value = ''
    category.value = ''
    priority.value = ''

    // <div id="todolist"> todolist 내용으로 업데이트(render)
    renderTodos()
}


const togleTodo = function(id){
    todos = todos.map(function(todo) {
        if(todo.id == id)
            todo.completed = !todo.completed  // true면 false로 바꿔준다
        return todo
    })

    renderTodos()
}

const updateTodo = function(id){
    todos = todos.map(function(todo) {
        if(todo.id == id)
            todoInput.value = todo.text
            category.value = todo.category
            priority.value = todo.priority
            date.value = todo.date
        return todo
    })

}

const deleteTodo = function(id){
    const idToDelete = id;
    todos = todos.filter(todo => todo.id !== idToDelete);

    renderTodos()
}

const updateComplete = function(id){
    
    todos = todos.map(function(todo) {
        if(todo.id == id)
            todo.text = todoInput.value
            todo.category = category.value
            todo.priority = priority.value
            todo.date = date.value
        return todo
    })

    todoInput.value = ''
    category.value = ''
    priority.value = ''

    renderTodos()

}



const renderTodos = function() {

    const todoList = document.getElementById('todolist')
    let priority = document.getElementById('priority')
    
    let filterTodos = [...todos] // 복사

    // 진행중 ...
    filterTodos = filterTodos.filter(function(todo){
        return todo.completed == true
    })

    todoList.innerHTML = ''
    todos.forEach(function(todo) {
        const liTag = document.createElement('li')
        const colorArr = ['border-danger', 'border-success', 'border-warning']
        const priorityArr = ['높음', '보통', '낮음']
        liTag.classList.add('list-group-item')
        liTag.classList.add('border')
        for (let i in priorityArr){
            if(todo.priority == priorityArr[i]){
                liTag.classList.add(colorArr[i])
                break
            }
        }
        // class='complete' 추가
        if(todo.completed){
            liTag.classList.add('complete')
        }

        // todo만든 날짜를 따로 기억(regdate)
        const text = `<h3>${todo.text}</h3>
        <p>카테고리 : ${todo.category}</p>
        <p>우선순위 : ${todo.priority}</p>
        <p>마감일 : ${todo.date}</p>
        <button onclick='togleTodo(${todo.id})' class="btn btn-outline-success">${!todo.completed ? '완료':'취소'}</button>
        <button onclick='updateTodo(${todo.id})' class="btn btn-outline-success">수정</button>
        <button onclick='deleteTodo(${todo.id})' class="btn btn-outline-success">삭제</button>
        `

        liTag.innerHTML = text
        todoList.appendChild(liTag)
    })
}



window.onload = function(){

    // let addBtn = document.getElementById('addBtn')
    // addBtn.onclick = function(){
    //     alert('addBtn click...')
    // }

    // const addTodo = function() {
    //     alert('click...')
    // }

    let addBtn = document.getElementById('addBtn')
    let updateBtn = document.getElementById('updateBtn')
    let todayBtn = document.getElementById('allBtn')
    let doingBtn = document.getElementById('doingBtn')
    let completeBtn = document.getElementById('completeBtn')
    addBtn.addEventListener('click', addTodo)
    updateBtn.addEventListener('click', updateComplete)

}