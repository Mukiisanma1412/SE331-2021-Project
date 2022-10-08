import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import GStore from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  'nprogress/nprogress.css'


createApp(App).use(router).provide('GStore', GStore).mount("#app");

