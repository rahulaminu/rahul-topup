import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopUpView from '../views/TopUpView.vue'

const routes = [
{ path: '/', component: HomeView },
{ path: '/topup/:gameId', component: TopUpView }
]

const router = createRouter({
history: createWebHistory(),
routes,
scrollBehavior() {
return { top: 0 }
}
})

export default router