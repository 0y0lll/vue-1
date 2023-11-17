<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1>Todo List</h1>

    <div class="dropdown">
      <button
        type="button"
        class="btn btn-dark dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ filter }}
      </button>

      <ul class="dropdown-menu dropdown-menu-dark">
        <li>
          <a
            class="dropdown-item"
            href="#"
            @click="
              () => {
                filter = 'All'
                store.handleStatusFilter('all')
              }
            "
            >All</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
            @click="
              () => {
                filter = 'Active'
                store.handleStatusFilter('active')
              }
            "
            >Active</a
          >
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
            @click="
              () => {
                filter = 'Done'
                store.handleStatusFilter('done')
              }
            "
            >Done</a
          >
        </li>
      </ul>
    </div>
  </div>

  <ul class="list-group mb-3" v-if="todoList.length">
    <li
      v-for="todo in todoList.filter((item) => item.isShow)"
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
    <RouterLink to="/add" :filter="filter" class="btn btn-primary">Add</RouterLink>
  </div>
</template>

<script setup>
import { useTodoStore } from '@store/TodoStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const store = useTodoStore()
const { todoList } = storeToRefs(store)

const filter = ref('Filter')
</script>

<style lang="scss" scoped></style>
