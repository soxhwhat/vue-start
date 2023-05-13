// 入口文件 createApp函数创建应用实例
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'
//创建一个vue实例
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 挂载到#app上，该节点在index,html中
app.mount('#app')
