import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import VueAwesomePaginate from "vue-awesome-paginate";
// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import "vue-awesome-paginate/dist/style.css";
// Create vue app
const app = createApp(App)
app.use(VueAwesomePaginate)
// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
