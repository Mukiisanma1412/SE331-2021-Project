import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NProgress from 'nprogress'
import PeopleLayout from "../views/PeopleLayout.vue"
import PeopleDetail from "../views/peopleAndDetail/PeopleDetail.vue";
import DoctorComment from "../views/peopleAndDetail/DoctorComment.vue"
import VaccineDetail from "../views/peopleAndDetail/VaccineDetail.vue"
import NotFound from "../views/NotFound.vue"
import NetworkError from "../views/NetworkError.vue"
import DrugDetail from "../views/DrugDetail.vue"
import MoreDetail from "../views/MoreDetail.vue"
import AddDrug from "../views/AddDrug.vue"
import Auth from "../views/Auth.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
 
  {
    path: '/people/:id',
    name: 'PeopleLayout',
    props: true,
    component: PeopleLayout,
    children: [
      {
        path: 'ppdetail',
        name: 'PeopleDetail',
        component: PeopleDetail
      },
      {
        path: 'comment',
        name: 'DoctorComment',
        component: DoctorComment
      },
      {
        path: 'vaccine/:Vid',
        name: 'VaccineDetail',
        component: VaccineDetail,
        props: true,
      },
    ]
  },
  {
    path: '/DrugDetail',
    name: 'DrugDetail',
    component: DrugDetail
  },

  {
  
     path: '/MoreDetail/:id',
     name: 'MoreDetail',
     props: true,
     component: MoreDetail
    
  },
  
  {
    path: '/AddDrug',
    name: 'AddDrug',
    component: AddDrug
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }, 
  {
    path: '/networkError',
    name: 'NetworkError',
    component: NetworkError
  }, 
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
