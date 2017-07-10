// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import "./common/stylus/index.styl"

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
let router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/goods', component: goods },
        { path: '/ratings', component: ratings },
        { path: '/seller', component: seller }
    ]
})

router.push('/goods')

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* eslint-disable no-new */
new Vue({
    el: '#app',
    data: {
        eventHub: new Vue()
    },
    router,
    render: h => h(App)
})

// router.map();

// router.start(app, '#app')

