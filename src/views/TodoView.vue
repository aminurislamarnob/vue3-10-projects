<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Todo List</h1>
            </div>
            <div class="col-lg-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(todo, index) in todos" :key="index">{{ todo }} <span class="btn" @click="deleteTodo(index)">x</span></li>
                </ul>
                <form @submit.prevent="addTodo" class="mt-5">
                    <h4>Add Todo</h4>
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" v-model="todoText">
                        <button type="submit" class="btn btn-primary btn-sm">Add Todo</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todos: [
                'Hello world with JS',
                'Header Component',
                'Footer Component',
            ],
            todoText: "",
        }
    },
    methods: {
        addTodo(){
            this.todos.unshift (this.todoText);
            this.todoText = '';
        },
        deleteTodo(targetIndex){
            this.todos = this.todos.filter((todo, index) => index != targetIndex);
        }
    }
}
</script>