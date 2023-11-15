<template>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" v-model="title" class="form-control" id="title" placeholder="todo" />
  </div>

  <div class="mb-3">
    <label for="content" class="form-label">Content</label>
    <textarea
      class="form-control"
      v-model="content"
      id="content"
      rows="3"
      placeholder="Enter your todo"
    ></textarea>
  </div>

  <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-primary" @click="onClick()">Add</button>
  </div>
</template>

<script setup>
import { useTodoStore } from '@store/TodoStore'
import { ref } from 'vue'
import router from '../router'

const store = useTodoStore()

const title = ref('')
const content = ref('')

const todo = {
  id: store.getTodoId(),
  title: title,
  content: content,
  status: 'active'
}

const onClick = () => {
  store.addTodo(todo)
  router.push('/todo')
}
</script>

<style lang="scss" scoped></style>
