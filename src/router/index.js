import { createRouter, createWebHistory } from "vue-router";

import HomeTask from '../components/HomePage';
import FormTask from '../components/FormTask';
// import DetailTask from '../components/DetailTask';

const routes = [
    { path: '/', component: HomeTask},
    { path: '/create', component: FormTask},
    { path: '/edit/:id',name:'edit', component: FormTask,}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router