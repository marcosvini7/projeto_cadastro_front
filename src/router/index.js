import Vue from 'vue'
import VueRouter from 'vue-router'
import Costumers from '../views/Costumers'   
import CostumersIndex from '../components/costumers/Index'
import CostumersShow from '../components/costumers/Show'
import CostumersCreateEdit from '../components/costumers/FormCreateEdit'
import Users from '../views/Users'
import UsersIndex from '../components/users/Index'
import UsersShow from '../components/users/Show'
import UsersCreateEdit from '../components/users/FormCreateEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    component: Users,
    children: [
      {
        path: '/',
        component: UsersIndex
      },
      {
        path: ':id/show',
        component: UsersShow
      },
      {
        path: ':id/edit',
        component: UsersCreateEdit
      },
      {
        path: 'create',
        component: UsersCreateEdit
      },

    ]
  },
  {
    path: '/costumers',
    component: Costumers,
    children: [
      {
        path: '/',
        component: CostumersIndex
      },
      {
        path: ':id/show',
        component: CostumersShow
      },
      {
        path: ':id/edit',
        component: CostumersCreateEdit
      },
      {
        path: 'create',
        component: CostumersCreateEdit
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
