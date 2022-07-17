<script setup>
    import {useTodoStore} from '@/store/TodoStore'
    import {storeToRefs} from 'pinia'
    console.log(useTodoStore())

    const TodoStore = useTodoStore();
    const {todos,completedTodos,unCompletedTodos} = storeToRefs(TodoStore);
</script>
<template>
<div>

    <h1>TODO</h1>
    <div>
        <h2 v-show="unCompletedTodos.length">Uncompleted</h2>
        <ul>
            <li v-for="todo in unCompletedTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.isCompleted">
                {{todo.name}}
            </li>
        </ul>
        <h2 v-show="completedTodos.length">Completed</h2>
        <ul>
            <li v-for="todo in completedTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.isCompleted">
                {{todo.name}}
            </li>
        </ul>
    </div>
</div>
</template>