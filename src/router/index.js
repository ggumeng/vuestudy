import Vue from 'vue';
import VueRouter from 'vue-router';
import StudyMain from '../views/StudyMain.vue';
import StudyStore from '../views/StudyStore.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'StudyMain',
    component: StudyMain,
    children: [
      {
        path: '/content',
        name: 'StudyStore',
        component: StudyStore,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
