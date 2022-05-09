import { createWebHistory, createRouter } from "vue-router";
import AddTutorial from '../components/TutorialAdd';
import TutorialList from '../components/TutorialList';
import TodosList from '../components/Todos/TodosList';

const routes = [
    {
        path: "/",
        alias: "/tutorials",
        name: "tutorials",
        component: TutorialList
    },
    /* {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component: () => import("./components/Tutorial")
    }, */
    {
        path: "/add",
        name: "add",
        component: AddTutorial
    },
    {
        path: "/todos",
        name: "todos-list",
        component: TodosList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;