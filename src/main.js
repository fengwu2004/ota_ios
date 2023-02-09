import Vue from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import VersionPanel from './components/VersionPanel.vue'
import EnvPanel from './components/EnvPanel.vue'
import { Cell, CellGroup } from 'vant';
import 'vant/lib/index.css';

const routes = [
    {path: '/', component: VersionPanel},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.use(Cell);

app.use(CellGroup);

app.mount('#app')