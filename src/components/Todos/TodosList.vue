<template>
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <form name="todoForm" @submit.prevent="addTodo">
                <div class="mb-4">
                    <h1 class="text-grey-darkest">Todo List</h1>
                    <div class="flex mt-4">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                            v-model="todo.title" placeholder="Add Todo">
                        <button
                            class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">{{ addTodoBtnName }}</button>
                    </div>
                </div>
            </form>
            <div v-if="Object.keys(todos).length">
                <div class="flex mb-4 items-center" v-for="(todo, index) in todos" :key="index">
                    <p class="w-full"
                        :class="{ 'text-grey-darkest': !todo.completed, 'line-through text-green': todo.completed }">
                        {{ todo.title }}</p>
                    <button @click="editTodo(todo)"
                        class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Update</button>
                    <button @click="updateStatus(todo)"
                        class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">{{ todo.completed ? 'Not done' : 'Done' }}</button>
                    <button @click="deleteTodo(todo)"
                        class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                </div>
            </div>
            <div v-else>
                <p class="w-full">No Todos found</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodosList',
    computed : {
        addTodoBtnName() {
            if (this.todo.id) {
                return 'Update';
            }
            return 'Add';
        }
    },
    data() {
        return {
            url: 'https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/',
            todos: {},
            todo: {
                id: null,
                userId: 1,
                title: null,
                completed: false
            }
        }
    },
    methods: {
        processData(data) {
            if (data === null || !Object.keys(data).length) {
                this.todos = null;
                return false;
            }
            for (const [id, value] of Object.entries(data)) {
                data[id].id = id;
            }
            this.todos = data;
        },
        getList() {
            fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json',).then(response => response.json())
                .then(data => {
                    this.processData(data);
                });
        },
        editTodo(todo) {
            this.todo = todo;
        },
        updateStatus(todo) {
            todo.completed = !todo.completed;
            this.storeTodo(todo)
        },
        deleteTodo(todo) {
            fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos/' + todo.id + '.json', {
                method: 'DELETE',
                // mode: 'no-cors'
            }).then((response) => response.json())
                .then(() => this.getList());
        },
        storeTodo(todo) {
            if (typeof todo == 'undefined') {
                todo = this.todo;
            }
            todo.title = todo.title.trim();
            if (todo.title == '') {
                return false;
            }

            let url = 'https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json', method = 'POST';

            if (todo.id) {
                let todoId = todo.id;
                url = 'https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos/' + todoId + '.json';
                method = 'PUT';
            }
            delete todo.id;

            fetch(url, {
                method: method,
                body: JSON.stringify(todo)
            }).then(response => {
                this.getList();
                this.todo.title = '';
            });
        },
        addTodo() {
            this.storeTodo();
        }
    },
    created() {
        console.log('created');
        this.getList();
    }
}
</script>