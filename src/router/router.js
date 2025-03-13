import About from "@/pages/About.vue";
import Main from "@/pages/Main.vue"
import PostIdPage from "@/pages/PostIdPage.vue";
import UserPage from "@/pages/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router"

 const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts', // url строка
    component: UserPage
  },
  {
    path: '/about', // url строка
    component: About
  },
  {
    path: '/posts/:id', // url строка
    component: PostIdPage
  },
 ]

 const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
 })

 export default router;