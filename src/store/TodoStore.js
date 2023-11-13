import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todoList = reactive([
    {
      id: 0,
      title: 'todo1',
      content: 'todo test',
      status: 'active'
    },
    {
      id: 1,
      title: 'todo2',
      content: 'todo test',
      status: 'done'
    }
  ])

  const addTodo = (todo) => {
    todoList.push(todo)
  }

  const removeTodo = (id) => {
    todoList.splice(id, 1)
  }

  return { todoList, addTodo, removeTodo }
})
