import { createRouter,createWebHistory } from 'vue-router';

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Select from "../views/Select.vue";

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login},
    { path: '/select', name: 'select', component: Select}
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
 
export default router;