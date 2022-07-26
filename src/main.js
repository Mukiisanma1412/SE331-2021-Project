import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  'nprogress/nprogress.css'




const GStore = reactive({ flashMessage: '' })

createApp(App).use(store).use(router).provide('GStore', GStore).mount("#app");

