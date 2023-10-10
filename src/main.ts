import { createApp } from "vue";
//import PrimeVue from "primevue/config";
//import "primeflex/primeflex.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/bootstrap/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "./styles/theme.css";
import "./styles/styles.scss";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

//app.use(PrimeVue);
app.use(router);

router.push("/");

app.mount("#app");
