import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },


    {
      path: '/persons', // use small first letter
      name: 'persons', // use small first letter
      component: () => import('../views/PersonsPage.vue')
    },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsPage.vue')
    },


    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksPage.vue')

    },
    {
      path: '/project/:id',
      name: 'projectDetail',
      component: () => import('../views/ProjectDetailPage.vue')

    },
    {
      path: '/task/:id',
      name: 'taskDetail',
      component: () => import('../views/TaskDetailPage.vue')

    },
    {
      path: '/person/:id',
      name: 'personDetail',
      component: () => import('../views/PersonDetailPage.vue')

    }
  ]
})


export default router