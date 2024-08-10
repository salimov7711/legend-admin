import { createMemoryHistory, createRouter } from "vue-router";

// Import your page components
import CategoryView from "@/pages/CategoryView.vue";

// Define your routes
const routes = [
  {
    path: "/categories/:id",
    name: "category",
    component: CategoryView,
  },
];

// Create and export your router
const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  console.log('ss')
})

export default router;
