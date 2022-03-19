<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Todo List With Composition API</h1>
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
import { ref } from 'vue';
export default {
    setup(){
        const todos = ref([
                'Hello world with JS',
                'Header Component',
                'Footer Component',
            ]);
        const todoText = ref("");

        function addTodo(){
            todos.value.unshift (todoText.value);
            todoText.value = '';
        }

        function deleteTodo(targetIndex){
            todos.value = todos.value.filter((todo, index) => index != targetIndex);
        }

        return{
            todos, todoText, addTodo, deleteTodo
        }
    },
}
</script>