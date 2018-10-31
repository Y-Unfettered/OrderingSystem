import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Menu from './components/Menu.vue'
import About from './components/about/About.vue'
import Register from './components/Register.vue'

// 二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      name: "homeLink",
      components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
      }
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About, 
      children: [{
          path: '/about/contact',
          name: "contactLink",
          component: Contact,
          children: [{
              path: '/phone',
              name: "phoneNumber",
              component: Phone
            },
            {
              path: '/personname',
              name: "personName",
              component: PersonName
            }
          ]
        },
        {
          path: '/history',
          name: "historyLink",
          component: History
        },
        {
          path: '/delivery',
          name: "deliveryLink",
          component: Delivery
        },
        {
          path: '/orderingGuide',
          name: "orderingGuideLink",
          component: OrderingGuide
        }]
      }, 
    {
      path: '/admin',
      name: "adminLink",
      component: Admin
    }, 
    {
      path: '*',
      redirect: '/'
    }  
  ]
})

