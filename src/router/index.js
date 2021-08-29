import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'
import Courses from '../views/Courses.vue'
import SingleReport from '../views/Reports/_id.vue'
import Copyright from '../views/Copyright.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  },
  {
    path: `/courses/:id`,
    name: 'SingleReport',
    component: SingleReport
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/copyright',
    name: 'Copyright',
    component: Copyright
  },
  {
    path: '*',
    redirect: { name: 'not-found' }
  }
]

const router = new VueRouter({
  mode : "history",
  routes
})

export default router
