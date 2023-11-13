<template>
  <h1>Todo List</h1>
  <ul class="list-group">
    <li v-for="todo in todoList" :key="todo" class="list-group-item">
      <input class="form-check-input me-2" type="checkbox" value="" :id="todo.id" />
      <label class="form-check-label" :for="todo.id">{{ todo.title }}</label>
    </li>
  </ul>
</template>

<script setup>
import { reactive } from 'vue'
import { useTodoStore } from '@store/TodoStore'

const store = useTodoStore()
const todoList = reactive(store.todoList)
</script>

<style lang="scss" scoped></style>
