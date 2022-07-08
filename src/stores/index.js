import {createStore} from 'vuex';
// import todos from './modules/todos';
import api from '@/api'; 

const store = createStore({
    state: {
        todos: {}
    },
    mutations: {
        setData(state, data) {
            if (data === null || !Object.keys(data).length) {
                state.todos = null;
                return false;
            }
            for (const [id, value] of Object.entries(data)) {
                data[id].id = id;
            }

            state.todos = data;
        }
    },
    actions: {
        async asyncFetchTodos(context) {
            let todos = await api.fetchTodos();
            context.commit('setData', todos);
        },
        fetchTodos(context) {
            api.fetchTodos().then((todos) => context.commit('setData', todos));
        }
    }
});

export default store;