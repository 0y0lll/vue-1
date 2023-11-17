import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const KEY = 'todoList'
  const todoList = ref(JSON.parse(localStorage.getItem(KEY)) || [])

  const getTodoId = () => {
    return todoList.value.length ? todoList.value[0].id + 1 : 1
  }

  const addTodo = (todo) => {
    if (todoList.value.length) {
      todoList.value.unshift(todo)
    } else {
      todoList.value.push(todo)
    }
  }

  const removeTodo = (id) => {
    const filtered = todoList.value.filter((item) => item.id != id)

    localStorage.setItem(KEY, JSON.stringify(filtered))
    todoList.value = filtered
  }

  const handleStatus = (id) => {
    const target = todoList.value.find((item) => item.id === id)

    if (target.status == 'active') {
      target.status = 'done'
    } else {
      target.status = 'active'
    }
  }

  const handleStatusFilter = (filter) => {
    if (!todoList.value.length) {
      return
    }

    todoList.value.map(
      (item) => (item.isShow = item.status == filter ? true : filter == 'all' ? true : false)
    )
  }

  watch(todoList.value, async (newTodoList) => {
    localStorage.setItem(KEY, JSON.stringify(newTodoList))
  })

  return { todoList, addTodo, removeTodo, handleStatus, getTodoId, handleStatusFilter }
})
