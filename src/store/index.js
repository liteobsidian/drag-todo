import Vue from 'vue';
import Vuex from 'vuex';
import todos from "@/store/components/todos";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        todos
    }
});

export default store
