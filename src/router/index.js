import { createRouter, createWebHistory } from 'vue-router'
import TarefasView from '../views/TarefasView.vue'
import Sobre from '../views/SobreView.vue'

const routes = [
  {
    path: '/',
    name: 'tarefas',
    component: TarefasView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
