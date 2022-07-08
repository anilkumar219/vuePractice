
export default {
    async asyncFetchTodos() {
        let response = await fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json');
        response = await response.json();
        return response;
    },
    fetchTodos() {
        return fetch('https://vue-demo-13c5f-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json',).then(response => response.json())
            .then(data => {
                return data;
                
            });
    }
}