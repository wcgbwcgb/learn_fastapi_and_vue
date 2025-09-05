import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NewsPage from './pages/NewsPage.vue'
import AboutPage from './pages/AboutPage.vue'
import NewsDetail1 from './pages/NewsDetail1.vue'
import NewsDetail2 from './pages/NewsDetail2.vue'

// 配置路由规则
const routes = [
    {path:"/home", component: HomePage},
    {path:"/about", component: AboutPage},
    {path:"/news", component: NewsPage, name:"news",
        children:[
            {
                path:"1", // /news/1
                component: NewsDetail1
            },
            {
                name:'xinwen2',
                path:"2/:id/:title/:content",
                component: NewsDetail2
            }
        ]
    }
]
// 创建路由器
const router = createRouter({
    history: createWebHistory(), //路由工作模式
    routes: routes
})
// 加载路由器
const app = createApp(App)
app.use(router)

import { createPinia } from 'pinia' 

const pinia = createPinia()
app.use(pinia)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
