import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import router from "./router";
createApp(App).use(router).mount("#app");
    const routes = [
        {
            path: "/contacts/:id",
            name: "contact.edit",
            component: () => import("@/views/ContactEdit.vue"),
            props: true // Truyền các biến trong $route.params vào làm props
        },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;