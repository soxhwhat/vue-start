<script>
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    id: id++,
                    text: 'Learn Vue.js',
                    done: false
                },
                {
                    id: id++,
                    text: 'Learn React.js',
                    done: false
                },
                {
                    id: id++,
                    text: 'Learn Angular.js',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                id: id++,
                text: this.newTodo,
                done: false
            })
        },
        removeTodo(todo) {
            this.todos.pop(todo)

        }
    }
}
</script>

<template>
  <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
  </form>
  <ul>
      <li v-for="todo in todos" :key="todo.id">
          <span>{{ todo.text }}</span>
          <button @click="removeTodo(todo)">Remove</button>
      </li>
  </ul>
</template>

<style>

</style>