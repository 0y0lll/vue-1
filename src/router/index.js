import { createWebHistory, createRouter } from 'vue-router'
import TheWelcome from '@components/TheWelcome.vue'
import CounterTest from '@components/CounterTest.vue'
import NoComponent from '@components/NoComponent.vue'
import Props from '@components/PropsComponent.vue'
import TodoList from '@components/TodoList.vue'
import AddTodo from '@components/AddTodo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: TheWelcome },
    { path: '/counter', name: 'counter', component: CounterTest },
    { path: '/props', name: 'props', component: Props, props: { prop: 'hi' } },
    { path: '/todo', name: 'todo', component: TodoList },
    { path: '/add', name: 'addTodo', component: AddTodo, props: { filter: 'All' } },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NoComponent
    }
  ]
})

export default router
