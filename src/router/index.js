import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarkDownView from '../views/MarkDownView.vue'
import CalendarView from '../views/CalendarView.vue'
import SliderView from '../views/SliderView.vue'
import TodoView from '../views/TodoView.vue'
import TodoCompView from '../views/TodoCompView.vue'
import calculatorView from '../views/calculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: MarkDownView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/slider',
      name: 'slider',
      component: SliderView
    },
    {
      path: '/todo-com-api',
      name: 'todoComp',
      component: TodoCompView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: calculatorView
    }
  ]
})

export default router
