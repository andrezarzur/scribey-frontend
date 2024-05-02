import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import { createI18n } from 'vue-i18n';
import PT from './locale/pt.json'
import EN from './locale/en.json'
import quasarUserOptions from './quasar-user-options'
import './assets/css/main.css';
import router from './router/routes'
import vue3GoogleLogin from 'vue3-google-login'


const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: ''
})

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("i18nextLng") || "PT",
    messages: {
      PT: PT,
      EN: EN
    }
  });
  
app.use(router)
app.use(i18n);
app.use(Quasar, quasarUserOptions).mount('#app')
