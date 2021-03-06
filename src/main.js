import { createApp } from 'vue'
import App from './App.vue'
import {router} from './route/router'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Comment , Avatar , Tooltip , List ,Button , Form , Input  } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import VueLazyload from 'vue-lazyload'

const app = createApp(App)
app.use(router)
app.use(store)
//app.use(BootstrapVue)
//app.use(IconsPlugin)
app.use(ElementPlus)
app.use(Comment)
app.use(Avatar)
app.use(Tooltip)
app.use(List)
app.use(Button)
app.use(Form)
app.use(Input)
//app.use(VueLazyload)
app.mount('#app')

