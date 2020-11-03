import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: [],
        id:0
    },
    mutations: {
        addTodo(state, todo){
            state.id++
            todo.id=state.id
            state.todoItems.push(todo);
        },
        moveTodo(state, [id, type]){
            state.todoItems.forEach(el=>{
                if (el.id===id) {
                    el.type=type;
                    return el;
                } else {return el}
            })
        },
        removeTodo(state, todoId){
            state.todoItems = state.todoItems.filter(item=> item.id!==todoId)
        }
    }
});