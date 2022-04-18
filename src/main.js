import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from "@/routes";
import i18n from "@/locales";
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

const title_temp = document.title;

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title + ' | ' + title_temp;
    if (to.meta.requireAuth) {
        const userInfo = localStorage.getItem('userToken');
        if (!userInfo) {
            console.log("需要登录");
            to = {path: '/user'};
            next(to);
        }
    }
    if (from['path'] !== to['path'])
        next();
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
