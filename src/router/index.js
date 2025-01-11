import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavorisView from '../views/FavorisView.vue'
import AddProductView from '../views/AddProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: FavorisView,
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView,
    }
  ],
})

export default router
