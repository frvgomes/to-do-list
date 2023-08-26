
const todosApp = {
    data() {
        return {
            todos:[],
            newTodo:{
                done:false
            }
        }
    },
    methods:{
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done:false
                };
                localStorage.setItem("tarefas", JSON.stringify(this.todos))
            } else {
                alert("Texto da tarefa é obrigtório.")
            }           
        }
    },
    created(){
        this.todos = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem("tarefas")) : this.todos;         
    },
    updated(){
        localStorage.setItem("tarefas", JSON.stringify(this.todos));
    }
}

Vue.createApp(todosApp).mount('#app');

