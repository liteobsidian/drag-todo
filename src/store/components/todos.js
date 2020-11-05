const todos = {
    state: {
        todoItems: [],
        currentId:0,
        init:[
            {title: "Планируется", type: "planned"},
            {title: "В работе", type:"working"},
            {title: "Сделано", type:"completed"}
        ]
    },
    mutations: {
        setCurrentId(state, id){
            state.currentId = id;
        },
        addTodo(state, todo){
            state.todoItems.push(todo);
        },
        moveTodo(state, {id, type}){
            state.todoItems = state.todoItems.map(el => el.id===id ? {...el, type} : el);
        },
        removeTodo(state, todoId){
            state.todoItems = state.todoItems.filter(item => item.id !== todoId);
        }
    },

    actions:{
        addTodo({getters, commit}, todo){
            let id = getters.getCurrentId;
            id++;
            commit('addTodo', {...todo, id});
            commit('setCurrentId', id);
        },
        moveTodo({commit}, {id, type}) {
            commit('moveTodo', {id, type});
        },
        removeTodo({commit}, id) {
            commit('removeTodo', id);
        }
    },

    getters: {
        getItemsByType: state => type => state.todoItems.filter(el => el.type === type),
        getCurrentId: state => state.currentId,
        getInitArray: state => state.init
    }
};

export default todos;
