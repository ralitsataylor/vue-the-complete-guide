import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function () {
  app.mount('#app');
});
