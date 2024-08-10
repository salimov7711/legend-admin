import { createApp } from "vue";
import App from "@/App.vue";
import { registerPlugins } from "@core/utils/plugins";
import VueAwesomePaginate from "vue-awesome-paginate";
import { createVfm } from "vue-final-modal";

// Styles
import "@core/scss/template/index.scss";
import "@styles/styles.scss";
import "vue-awesome-paginate/dist/style.css";
import 'vue-final-modal/style.css'
import Vue3Toastify from 'vue3-toastify';
import { useRouter } from "vue-router";

// Create vue app
const app = createApp(App);

const vfm = createVfm();
app.use(VueAwesomePaginate);
app.use(vfm);
app.use(Vue3Toastify)

// Register plugins
registerPlugins(app);


 

// Mount vue app
app.mount("#app");
