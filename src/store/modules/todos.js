const todos = {
    state: {
        todos: [
            {title:"Планируется", type:"planned", todoItems:[]},
            {title:"В работе", type:"working", todoItems: []},
            {title:"Сделано", type:"completed", todoItems: []}
        ]
    },
    mutations: {
        addTodo(state, todo){
            state.todos.todoItems.push(todo)
        },
        removeTodo(state, todoId){
            state.todos = state.todos.filter(item=> item.id!==todoId)
        },
        checkTodo(state, todo){
            state.todos=state.todos.map(item=>(item.id===todo.id? todo : item))
        },
        filterTodos(state, filter){
            state.filter = filter
        },
        checkAll(state){
            state.allCheck = !state.allCheck;
            state.allCheck? state.todos.map(item => item.checked = true) : state.todos.map(item => item.checked = false);
        },
        allRemove(state){
            state.todos=[];
            state.allCheck = false;
        }
    },
    actions: {

    },
    getters: {},
}

export default todos;