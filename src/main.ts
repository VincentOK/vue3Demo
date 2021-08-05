import { createApp } from 'vue';
import App from './App';
import router,{setupRouter} from './router';
import { setupRouterGuard } from './router/guard/index';
import {setupStore} from './store';
import {setupVant} from "./plugin/vantPlugin"
import 'lib-flexible/flexible'
import '@/style/index.scss';
(async () => {
    const app = createApp(App);
    setupRouter(app);
    setupRouterGuard();
    setupStore(app);
    setupVant(app);
    await router.isReady();
    app.mount('#app', true);
})()
