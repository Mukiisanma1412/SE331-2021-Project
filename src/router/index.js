import { createRouter, createWebHistory } from "vue-router";
import NProgress from 'nprogress'

import NotFound from "../views/AuthAndErrorHandler/NotFound.vue"
import NetworkError from "../views/AuthAndErrorHandler/NetworkError.vue"

import Auth from "../views/AuthAndErrorHandler/Auth.vue"

import DrugDetail from "../views/drugsComponent/DrugDetail.vue"
import MoreDetail from "../views/drugsComponent/MoreDetail.vue"
import AddDrug from "../views/drugsComponent/AddDrug.vue"

const routes = [
  {
    path: "/",
    name: 'DrugDetail',
    component: DrugDetail,
    props: (route) => ({page: parseInt(route.query.page) || 1 })
  },

 
  // {
  //   path: '/people/:id',
  //   name: 'PeopleLayout',
  //   props: true,
  //   component: PeopleLayout,
  //   children: [
  //     {
  //       path: 'ppdetail',
  //       name: 'PeopleDetail',
  //       component: PeopleDetail
  //     },
  //     {
  //       path: 'comment',
  //       name: 'DoctorComment',
  //       component: DoctorComment
  //     },
  //     {
  //       path: 'vaccine/:Vid',
  //       name: 'VaccineDetail',
  //       component: VaccineDetail,
  //       props: true,
  //     },
  //   ]
  // },


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
