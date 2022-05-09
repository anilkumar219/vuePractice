<template>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="saveTutorial">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="title"
                >Title</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    id="title"
                    required
                    v-model="tutorial.title"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="description"
                >Description</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    required
                    v-model="tutorial.description"
                />
            </div>
        </div>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >Save</button>
    </form>

    <button class="btn btn-success" @click="newTutorial">Add</button>
</template>

<script>
export default {
    name: "TutorialAdd",
    data() {
        return {
            tutorial: {
                id: null,
                title: "",
                description: "",
                published: false,
            },
            submitted: false,
        };
    },
    methods: {
        saveTutorial() {
            fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/tutorials.json', {
                method: 'POST', // or 'PUT'
                mode : 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: this.tutorial.title,
                    description: this.tutorial.description
                }),
            });
            // process data to firebase
        },
    },
};
</script>
