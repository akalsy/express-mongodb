import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login.vue"
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

let router = new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }]
})

export default router