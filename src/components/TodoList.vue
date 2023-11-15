<template>
  <h1>Todo List</h1>

  <ul class="list-group mb-3" v-if="todoList.length">
    <li
      v-for="todo in todoList"
      :key="todo"
      class="list-group-item d-flex align-items-center justify-content-between"
    >
      <div class="d-flex">
        <input
          class="form-check-input me-2"
          type="checkbox"
          :value="todo.id"
          :id="todo.id"
          :checked="todo.status == 'done'"
          @change="store.handleStatus(todo.id)"
        />
        <div>
          <label class="form-check-label" :for="todo.id">{{ todo.title }} </label>
          <p class="mb-0">{{ todo.content }}</p>
        </div>
      </div>

      <button type="button" class="btn btn-dark" @click="store.removeTodo(todo.id)">Delete</button>
    </li>
  </ul>

  <ul class="list-group mb-3" v-if="!todoList.length">
    <li class="list-group-item">No list</li>
  </ul>

  <div class="d-flex justify-content-end">
    <RouterLink to="/add" class="btn btn-primary">Add</RouterLink>
  </div>
</template>

<script setup>
import { useTodoStore } from '@store/TodoStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

const store = useTodoStore()
const { todoList } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>
